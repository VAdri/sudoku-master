import { Digit, House, SudokuGrid, VALID_CELL_INDEXES } from "../../types";
import { filter, first, map, pipe } from "remeda";
import { countBy, values } from "ramda";

/**
 * Verify that a house (row, column or box) does not contain any duplicate value, meaning it is valid according to the
 * rules of Sudoku. However, it does not mean that the house is complete nor that the digits in the house are correct:
 * they can be placed according to the rules in their own house but could be in conflict in another house, or lead to an
 * error if the game continue.
 *
 * @summary Determines whether a house is valid.
 *
 * @private
 * @since 0.0.1
 *
 * @param {SudokuGrid} $0.grid The grid containing the house to validate.
 * @param {House} $0.house The house to validate.
 * @returns {boolean} `true` if the given house is currently valid; otherwise, `false`.
 *
 * @example
 * const grid = parseGrid(`
 *   .------------------.------------------.------------------.
 *   | 19    7     169  | 2     156   3    | 459   8     49   |
 *   | 3     4     5    | 7     9     8    | 1     2     6    |
 *   | 2     169   8    | 16    4     156  | 3579  35    379  |
 *   :------------------+------------------+------------------:
 *   | 4     136   1367 | 5     1367  9    | 8     36    2    |
 *   | 17    5     12367| 8     12367 4    | 367   9     37   |
 *   | 8     369   23679| 36    2367  26   | 34567 3456  1    |
 *   :------------------+------------------+------------------:
 *   | 1579  139   13479| 13469 12356 1256 | 23469 346   8    |
 *   | 159   8     1349 | 13469 12356 1256 | 23469 7     349  |
 *   | 6     2     349  | 349   8     7    | 349   1     5    |
 *   '------------------'------------------'------------------'`);
 * isValidHouse({ grid, house: HOUSES_LIST[0] });
 * // => true
 */
export function isValidHouse({ grid, house }: { readonly grid: SudokuGrid; readonly house: House }): boolean {
  const invalidHouseDuplicate = pipe(
    VALID_CELL_INDEXES,
    map((index) => house.cells[index]),
    filter((cell) => grid.digits.has(cell)),
    countBy((cell) => grid.digits.get(cell) as Digit),
    values,
    filter((count: number) => count !== 1),
    first(),
  );
  return invalidHouseDuplicate === undefined ? true : false;
}
