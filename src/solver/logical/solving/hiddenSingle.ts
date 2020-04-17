import { Digit, GridIndex, House, Pencilmarks, SudokuGrid } from "../../../types";
import { SolvingResult } from "./types";
import { getCandidates } from "../../../utils/candidate";
import { drop, filter, flatten, map, pipe, take, uniqBy } from "remeda";
import { HOUSES_LIST, getHouseCandidates } from "../../../utils/house";
import { getSolvingResult } from "./solvingResult";

type HouseSingleCandidate = {
  readonly house: House;
  readonly digit: Digit;
  readonly index: GridIndex;
};

const _getHouseSingleCandidates = (candidates: ReadonlyMap<GridIndex, Pencilmarks>) => {
  return (house: House): readonly HouseSingleCandidate[] => {
    const houseCandidates = getHouseCandidates(house, candidates);
    return pipe(
      [...houseCandidates.entries()],
      filter((entry) => entry[1].length === 1 && (candidates.get(entry[1][0])?.length || 0) >= 2),
      map((entry) => {
        return { house, digit: entry[0], index: entry[1][0] };
      }),
    );
  };
};

const getHiddenSingleSolvingResult = (result: HouseSingleCandidate): SolvingResult => {
  return getSolvingResult("Hidden Single", result.index, result.digit);
};

/**
 * Find a house containing a single candidate remaining for a specific digit.
 *
 * @since 0.0.2
 *
 * @param {SudokuGrid} grid The grid to solve.
 * @param {number} [skip=0] Indicates to skip some of the solving results.
 * @param {number} [count=1] Indicates the maximum amount of results to return.
 * @returns {readonly SolvingResult[]} A list of objects describing where a digit can be placed.
 *
 * @see http://sudopedia.enjoysudoku.com/Hidden_Single.html
 */
export function solveHiddenSingle(grid: SudokuGrid, skip = 0, count = 1): readonly SolvingResult[] {
  const candidates = grid.candidates.size > 0 ? grid.candidates : getCandidates(grid.digits);
  const getHouseSingleCandidates = _getHouseSingleCandidates(candidates);
  return pipe(
    HOUSES_LIST,
    map(getHouseSingleCandidates),
    flatten(),
    uniqBy((result) => result.index),
    drop(skip),
    take(count),
    map(getHiddenSingleSolvingResult),
  );
}
