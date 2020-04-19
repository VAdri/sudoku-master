import {
  EliminationImplication,
  EliminationImplicationType,
  EliminationResult,
} from "../../solver/logical/eliminating/types";
import { always, cond } from "ramda";
import { equals } from "remeda";
import { cellsIdentifiers } from "./cellsIdentifiers";
import { houseIdentifier } from "./houseIdentifer";

const getImplication = (implication: EliminationImplication): string => {
  return (
    cond([
      [
        equals(EliminationImplicationType.DigitInHouse),
        always(`${implication.digit} in ${houseIdentifier(implication.house)} => `),
      ],
    ])(implication.type) || ""
  );
};

/**
 * Give a description of an elimination (e.g. "Locked Candidates Type 1 (Pointing): 5 in b1 => r3c7<>5" means that the
 * candiadte 5 can be eliminated in the cell on row 3 and column 7 according to the Locked Candidates Type 1 technique
 * beacaus the digit 5 is in box 1).
 *
 * @since 0.0.3
 *
 * @param eliminationResult The elimination to describe.
 * @returns {string} A description of the elimination.
 *
 * @example
 * const grid = parseGrid(
 *   ":0101:7:+31+8..+54.+6...6.3+8+1...6.8.+5.38+6+495+21+3+7+12+34+7+6+958795+3+1+8+2+6+4.+3.5..7+8......7+3.+5....3+9641::732:",
 * );
 * const result = eliminateLockedCandidates({ digits: grid.digits, candidates: getCandidates(grid.digits) });
 * eliminationDescription(result[0]);
 * // => "Locked Candidates Type 2 (Claiming): 7 in r2 => r3c2<>7"
 */
export function eliminationDescription(eliminationResult: EliminationResult): string {
  const implication = eliminationResult.implication ? getImplication(eliminationResult.implication) : "";
  const coords = cellsIdentifiers(eliminationResult.coords);
  return `${eliminationResult.technique}: ${implication}${coords}<>${eliminationResult.digit}`;
}
