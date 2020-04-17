import { SolvingResult } from "../../solver/logical/solving/types";
import { cellIdentifier } from "./cellsIdentifiers";

/**
 * Give a description of a solving (e.g. "Full House: r5c8=3" means that the digit 3 can be placed in the cell on row 5
 * and column 8 according to the Full House technique).
 *
 * @param solvingResult The solving to describe.
 * @returns {string} A description of the solving.
 *
 * @example
 * solvingDescription({ technique: "Full House", coord: [4, 7], digit: 3 });
 * // => "Full House: r5c8=3"
 */
export function solvingDescription(solvingResult: SolvingResult): string {
  return `${solvingResult.technique}: ${cellIdentifier(solvingResult.coord)}=${solvingResult.digit}`;
}
