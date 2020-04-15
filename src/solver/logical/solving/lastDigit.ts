import { Digit, GridIndex, SudokuGrid, VALID_DIGITS, VALID_HOUSE_INDEXES } from "../../../types";
import { SolvingResult } from "./types";
import { difference, first, map, pipe } from "remeda";
import { findDigitCells } from "../../../utils/digit/findDigitCells";
import { filter } from "ramda";
import { skip } from "../../../utils/fp/skip";
import { getCellCol, getCellRow } from "../../../utils/house";
import { getSolvingResultByCoord } from "./solvingResult";

const getLastDigitSolvingResult = ([digit, indexes]: readonly [Digit, readonly GridIndex[]]): SolvingResult => {
  const row = difference(
    VALID_HOUSE_INDEXES,
    map(indexes, (index) => getCellRow(index).index),
  )[0];

  const col = difference(
    VALID_HOUSE_INDEXES,
    map(indexes, (index) => getCellCol(index).index),
  )[0];

  return getSolvingResultByCoord("Last Digit", [row, col], digit);
};

/**
 * Finds a digit with a single unsolved cell.
 *
 * @since 0.0.2
 *
 * @param {SudokuGrid} grid The grid to solve.
 * @param {number} [skipCount=0] Indicates to skip some of the solving results.
 * @returns {SolvingResult | undefined} An object describing where a digit can be placed when a solution has been found;
 * otherwise, `undefined`.
 *
 * @see http://sudopedia.enjoysudoku.com/Last_Digit.html
 */
export function solveLastDigit(grid: SudokuGrid, skipCount = 0): SolvingResult | undefined {
  return pipe(
    VALID_DIGITS,
    map((digit) => [digit, findDigitCells(grid.digits, digit)] as const),
    filter((input: readonly [Digit, readonly GridIndex[]]) => input[1].length === 8),
    map(getLastDigitSolvingResult),
    skip(skipCount),
    first(),
  );
}
