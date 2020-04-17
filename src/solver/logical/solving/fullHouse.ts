import { CellIndex, SudokuGrid, VALID_CELL_INDEXES, VALID_DIGITS } from "../../../types";
import { difference, drop, filter, first, map, pipe, take } from "remeda";
import { HOUSES_LIST } from "../../../utils/house";
import { HouseValues, getHouseValues } from "../../../utils/house/getHouseValues";
import { getSolvingResult } from "./solvingResult";
import { includes, values } from "ramda";
import { SolvingResult } from "./types";

const getFullHouseSolvingResult = (houseValues: HouseValues): SolvingResult | undefined => {
  const cellIndex = pipe(
    VALID_CELL_INDEXES,
    filter((cellIndex: CellIndex) => !includes(cellIndex, [...houseValues.values.keys()])),
    first(),
  );

  const digit = pipe(values(VALID_DIGITS), difference([...houseValues.values.values()]), first());

  if (cellIndex !== undefined && digit) {
    return getSolvingResult(
      "Full House",
      { houseType: houseValues.house.type, houseIndex: houseValues.house.index, cellIndex },
      digit,
    );
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
 * @param {number} [skip=0] Indicates to skip some of the solving results.
 * @param {number} [count=1] Indicates the maximum amount of results to return.
 * @returns {readonly SolvingResult[]} A list of objects describing where a digit can be placed.
 *
 * @see http://sudopedia.enjoysudoku.com/Full_House.html
 */
export function solveFullHouse(grid: SudokuGrid, skip = 0, count = 1): readonly SolvingResult[] {
  return pipe(
    HOUSES_LIST,
    map(getHouseValues(grid.digits)),
    filter((result) => result.values.size === 8),
    map(getFullHouseSolvingResult),
    filter((result) => !!result) as (array: readonly (SolvingResult | undefined)[]) => readonly SolvingResult[],
    drop(skip),
    take(count),
  );
}
