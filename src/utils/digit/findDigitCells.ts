import { Digit, GridIndex, VALID_GRID_INDEXES } from "../../types";
import { filter } from "remeda";

/**
 * Find the cells on which the given digit has been placed.
 *
 * @since 0.0.2
 *
 * @param {ReadonlyMap<GridIndex, Digit>} digits The digits that are placed in the grid.
 * @param digit The digit on which to find the cells where it is placed.
 * @returns {readonly GridIndex[]} The indexes of the cells on which the digit is placed.
 */
export function findDigitCells(digits: ReadonlyMap<GridIndex, Digit>, digit: Digit): readonly GridIndex[] {
  return filter(VALID_GRID_INDEXES, (gridIndex) => digits.get(gridIndex) === digit);
}
