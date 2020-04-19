import { Digit, GridIndex, House, Pencilmarks, SudokuGrid } from "../../../../types";
import { EliminationImplicationType, EliminationResult } from "../types";
import { difference, filter, flatMap, flatten, map, pipe } from "remeda";
import { HOUSES_LIST, findIntersectingHouses } from "../../../../utils/house";
import { findIntersectingCandidates, getCellsContainingCandidate } from "../../../../utils/candidate";
import { getCellCoord } from "../../../../utils/cell";

type LockedCandidates = {
  readonly box: House;
  readonly line: House;
  readonly digit: Digit;
  readonly pointing: readonly GridIndex[];
  readonly claiming: readonly GridIndex[];
};

const findLockedCandidates = (
  candidates: ReadonlyMap<GridIndex, Pencilmarks>,
  box: House,
  intersections: readonly House[],
): readonly LockedCandidates[] => {
  return pipe(
    intersections,
    flatMap((line) =>
      pipe(
        findIntersectingCandidates(candidates, box, line, 2),
        map((digit) => {
          const pointing = getCellsContainingCandidate(digit, candidates, difference(line.cells, box.cells));
          const claiming = getCellsContainingCandidate(digit, candidates, difference(box.cells, line.cells));

          return {
            box,
            line,
            digit,
            pointing: pointing.length > 0 && claiming.length === 0 ? pointing : [],
            claiming: claiming.length > 0 && pointing.length === 0 ? claiming : [],
          };
        }),
        filter((result) => result.pointing.length > 0 || result.claiming.length > 0),
      ),
    ),
  );
};

const getLockedCandidatesSolvingResult = (lockedCandidates: LockedCandidates): EliminationResult => {
  if (lockedCandidates.pointing.length > 0) {
    return {
      technique: "Locked Candidates Type 1 (Pointing)",
      eliminations: [
        {
          digit: lockedCandidates.digit,
          coords: map(lockedCandidates.pointing, getCellCoord),
        },
      ],
      implication: {
        type: EliminationImplicationType.DigitInHouse,
        house: lockedCandidates.box,
        digit: lockedCandidates.digit,
      },
    };
  } else {
    return {
      technique: "Locked Candidates Type 2 (Claiming)",
      eliminations: [
        {
          digit: lockedCandidates.digit,
          coords: map(lockedCandidates.claiming, getCellCoord),
        },
      ],
      implication: {
        type: EliminationImplicationType.DigitInHouse,
        house: lockedCandidates.line,
        digit: lockedCandidates.digit,
      },
    };
  }
};

/**
 * When all candidates for a digit in a house are located inside the intersection with another house, we can eliminate
 * the remaining candidates from the second house outside the intersection.
 *
 * @since 0.0.3
 *
 * @param grid The grid to solve.
 * @returns {readonly SolvingResult[]} A list of objects describing where a candidate can be eliminated.
 *
 * @see http://sudopedia.enjoysudoku.com/Locked_Candidates.html
 */
export function eliminateLockedCandidates(grid: SudokuGrid): readonly EliminationResult[] {
  return pipe(
    HOUSES_LIST,
    filter((house) => house.type === "box"),
    map((box) => findLockedCandidates(grid.candidates, box, findIntersectingHouses(box))),
    filter((lockedCandidates) => lockedCandidates.length > 0),
    flatten,
    map(getLockedCandidatesSolvingResult),
  );
}
