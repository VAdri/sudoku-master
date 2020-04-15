import { SolvingResult } from "./types";
import { Digit, GridIndex, SudokuGrid } from "../../../types";
import { filter, first, map, pipe } from "remeda";
import { skip } from "../../../utils/fp/skip";
import { getSolvingResultByGridIndex } from "./solvingResult";
import { getCandidates } from "../../../utils/candidate";

const getNakedSingleSolvingResult = ([index, digits]: readonly [GridIndex, readonly Digit[]]): SolvingResult => {
  return getSolvingResultByGridIndex("Naked Single", index, digits[0]);
};

/**
 * Finds a cell containing only one candidate.
 *
 * @since 0.0.2
 *
 * @param {SudokuGrid} grid The grid to solve.
 * @param {number} [skipCount=0] Indicates to skip some of the solving results.
 * @returns {SolvingResult | undefined} An object describing where a digit can be placed when a solution has been found;
 * otherwise, `undefined`.
 *
 * @see http://sudopedia.enjoysudoku.com/Naked_Single.html
 */
export function solveNakedSingle(grid: SudokuGrid, skipCount = 0): SolvingResult | undefined {
  const candidates = grid.candidates.size > 0 ? grid.candidates : getCandidates(grid.digits);
  return pipe(
    [...candidates.entries()],
    filter((input: readonly [GridIndex, readonly Digit[]]) => input[1].length === 1),
    skip(skipCount),
    map(getNakedSingleSolvingResult),
    first(),
  );
}
