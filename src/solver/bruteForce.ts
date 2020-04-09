import { Digit, GridIndex, SudokuGrid } from "../types";
import flow from "lodash/fp/flow";
import map from "lodash/fp/map";
import { mapFind } from "../utils/collection";
import { isValidGrid } from "../utils/grid";
import filter from "lodash/fp/filter";
import { getCandidates } from "../utils/candidate";

export enum BruteForceMode {
  DepthFirstSearch,
  DancingLinks,
  AriadnesThread,
}

/**
 * Solves a grid using the depth-first search bactracking algorithm.
 *
 * @private
 * @since 0.0.1
 *
 * @param {SudokuGrid} grid The grid to solve.
 * @returns {ReadonlyMap<GridIndex, Digit> | undefined} The solution of the grid if it has been found; otherwise,
 * `undefined`.
 *
 * @see https://en.wikipedia.org/wiki/Depth-first_search
 */
function solveWithDFS(grid: SudokuGrid): ReadonlyMap<GridIndex, Digit> | undefined {
  const digits = [...grid.digits.entries()];
  const candidates = [...(grid.candidates.size > 0 ? grid.candidates.entries() : getCandidates(grid.digits).entries())];

  type Solution = readonly (readonly [GridIndex, Digit])[];

  const isValid = (solution: Solution): boolean =>
    isValidGrid({
      digits: new Map([...digits, ...solution]),
      candidates: new Map(),
    });
  const isComplete = (solution: Solution): boolean => digits.length + solution.length === 81;

  function depthFirstSearch(index: GridIndex, previousSolution: Solution = []): Solution | undefined {
    if (isComplete(previousSolution)) {
      return previousSolution;
    } else {
      const indexInGrid = candidates[index][0];
      return flow(
        map((digit: Digit) => [...previousSolution, [indexInGrid, digit]]),
        filter(isValid),
        mapFind((solution: Solution) => depthFirstSearch((index + 1) as GridIndex, solution)),
      )(candidates[index][1]);
    }
  }

  const solution = depthFirstSearch(0);
  if (solution) {
    return new Map([...digits, ...solution]);
  } else {
    return undefined;
  }
}

/**
 * Solves a grid using the dancing links bactracking algorithm.
 *
 * @private
 * @todo
 *
 * @param {SudokuGrid} grid The grid to solve.
 * @returns {ReadonlyMap<GridIndex, Digit> | undefined} The solution of the grid if it has been found; otherwise,
 * `undefined`.
 *
 * @see http://sudopedia.enjoysudoku.com/Dancing_Links.html
 * @see https://en.wikipedia.org/wiki/Dancing_Links
 */
function solveWithDancingLinks(grid: SudokuGrid): ReadonlyMap<number, Digit> | undefined {
  // TODO
  return grid ? undefined : undefined;
}

/**
 * Solves a grid using the Ariadne's thread bactracking algorithm.
 *
 * @private
 * @todo
 *
 * @param {SudokuGrid} grid The grid to solve.
 * @returns {ReadonlyMap<GridIndex, Digit> | undefined} The solution of the grid if it has been found; otherwise,
 * `undefined`.
 *
 * @see http://sudopedia.enjoysudoku.com/Ariadne%27s_Thread.html
 * @see https://en.wikipedia.org/wiki/Ariadne%27s_thread_%28logic%29
 */
function solveWithAriadnesThread(grid: SudokuGrid): ReadonlyMap<number, Digit> | undefined {
  // TODO
  return grid ? undefined : undefined;
}

/**
 * Solves a grid using a backtracking algorithm.
 *
 * The program will place a digit into a cell (following the constraints of the game), and continue until it finds the
 * solution or hits a dead end. If the algorithm cannot place any new digit according to the constraints of the game,
 * meaning it has reached a dead end, it removes the one or several placed digits and tries a new alternative. This
 * process continue until either all alternatives have been tried or the grid has been solved.
 *
 * **Note:** This process can be slow. Some grids are also designed to resist this kind of algorithm for a longer time.
 *
 * @summary Solves a grid using a backtracking algorithm.
 *
 * @since 0.0.1
 *
 * @param {SudokuGrid} grid The grid to solve.
 * @param {BruteForceMode} mode The type of algorithm to use to solve the puzzle.
 * @returns {ReadonlyMap<GridIndex, Digit> | undefined} The solution of the grid if it has been found; otherwise,
 * `undefined`.
 *
 * @see http://sudopedia.enjoysudoku.com/Backtracking_Algorithms.html
 * @see https://en.wikipedia.org/wiki/Backtracking
 * @see https://en.wikipedia.org/wiki/Sudoku_solving_algorithms
 */
export function solveWithBacktracking(
  grid: SudokuGrid,
  mode: BruteForceMode = BruteForceMode.DepthFirstSearch,
): ReadonlyMap<number, Digit> | undefined {
  switch (mode) {
    case BruteForceMode.DepthFirstSearch:
      return solveWithDFS(grid);

    case BruteForceMode.DancingLinks:
      return solveWithDancingLinks(grid);

    case BruteForceMode.AriadnesThread:
      return solveWithAriadnesThread(grid);

    default:
      return;
  }
}
