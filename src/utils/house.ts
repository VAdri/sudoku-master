import {
  CellIndex,
  House,
  HouseIndex,
  HouseType,
  HouseCells,
  SudokuGrid,
  VALID_CELL_INDEXES,
  VALID_HOUSE_TYPES,
  VALID_HOUSE_INDEXES,
} from "../types";
import countBy from "lodash/fp/countBy";
import every from "lodash/fp/every";
import flatMap from "lodash/fp/flatMap";
import fromPairs from "lodash/fp/fromPairs";
import map from "lodash/fp/map";
import flow from "lodash/fp/flow";
import filter from "lodash/fp/filter";
import values from "lodash/fp/values";

/**
 * Calculate the index (between 0 and 80) of a given cell according to its position inside its house.
 *
 * @since 0.0.1
 *
 * @param {HouseType} houseType The type of house (row, column or box) on which the cell is located.
 * @param {HouseIndex} houseIndex The index of the house (e.g. row 1, or box 5...) in which the cell is located.
 * @param {CellIndex} cellIndex The position of the cell inside its house.
 *
 * @returns {number} The index of the cell in the grid, or `-1` if the cell is not valid.
 *
 * @example
 * getCellIndexInGrid("row", 2, 0);
 * // => 18
 * getCellIndexInGrid("col", 5, 4);
 * // => 41
 * getCellIndexInGrid("box", 7, 6);
 * // => 75
 */
export function getCellIndexInGrid(houseType: HouseType, houseIndex: HouseIndex, cellIndex: CellIndex): number {
  switch (houseType) {
    case "row":
      return houseIndex * 9 + cellIndex;
    case "col":
      return houseIndex + cellIndex * 9;
    case "box":
      return (
        Math.floor(cellIndex / 3) * 9 + // row
        Math.floor(cellIndex % 3) + // col
        Math.floor(houseIndex / 3) * 9 * 3 + // row offset
        Math.floor(houseIndex % 3) * 3 // col offset
      );
    default:
      return -1;
  }
}

export const HOUSES_LIST: readonly House[] = flatMap((houseType: HouseType) =>
  map((houseIndex: HouseIndex) => {
    return {
      type: houseType,
      index: houseIndex,
      cells: fromPairs(
        map((cellIndex: CellIndex) => {
          const indexInGrid = getCellIndexInGrid(houseType, houseIndex, cellIndex);
          return [cellIndex, indexInGrid];
        })(VALID_CELL_INDEXES),
      ) as HouseCells,
    };
  })(VALID_HOUSE_INDEXES),
)(VALID_HOUSE_TYPES);

/**
 * Verify that a house (row, column or box) does not contain any duplicate value, meaning it is valid according to the
 * rules of Sudoku. However, it does not mean that the house is complete nor that the digits in the house are correct:
 * they can be placed according to the rules in their own house but could be in conflict in another house, or lead to an
 * error if the game continue.
 *
 * @summary Determines whether a house is valid.
 *
 * @since 0.0.1
 *
 * @param {readonly grid: SudokuGrid; readonly house: House} param0 The context of the house to validate.
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
  return flow(
    map((index: CellIndex) => house.cells[index]),
    filter((cell: number) => grid.digits.has(cell)),
    countBy((cell: number) => grid.digits.get(cell)),
    values,
    every((count: number) => count === 1),
  )(VALID_CELL_INDEXES);
}
