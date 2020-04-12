import {
  CellIndex,
  Digit,
  GridIndex,
  House,
  HouseCells,
  HouseIndex,
  HouseType,
  SudokuGrid,
  VALID_CELL_INDEXES,
  VALID_HOUSE_INDEXES,
  VALID_HOUSE_TYPES,
} from "../types";
import { filter, first, flatMap, map, pipe } from "remeda";
import { countBy, fromPairs, values } from "ramda";

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
export function getCellIndexInGrid(houseType: HouseType, houseIndex: HouseIndex, cellIndex: CellIndex): GridIndex | -1 {
  switch (houseType) {
    case "row":
      return (houseIndex * 9 + cellIndex) as GridIndex;
    case "col":
      return (houseIndex + cellIndex * 9) as GridIndex;
    case "box":
      return (Math.floor(cellIndex / 3) * 9 + // row
      (cellIndex % 3) + // col
      Math.floor(houseIndex / 3) * 9 * 3 + // row offset
        (houseIndex % 3) * 3) as GridIndex; // col offset
    default:
      return -1;
  }
}

/**
 * Calculate the index (between 0 and 80) of a given cell according to its row and column positions.
 *
 * @since 0.0.1
 *
 * @param rowIndex The index of the row.
 * @param colIndex The index of the column.
 *
 * @returns {number} The index of the cell in the grid, or `-1` if the cell is not valid.
 *
 * @example
 * getCellIndexInGridByCoord(2, 0);
 * // => 18
 * getCellIndexInGridByCoord(5, 4);
 * // => 49
 * getCellIndexInGridByCoord(7, 6);
 * // => 69
 */
export function getCellIndexInGridByCoord(rowIndex: HouseIndex, colIndex: HouseIndex): GridIndex {
  return (rowIndex * 9 + colIndex) as GridIndex;
}

/**
 * The list of all the houses in the grid.
 *
 * @private
 * @since 0.0.1
 */
export const HOUSES_LIST: readonly House[] = flatMap((houseType: HouseType) =>
  map((houseIndex: HouseIndex) => {
    return {
      type: houseType,
      index: houseIndex,
      cells: fromPairs(
        map(VALID_CELL_INDEXES, (cellIndex: CellIndex) => {
          const indexInGrid = getCellIndexInGrid(houseType, houseIndex, cellIndex);
          return [cellIndex, indexInGrid];
        }),
      ) as HouseCells,
    };
  })(VALID_HOUSE_INDEXES),
)(VALID_HOUSE_TYPES);

export function getCellRow(index: GridIndex): House {
  const rowIndex = Math.floor(index / 9);
  return HOUSES_LIST.find((house) => house.type === "row" && house.index === rowIndex) as House;
}

export function getCellCol(index: GridIndex): House {
  const colIndex = index % 9;
  return HOUSES_LIST.find((house) => house.type === "col" && house.index === colIndex) as House;
}

export function getCellBox(index: GridIndex): House {
  const boxIndex = (Math.floor(index / 3) % 3) + Math.floor(index / 9 / 3) * 3;
  return HOUSES_LIST.find((house) => house.type === "box" && house.index === boxIndex) as House;
}

/**
 * Get the row, column and box on which a cell is located.
 *
 * @since 0.0.1
 *
 * @param {GridIndex} index The index of a cell in the grid.
 * @returns {readonly [House, House, House]} A tuple containing the row, the column and the box of the given cell.
 *
 * @example
 * const [row, col, box] = getCellHouses(45);
 */
export function getCellHouses(index: GridIndex): readonly [House, House, House] {
  return [getCellRow(index), getCellCol(index), getCellBox(index)];
}

export function sameHouse(houseType: HouseType, gridIndex1: GridIndex, gridIndex2: GridIndex): boolean {
  return (
    getCellHouses(gridIndex1).find((house) => house.type === houseType)?.index ===
    getCellHouses(gridIndex2).find((house) => house.type === houseType)?.index
  );
}

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
