import { difference, filter, flatten, map, pipe } from "remeda";
import { EliminationImplicationType, EliminationResult, EliminationTechnique } from "../types";
import { Digit, GridIndex, Pencilmarks, SudokuGrid, VALID_DIGITS } from "../../../../types";
import { HOUSES_LIST } from "../../../../utils/house";
import { SubsetResult, findSubsets } from "../../../../utils/subset";
import { SUBSET_LEVEL_LABEL, SubsetLevel } from "./types";
import { getCellsContainingCandidate } from "../../../../utils/candidate";
import { getCellCoord } from "../../../../utils/cell";

const getHiddenSubsetEliminationResult = (
  candidates: ReadonlyMap<GridIndex, readonly Digit[]>,
  level: SubsetLevel,
): ((subset: SubsetResult<GridIndex, Digit>) => EliminationResult) => {
  return (subset: SubsetResult<GridIndex, Digit>): EliminationResult => {
    return {
      technique: `Hidden ${SUBSET_LEVEL_LABEL.get(level)}` as EliminationTechnique,
      eliminations: pipe(
        difference(VALID_DIGITS, subset.subsetValues),
        map((digit) => {
          return {
            digit,
            coords: map(getCellsContainingCandidate(digit, candidates, subset.subsetIndexes), getCellCoord),
          };
        }),
        filter((elim) => elim.coords.length > 0),
      ),
      implication: {
        type: EliminationImplicationType.Subset,
        cells: map(subset.subsetIndexes, getCellCoord),
        digits: subset.subsetValues,
      },
    };
  };
};

/**
 * A Hidden Subset is formed when N digits have only candidates in N cells in a house. All candidates in the cells of
 * the subset whose digit is not in the subset can be eliminated.
 *
 * @since 0.0.3
 *
 * @param grid The grid to solve.
 * @param level The level of the subset to find.
 * @returns A list of objects describing where a candidate can be eliminated.
 *
 * @example
 * const grid = parseGrid(
 *   ":0210:123589:....+6........4273+6..67+3..4..94....+6+8....96+4.+7+6.7.+5.+9231......85.6..8.27+1..5.1..+9+4::112 211 212 311 312 511 512 811 812 911: ",
 *   true,
 * );
 * const results = eliminateHiddenSubset(grid, SubsetLevel.Triple);
 * eliminationDescription(results[0]);
 * // => "Hidden Pair: 4,7 in r1c12 => r1c2<>1, r1c12<>2, r1c12<>3, r1c12<>5, r1c12<>8, r1c1<>9"
 *
 * @see http://sudopedia.enjoysudoku.com/Hidden_Subset.html
 * @see http://sudopedia.enjoysudoku.com/Hidden_Pair.html
 * @see http://sudopedia.enjoysudoku.com/Hidden_Triple.html
 * @see http://sudopedia.enjoysudoku.com/Hidden_Quad.html
 */
export function eliminateHiddenSubset(grid: SudokuGrid, level: SubsetLevel): readonly EliminationResult[] {
  return pipe(
    HOUSES_LIST,
    map(
      (house) => new Map<GridIndex, Pencilmarks>(map(house.cells, (cell) => [cell, grid.candidates.get(cell) || []])),
    ),
    map(findSubsets(level)),
    flatten(),
    map(getHiddenSubsetEliminationResult(grid.candidates, level)),
    filter((result) => result.eliminations.length > 0),
  );
}
