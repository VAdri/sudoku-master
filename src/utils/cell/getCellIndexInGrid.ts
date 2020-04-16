import { CellIndex, GridIndex, HouseIndex, HouseType } from "../../types";

/**
 * Calculate the index (between 0 and 80) of a given cell according to its position inside its house.
 *
 * @private
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
 * @private
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
