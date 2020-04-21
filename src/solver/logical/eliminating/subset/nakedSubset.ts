import { concat, difference, filter, flatten, map, pipe } from "remeda";
import { EliminationImplicationType, EliminationResult, EliminationTechnique } from "../types";
import { Digit, GridIndex, SudokuGrid } from "../../../../types";
import { HOUSES_LIST, getCellsCommonHouses } from "../../../../utils/house";
import { SubsetResult, findSubsets } from "../../../../utils/subset";
import { getHouseCandidates } from "../../../../utils/house";
import { SUBSET_LEVEL_LABEL, SubsetType } from "./types";
import { getCellsContainingCandidate } from "../../../../utils/candidate";
import { getCellCoord } from "../../../../utils/cell";

const getNakedSubsetEliminationResult = (
  candidates: ReadonlyMap<GridIndex, readonly Digit[]>,
  level: SubsetType,
): ((subset: SubsetResult<Digit, GridIndex>) => EliminationResult) => {
  return (subset: SubsetResult<Digit, GridIndex>): EliminationResult => {
    const houses = getCellsCommonHouses(subset.subsetValues);
    const subsetType = (houses === undefined || houses[1] !== undefined) ? "Locked" : "Naked";
    const housesCells = houses !== undefined ? concat(houses[0].cells, houses[1]?.cells || []) : [];
    const solvableCells = difference(housesCells, subset.subsetValues);
    return {
      technique: `${subsetType} ${SUBSET_LEVEL_LABEL.get(level)}` as EliminationTechnique,
      eliminations: pipe(
        subset.subsetIndexes,
        map((digit) => {
          return {
            digit,
            coords: map(getCellsContainingCandidate(digit, candidates, solvableCells), getCellCoord),
          };
        }),
        filter((elim) => elim.coords.length > 0),
      ),
      implication: {
        type: EliminationImplicationType.Subset,
        cells: map(subset.subsetValues, getCellCoord),
        digits: subset.subsetIndexes,
      },
    };
  };
};

/**
 * A Naked Subset is formed by N cells in a house with candidates for exactly N digits. It causes the elimination of the
 * digits that are on the same house but not in the cells of the subet.
 *
 * **Note:** When all cells are located in an intersection, spotting the subset is much easier. Because there are only
 * three cells in an intersection, it is not possible to find Naked Quadruples in an intersection. The subset can cause
 * eliminations in both intersecting houses.
 * 
 * @since 0.0.3
 *
 * @param grid The grid to solve.
 * @param level The level of the subset to find.
 * @returns A list of objects describing where a candidate can be eliminated.
 * 
 * @example
 * const grid = parseGrid(
 *   ":0201:6:...+2+94+3+8....17+86+4.48.3561....4+8+375.+1...+41+57..5..+62+9+83495+3+7+8+2+4+1612+6+5+4+3+9+78.+4.+9+6+1+2+5+3::612: ",
 *   true,
 * );
 * const results = eliminateNakedSubset(grid, SubsetLevel.Triple);
 * eliminationDescription(results[0]);
 * // => "Naked Triple: 3,6,9 in r245c2 => r1c2<>6"
 *
 * @see http://sudopedia.enjoysudoku.com/Naked_Subset.html
 * @see http://sudopedia.enjoysudoku.com/Naked_Pair.html
 * @see http://sudopedia.enjoysudoku.com/Naked_Triple.html
 * @see http://sudopedia.enjoysudoku.com/Naked_Quad.html
 * @see http://sudopedia.enjoysudoku.com/Locked_Pair.html
 * @see http://sudopedia.enjoysudoku.com/Locked_Triple.html
 */
export function eliminateNakedSubset(grid: SudokuGrid, level: SubsetType): readonly EliminationResult[] {
  return pipe(
    HOUSES_LIST,
    map(getHouseCandidates(grid.candidates)),
    map(findSubsets(level)),
    flatten(),
    map(getNakedSubsetEliminationResult(grid.candidates, level)),
    filter((result) => result.eliminations.length > 0),
  );
}
