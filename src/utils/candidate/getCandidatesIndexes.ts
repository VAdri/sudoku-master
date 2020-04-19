import { Digit, GridIndex, Pencilmarks, VALID_DIGITS } from "../../types";
import { filter, map, pipe } from "remeda";
import { getCellsContainingCandidate } from "./getCellsContainingCandidate";

/**
 * Associate each digit in the grid with the indexes on which they are a candidate in the grid.
 *
 * @private
 * @since 0.0.2
 *
 * @param candidates The list of candidates in the grid.
 * @returns A key/value map that associate each digit with the indexes in the grid in which they are a candidate.
 */
export function getCandidatesIndexes(
  candidates: ReadonlyMap<GridIndex, Pencilmarks>,
): ReadonlyMap<Digit, readonly GridIndex[]> {
  const findCellsContainingCandidates = getCellsContainingCandidate(candidates, undefined);
  return new Map(
    pipe(
      VALID_DIGITS,
      map((digit) => [digit, findCellsContainingCandidates(digit)] as const),
      filter((entry: readonly [Digit, readonly GridIndex[]]) => entry[1].length > 0),
    ),
  );
}
