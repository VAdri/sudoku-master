import { CellCoord, CellHouse, Digit, GridIndex } from "../../../types";
import { SolvingResult, SolvingTechnique } from "./types";
import { getCellCoord } from "../../../utils/cell";

/**
 * Get a description of a technique that is used to solve a cell.
 *
 * @private
 * @since 0.0.2
 *
 * @param {SolvingTechnique} technique The technique used to solve the cell.
 * @param {CellCoord | GridIndex | CellHouse} cell The cell that was solved in its house.
 * @param {Digit} digit The digit that can be placed in the cell.
 * @returns {SolvingResult} An object describing the solving process.
 */
export function getSolvingResult(
  technique: SolvingTechnique,
  cell: CellCoord | GridIndex | CellHouse,
  digit: Digit,
): SolvingResult {
  const coord = getCellCoord(cell);
  return {
    technique,
    coord,
    digit,
  };
}
