import { SolvingResult } from "./types";
import { Digit, GridIndex, SudokuGrid } from "../../../types";
import { drop, filter, map, pipe, take } from "remeda";
import { getSolvingResult } from "./solvingResult";
import { getCandidates } from "../../../utils/candidate";

const getNakedSingleSolvingResult = ([index, digits]: readonly [GridIndex, readonly Digit[]]): SolvingResult => {
  return getSolvingResult("Naked Single", index, digits[0]);
};

/**
 * Finds a cell containing only one candidate.
 *
 * @since 0.0.2
 *
 * @param {SudokuGrid} grid The grid to solve.
 * @param {number} [skip=0] Indicates to skip some of the solving results.
 * @param {number} [count=1] Indicates the maximum amount of results to return.
 * @returns {readonly SolvingResult[]} A list of objects describing where a digit can be placed.
 *
 * @see http://sudopedia.enjoysudoku.com/Naked_Single.html
 */
export function solveNakedSingle(grid: SudokuGrid, skip = 0, count = 1): readonly SolvingResult[] {
  const candidates = grid.candidates.size > 0 ? grid.candidates : getCandidates(grid.digits);
  return pipe(
    [...candidates.entries()],
    filter((input: readonly [GridIndex, readonly Digit[]]) => input[1].length === 1),
    drop(skip),
    take(count),
    map(getNakedSingleSolvingResult),
  );
}
