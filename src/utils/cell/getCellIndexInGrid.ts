import { CellCoord, CellHouse, GridIndex } from "../../types";
import { always, cond, is } from "ramda";
import { equals } from "remeda";

const _getCellIndexInGridByHouse = (cellHouse: CellHouse): GridIndex => {
  return cond([
    [equals("row"), always((cellHouse.houseIndex * 9 + cellHouse.cellIndex) as GridIndex)],
    [equals("col"), always((cellHouse.houseIndex + cellHouse.cellIndex * 9) as GridIndex)],
    [
      equals("box"),
      always(
        (Math.floor(cellHouse.cellIndex / 3) * 9 + // row
        (cellHouse.cellIndex % 3) + // col
        Math.floor(cellHouse.houseIndex / 3) * 9 * 3 + // row offset
          (cellHouse.houseIndex % 3) * 3) as GridIndex, // col offset
      ),
    ],
  ])(cellHouse.houseType);
};

/**
 * Calculate the index (between 0 and 80) of a given cell.
 *
 * @param {CellCoord | GridIndex | CellHouse} cell The cell for which to find the grid index.
 * @returns {number} The index of the cell in the grid, or `-1` if the cell is not valid.
 *
 * @example
 * getCellIndexInGrid([5, 4]);
 * // => 49
 * getCellIndexInGrid(72);
 * // => 72
 * getCellIndexInGrid({ houseType; "col", houseIndex: 5, cellIndex: 4});
 * // => 41
 */
export function getCellIndexInGrid(cell: CellCoord | GridIndex | CellHouse): GridIndex {
  return cond([
    [Array.isArray, (cellCoord: CellCoord): GridIndex => (cellCoord[0] * 9 + cellCoord[1]) as GridIndex],
    [is(Number), (gridIndex: GridIndex): GridIndex => gridIndex],
    [is(Object), (cellHouse: CellHouse): GridIndex => _getCellIndexInGridByHouse(cellHouse)],
  ])(cell);
}
