import { CellCoord, CellHouse, GridIndex } from "../../types";
import { cond, is } from "ramda";
import { getCellCol, getCellRow } from "../house";
import { getCellIndexInGrid } from "./getCellIndexInGrid";
import { isTypeOf } from "../fp";

/**
 * Determinate the coordinates (row and column) of a given cell.
 *
 * @private
 * @since 0.0.2
 *
 * @param {CellCoord | GridIndex | CellHouse} cell The cell for which to find the coordinates.
 * @returns {CellCoord} A tuple containing the index of the row and column of the given cell.
 *
 * @example
 * getCellCoord([4, 3]);
 * // => [4, 3]
 * getCellCoord(49);
 * // => [5, 4]
 * getCellCoord({ houseType: "row", houseIndex: 8, cellIndex: 8 });
 * // => [8, 8]
 */
export function getCellCoord(cell: CellCoord | GridIndex | CellHouse): CellCoord {
  return cond([
    [Array.isArray, (cellCoord: CellCoord): CellCoord => cellCoord],
    [is(Number), (gridIndex: GridIndex): CellCoord => [getCellRow(gridIndex).index, getCellCol(gridIndex).index]],
    [isTypeOf("object"), (cellHouse: CellHouse): CellCoord => getCellCoord(getCellIndexInGrid(cellHouse) as GridIndex)],
  ])(cell);
}
