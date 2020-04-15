import { CellIndex, SudokuGrid, VALID_CELL_INDEXES, VALID_DIGITS } from "../../../types";
import { difference, filter, first, map, pipe } from "remeda";
import { HOUSES_LIST } from "../../../utils/house";
import { HouseValues, getHouseValues } from "../../../utils/house/getHouseValues";
import { getSolvingResultByHouseCellIndex } from "./solvingResult";
import { includes, values } from "ramda";
import { skip } from "../../../utils/fp/skip";
import { SolvingResult } from "./types";

const getFullHouseSolvingResult = (houseValues: HouseValues): SolvingResult | undefined => {
  const cellIndex = pipe(
    VALID_CELL_INDEXES,
    filter((cellIndex: CellIndex) => !includes(cellIndex, [...houseValues.values.keys()])),
    first(),
  );

  const digit = pipe(values(VALID_DIGITS), difference([...houseValues.values.values()]), first());

  if (cellIndex !== undefined && digit) {
    return getSolvingResultByHouseCellIndex("Full House", houseValues.house, cellIndex, digit);
  } else {
    return undefined;
  }
};

/**
 * Finds a house with a single unsolved cell.
 *
 * @since 0.0.2
 *
 * @param {SudokuGrid} grid The grid to solve.
 * @param {number} [skipCount=0] Indicates to skip some of the solving results.
 * @returns {SolvingResult | undefined} An object describing where a digit can be placed when a solution has been found;
 * otherwise, `undefined`.
 *
 * @see http://sudopedia.enjoysudoku.com/Full_House.html
 */
export function solveFullHouse(grid: SudokuGrid, skipCount = 0): SolvingResult | undefined {
  return pipe(
    HOUSES_LIST,
    map(getHouseValues(grid.digits)),
    filter((result) => result.values.size === 8),
    map(getFullHouseSolvingResult),
    filter((result) => !!result),
    skip(skipCount),
    first() as () => ReturnType<typeof solveFullHouse>,
  );
}
