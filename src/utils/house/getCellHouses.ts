import { HOUSES_LIST } from "./constants";
import { GridIndex, House } from "../../types";

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
 * @private
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
