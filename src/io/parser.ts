import { Digit, Pencilmarks, SudokuGrid } from "../types";
import { toIndexValuePairs } from "../utils/collection";
import { filter, map, pipe } from "remeda";
import includes from "lodash/fp/includes";

/**
 * Pattern for a single line with no pencilmarks but empty cells instead
 * (marked as ".", "-", "*" or "0").
 * @private
 * @example
 * ".234..8..6....7......53.62...5......84.....36......1...52.96......1....7..8..521."
 * "-234--8--6----7------53-62---5------84-----36------1---52-96------1----7--8--521-"
 * "*234**8**6****7******53*62***5******84*****36******1***52*96******1****7**8**521*"
 * "023400800600007000000530620005000000840000036000000100052096000000100007008005210"
 */
export const PATTERN_LINE_WITHOUT_CANDIDATES = /^([1-9]|[.\-*0]){81}$/;

/**
 * Pattern for a single line with pencilmarks (cells are delimited by spaces).
 * @private
 * @example
 * "1579 2 3 4 16 19 8 579 159 6 189 149 289 128 7 3459 459 13459 1479 1789 1479 5 3 189 6 2 149 12379 13679 5 236789 124678 123489 479 4789 2489 8 4 179 279 1257 129 579 3 6 2379 3679 679 236789 245678 23489 1 45789 24589 1347 5 2 378 9 6 34 48 348 349 369 469 1 248 2348 3459 45689 7 3479 3679 8 37 47 5 2 1 349"
 */
export const PATTERN_LINE_WITH_SPACES = /^([1-9]+\s){80}[1-9]+$/;

/**
 * Pattern for multiple lines with pencilmarks (cells are delimited by spaces).
 * @private
 * @example
 * `1579 2 3 4 16 19 8 579 159
 * 6 189 149 289 128 7 3459 459 13459
 * 1479 1789 1479 5 3 189 6 2 149
 * 12379 13679 5 236789 124678 123489 479 4789 2489
 * 8 4 179 279 1257 129 579 3 6
 * 2379 3679 679 236789 245678 23489 1 45789 24589
 * 1347 5 2 378 9 6 34 48 348
 * 349 369 469 1 248 2348 3459 45689 7
 * 3479 3679 8 37 47 5 2 1 349`
 */
export const PATTERN_LINES_WITH_SPACES = /^[\n\s1-9]{81,}$/;

/**
 * Pattern for multiple lines lines with pencilmarks (cells are surrounded by
 * brackets like "{}", "()" or "[]"). Brackets around big numbers are optional.
 * @private
 * @example
 * `{1579}234{16}{19}8{579}{159}
 * [6][189][149][289][128][7][3459][459][13459]
 * (1479)(1789)(1479)53(189)62(149)
 * {12379}{13679}{5}{236789}{124678}{123489}{479}{4789}{2489}
 * 84[179][279][1257][129][579]36
 * (2379)(3679)(679)(236789)(245678)(23489)(1)(45789)(24589)
 * {1347}52{378}96{34}{48}{348}
 * (349)(369)(469)(1)(248)(2348)(3459)(45689)(7)
 * [3479][3679][8][37][47][5][2][1][349]`
 */
export const PATTERN_LINES_WITH_BRACKETS = /^[\n\s]*((([{([])[1-9]+[}|)|\]]|[1-9]+){9}[\n\s]*){9}$/;

/**
 * Pattern for a table with no pencilmarks but empty cells instead (marked as
 * ".", "-", "*" or "0") and no grid lines.
 * @private
 * @example
 * `
 * .234..8..
 * 6....7...
 * ...53.62.
 * ..5......
 * 84.....36
 * ......1..
 * .52.96...
 * ...1....7
 * ..8..521.`
 */
export const PATTERN_NAKED_TABLE_WITHOUT_CANDIDATES = /^([\n\s]*([1-9]|[.\-*0]){9}[\n\s]*){9}$/;

/**
 * Pattern for a table with no pencilmarks but empty cells instead (marked as
 * ".", "-", "*" or "0") and with grid lines.
 * @private
 * @example
 * `
 * +---+---+---+
 * |.23|4..|8..|
 * |6..|..7|...|
 * |...|53.|62.|
 * +---+---+---+
 * |..5|...|...|
 * |84.|...|.36|
 * |...|...|1..|
 * +---+---+---+
 * |.52|.96|...|
 * |...|1..|..7|
 * |..8|..5|21.|
 * +---+---+---+`
 */
export const PATTERN_TABLE_WITHOUT_CANDIDATES = /^[\n\s]*((\+-+){3}\+[\n\s]+(((\|([1-9]|[.\-*0]){3}){3}\|[\n\s]+){3})){3}(\+-+){3}\+[\n\s]*$/;

/**
 * Pattern for a table with pencilmarks and grid lines.
 * @private
 * @example
 * `
 * +----------------------+----------------------+----------------------+
 * | 1579   2      3      | 4      16     19     | 8      579    159    |
 * | 6      189    149    | 289    128    7      | 3459   459    13459  |
 * | 1479   1789   1479   | 5      3      189    | 6      2      149    |
 * +----------------------+----------------------+----------------------+
 * | 12379  13679  5      | 236789 124678 123489 | 479    4789   2489   |
 * | 8      4      179    | 279    1257   129    | 579    3      6      |
 * | 2379   3679   679    | 236789 245678 23489  | 1      45789  24589  |
 * +----------------------+----------------------+----------------------+
 * | 1347   5      2      | 378    9      6      | 34     48     348    |
 * | 349    369    469    | 1      248    2348   | 3459   45689  7      |
 * | 3479   3679   8      | 37     47     5      | 2      1      349    |
 * +----------------------+----------------------+----------------------+`
 */
export const PATTERN_TABLE = /^[\n\s]*((\+-+){3}\+[\n\s]+(((\|(\s+[1-9]+\s*){3}){3}\|[\n\s]+){3})){3}(\+-+){3}\+[\n\s]*$/;

/**
 * Pattern for a table with pencilmarks and grid lines like it is described in
 * sudopedia.
 * @private
 * @see http://sudopedia.enjoysudoku.com/Diagrams_and_Notations.html
 * @example
 * `
 * .----------------------.----------------------.----------------------.
 * | 1579   2      3      | 4      16     19     | 8      579    159    |
 * | 6      189    149    | 289    128    7      | 3459   459    13459  |
 * | 1479   1789   1479   | 5      3      189    | 6      2      149    |
 * :----------------------+----------------------+----------------------:
 * | 12379  13679  5      | 236789 124678 123489 | 479    4789   2489   |
 * | 8      4      179    | 279    1257   129    | 579    3      6      |
 * | 2379   3679   679    | 236789 245678 23489  | 1      45789  24589  |
 * :----------------------+----------------------+----------------------:
 * | 1347   5      2      | 378    9      6      | 34     48     348    |
 * | 349    369    469    | 1      248    2348   | 3459   45689  7      |
 * | 3479   3679   8      | 37     47     5      | 2      1      349    |
 * '----------------------'----------------------'----------------------'`
 */
export const PATTERN_TABLE_SUDOPEDIA = /^[\n\s]*(\.-+){3}\.(([\n\s]+\|((\s\d+\s*){3}\|\s*){3}){3}[\n\s]+:(-+[+\s]){2}-+:\s*){2}([\n\s]+\|((\s\d+\s*){3}\|\s*){3}){3}[\n\s]+('-+){3}'[\n\s]*$/;

function parseLine(line: string, delimiter: string, ignoredCellSymbols: readonly string[] = []): SudokuGrid {
  const cells = line.split(delimiter);

  const digits = new Map<number, Digit>(
    pipe(
      cells,
      toIndexValuePairs,
      filter((entry: readonly [number, string]) => entry[1].length === 1 && !includes(entry[1])(ignoredCellSymbols)),
      map((entry: readonly [number, string]): readonly [number, Digit] => [entry[0], parseInt(entry[1], 10) as Digit]),
    ),
  );

  const candidates = new Map<number, Pencilmarks>(
    pipe(
      cells,
      toIndexValuePairs,
      filter((entry: readonly [number, string]) => entry[1].length > 1),
      map((entry: readonly [number, string]): readonly [number, Pencilmarks] => [
        entry[0],
        entry[1].split("").map((d) => parseInt(d, 10) as Digit),
      ]),
    ),
  );

  return {
    digits,
    candidates,
  } as SudokuGrid;
}

/**
 * Converts a string into a sudoku grid.
 *
 * The string can contain only big numbers (digits), in which case the empty
 * cells must be marked with one of these symbols: ".", "-", "*", "0"; or it
 * can also contain the little numbers (or candidates), in which case they
 * need to be grouped (using brackets around them or putting spaces between
 * them for instance) in order to be able to differentiate each cell.
 *
 * The grid can be organized in a single line, in multiple lines or as a grid
 * (with symbols representing the grid lines). The regular expressions used to
 * validate these formats are exported in constants prefixed with "PATTERN_".
 *
 * @summary Converts a string into a sudoku grid.
 *
 * @since 0.0.1
 *
 * @param {string} stringGrid The string representing a sudoku grid.
 * @returns {(SudokuGrid | null)} The `SudokuGrid` that was parsed, or `null`
 * if the given string was not in a valid format.
 *
 * @see http://sudopedia.enjoysudoku.com/Diagrams_and_Notations.html
 * @see http://www.sadmansoftware.com/sudoku/faq22.php
 *
 * @example
 * const grid = parseGrid(`
 *   +---+---+---+
 *   |*23|4**|8**|
 *   |6**|**7|***|
 *   |***|53*|62*|
 *   +---+---+---+
 *   |**5|***|***|
 *   |84*|***|*36|
 *   |***|***|1**|
 *   +---+---+---+
 *   |*52|*96|***|
 *   |***|1**|**7|
 *   |**8|**5|21*|
 *   +---+---+---+
 * `);
 */
export function parseGrid(stringGrid: string): SudokuGrid | null {
  if (stringGrid.match(PATTERN_LINE_WITHOUT_CANDIDATES)) {
    return parseLine(stringGrid, "", [".", "-", "*", "0"]);
  } else if (stringGrid.match(PATTERN_LINE_WITH_SPACES)) {
    return parseLine(stringGrid, " ");
  } else {
    // We may need to clean the string and parse it again
    if (stringGrid.match(PATTERN_LINES_WITH_SPACES)) {
      return parseGrid(
        stringGrid
          .replace(/\n/g, " ")
          .replace(/(^[\n\s]+)|([\n\s]+$)/g, "")
          .replace(/\s{2,}/g, " "),
      );
    } else if (stringGrid.match(PATTERN_LINES_WITH_BRACKETS)) {
      return parseGrid(
        stringGrid
          .replace(/(?!\{|\(|\[)\b[1-9]+\b(?![\w\s]*[})\]])/g, (match) => match.split("").join(" "))
          .replace(/\n/g, " ")
          .replace(/(\{|\}|\(|\)|\[|\])/g, " ")
          .replace(/(^[\n\s]+)|([\n\s]+$)/g, "")
          .replace(/\s{2,}/g, " "),
      );
    } else if (stringGrid.match(PATTERN_NAKED_TABLE_WITHOUT_CANDIDATES)) {
      return parseGrid(stringGrid.replace(/(\n|\s)/g, ""));
    } else if (stringGrid.match(PATTERN_TABLE_WITHOUT_CANDIDATES)) {
      return parseGrid(stringGrid.replace(/((\+-+){3}\+|\||\n|\s)/g, ""));
    } else if (stringGrid.match(PATTERN_TABLE)) {
      return parseGrid(stringGrid.replace(/((\+-+){3}\+|\||\n|\s)/g, " "));
    } else if (stringGrid.match(PATTERN_TABLE_SUDOPEDIA)) {
      return parseGrid(stringGrid.replace(/((\.-+){3}\.|:(-+[+\s]){2}-+:|('-+){3}'|\||\n|\s)/g, " "));
    } else {
      // The given string is not formatted correctly
      return null;
    }
  }
}
