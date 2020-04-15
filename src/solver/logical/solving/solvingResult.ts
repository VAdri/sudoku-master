import { CellCoord, CellIndex, Digit, GridIndex, House } from "../../../types";
import { getCellCol, getCellIndexInGrid, getCellRow } from "../../../utils/house";
import { SolvingResult, SolvingTechnique } from "./types";

/**
 * Get a description of a technique that is used to solve a cell.
 *
 * @since 0.0.2
 *
 * @param {SolvingTechnique} technique The technique used to solve the cell.
 * @param {CellCoord} coord The cooridnates cell that was solved.
 * @param {Digit} digit The digit that can be placed in the cell.
 * @returns {SolvingResult | undefined} An object describing the solving process.
 *
 * @see getSolvingResultByGridIndex,getSolvingResultByHouseCellIndex
 */
export function getSolvingResultByCoord(technique: SolvingTechnique, coord: CellCoord, digit: Digit): SolvingResult {
  return {
    technique,
    coord,
    digit,
  };
}

/**
 * Get a description of a technique that is used to solve a cell.
 *
 * @since 0.0.2
 *
 * @param {SolvingTechnique} technique The technique used to solve the cell.
 * @param {GridIndex} gridIndex The index in the grid of the cell that was solved.
 * @param {Digit} digit The digit that can be placed in the cell.
 * @returns {SolvingResult | undefined} An object describing the solving process.
 *
 * @see getSolvingResultByCoord,getSolvingResultByHouseCellIndex
 */
export function getSolvingResultByGridIndex(
  technique: SolvingTechnique,
  gridIndex: GridIndex,
  digit: Digit,
): SolvingResult {
  const row = getCellRow(gridIndex);
  const col = getCellCol(gridIndex);
  return getSolvingResultByCoord(technique, [row.index, col.index], digit);
}

/**
 * Get a description of a technique that is used to solve a cell.
 *
 * @since 0.0.2
 *
 * @param {SolvingTechnique} technique The technique used to solve the cell.
 * @param {House} house The house on which the cell was solved.
 * @param {CellIndex} cellIndex The index of the cell that was solved in its house.
 * @param {Digit} digit The digit that can be placed in the cell.
 * @returns {SolvingResult | undefined} If the cell is valid, returns an object describing the solving process; otherwise, `undefined`.
 *
 * @see getSolvingResultByCoord,getSolvingResultByGridIndex
 */
export function getSolvingResultByHouseCellIndex(
  technique: SolvingTechnique,
  house: House,
  cellIndex: CellIndex,
  digit: Digit,
): SolvingResult | undefined {
  const gridIndex = getCellIndexInGrid(house.type, house.index, cellIndex);
  if (gridIndex !== -1) {
    return getSolvingResultByGridIndex(technique, gridIndex, digit);
  } else {
    return undefined;
  }
}
