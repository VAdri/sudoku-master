import { Digit, GridIndex, Pencilmarks, VALID_DIGITS } from "../../types";
import { filter, map, pipe } from "remeda";
import { getCellsContainingCandidate } from "./getCellsContainingCandidate";

export function getCandidatesIndexes(
  candidates: ReadonlyMap<GridIndex, Pencilmarks>,
): ReadonlyMap<Digit, readonly GridIndex[]> {
  const findCellsContainingCandidates = getCellsContainingCandidate(candidates);
  return new Map(
    pipe(
      VALID_DIGITS,
      map((digit) => [digit, findCellsContainingCandidates(digit)] as const),
      filter((entry: readonly [Digit, readonly GridIndex[]]) => entry[1].length > 0),
    ),
  );
}
