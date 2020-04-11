import { SudokuGrid } from "../types";
import { isValidHouse, HOUSES_LIST } from "./house";
import every from "lodash/fp/every";
import map from "lodash/fp/map";

/**
 * Verify that a grid is valid according to the three constraints of Sudoku: every row, every column and every 3x3 box
 * must contain only one occurence of the digits 1 through 9. However, it does not verify that the gris is complete or
 * that the digits are well placed, it only indicates that there is currently no duplicate values in any row, column or
 * box.
 *
 * @summary Determines whether the current state of the grid is valid.
 *
 * @since 0.0.1
 *
 * @param {SudokuGrid} grid The grid to validate.
 * @returns {boolean} `true` if the given grid is currently valid; otherwise, `false`.
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
 * isValidGrid(grid);
 * // => true
 */
export function isValidGrid(grid: SudokuGrid): boolean {
  const rows = HOUSES_LIST.filter((house) => house.type === "row");
  return every(isValidHouse)(
    map((house) => {
      return { grid, house };
    })(rows),
  );
}
