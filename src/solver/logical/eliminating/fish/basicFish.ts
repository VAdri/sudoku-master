import { Digit, GridIndex, HouseIndex, LineType, SudokuGrid, VALID_DIGITS, VALID_LINE_TYPES } from "../../../../types";
import { FindSubsetResult, LookupData, findSubsets } from "../../../../utils/subset";
import { EliminationImplicationType, EliminationResult } from "../types";
import { difference, equals, filter, flatten, map, pipe, reduce } from "remeda";
import { getCellsContainingCandidate } from "../../../../utils/candidate";
import { getCellCoord } from "../../../../utils/cell";
import { always, cond, includes } from "ramda";
import { SubsetType } from "../subset";
import { COLUMNS_LIST, ROWS_LIST } from "../../../../utils/house";

type FishData = {
  readonly line: LineType;
  readonly digit: Digit;
};

const getLookup = (
  candidates: ReadonlyMap<GridIndex, readonly Digit[]>,
): ((digit: Digit) => readonly LookupData<FishData, HouseIndex, HouseIndex>[]) => {
  return (digit: Digit): readonly LookupData<FishData, HouseIndex, HouseIndex>[] => {
    return pipe(
      VALID_LINE_TYPES,
      map((line) => {
        const lineIndex = line === "row" ? 1 : 0;
        return {
          line,
          digit,
          lookup: pipe(
            getCellsContainingCandidate(digit, candidates, undefined),
            map(getCellCoord),
            reduce(
              (acc, item) => acc.set(item[lineIndex], [...(acc.get(item[lineIndex]) || []), item[1 - lineIndex]]),
              new Map<HouseIndex, readonly HouseIndex[]>(),
            ),
          ),
        };
      }),
    );
  };
};

const getBasicFishEliminationResult = (
  candidates: ReadonlyMap<GridIndex, readonly Digit[]>,
  level: SubsetType,
): ((subset: FindSubsetResult<FishData, HouseIndex, HouseIndex>) => EliminationResult) => {
  return (subset: FindSubsetResult<FishData, HouseIndex, HouseIndex>): EliminationResult => {
    const subsetCells = pipe(
      subset.line === "row" ? ROWS_LIST : COLUMNS_LIST,
      filter((house) => includes(house.index, subset.result.subsetValues)),
      map((house) => house.cells),
      flatten(),
    );
    return {
      technique: cond([
        [equals(SubsetType.Pair), always("X-Wing")],
        [equals(SubsetType.Triple), always("Swordfish")],
        [equals(SubsetType.Quadruple), always("Jellyfish")],
      ])(level),
      eliminations: filter(
        [
          {
            digit: subset.digit,
            coords: pipe(
              subset.line === "row" ? COLUMNS_LIST : ROWS_LIST,
              filter((house) => includes(house.index, subset.result.subsetIndexes)),
              map((house) => difference(house.cells, subsetCells)),
              flatten(),
              filter((cell) => includes(subset.digit, candidates.get(cell) || [])),
              map(getCellCoord),
            ),
          },
        ],
        (elim) => elim.coords.length > 0,
      ),
      implication: {
        type: EliminationImplicationType.Fish,
        line: subset.line,
        digit: subset.digit,
        baseSet: subset.result.subsetValues,
        coverSet: subset.result.subsetIndexes,
      },
    };
  };
};

/**
 * A Basic Fish is formed with a digit that is a candidate for N lines (rows or columns) - the base set - on exactly N
 * opposite lines - the cover set. All candidates of the digit that are on the lines of the cover set but not on the
 * base set can be eliminated.
 *
 * @since 0.0.3
 *
 * @param grid The grid to solve.
 * @param level The level of the subset to find.
 * @returns A list of objects describing where a candidate can be eliminated.
 *
 * @example
 * const grid = parseGrid(
 *   ":0301:2:16.54+3.7..+78+6.1+43+5+43+58.+7+6.+17+2.+45+8.696..9+12.57...+3+7+6..+4.+1+6.3..4.+3...+8..16..+71645.+3::268 271:r239 c158 ",
 *   true,
 * );
 * const results = eliminateBasicFish(grid, SubsetType.Triple);
 * eliminationDescription(results[0]);
 * // => "Swordfish: 2 r239 c158 => r6c8,r7c1<>2"
 *
 * @see http://sudopedia.enjoysudoku.com/Fish.html
 * @see http://sudopedia.enjoysudoku.com/X-Wing.html
 * @see http://sudopedia.enjoysudoku.com/Swordfish.html
 * @see http://sudopedia.enjoysudoku.com/Jellyfish.html
 */
export function eliminateBasicFish(grid: SudokuGrid, level: SubsetType): readonly EliminationResult[] {
  return pipe(
    VALID_DIGITS,
    map(getLookup(grid.candidates)),
    flatten(),
    filter((data) => data.lookup.size > 0),
    map(findSubsets(level)),
    flatten,
    map(getBasicFishEliminationResult(grid.candidates, level)),
    filter((result) => result.eliminations.length > 0),
  );
}
