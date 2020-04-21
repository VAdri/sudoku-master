import { filter, flatten, map, pipe, purry, sort, uniq } from "remeda";
import { generateTuples } from "../tuple";
import { all, includes } from "ramda";
import { SubsetLevel, SubsetResult } from "./types";

const _getIndexesForValue = <X, Y>(lookup: readonly (readonly [X, readonly Y[]])[]) => {
  return (value: Y): readonly X[] => {
    return pipe(
      lookup,
      filter((entry) => includes(value, entry[1])),
      map((entry) => entry[0]),
    );
  };
};

type ValueIndexesAssociation<X, Y> = {
  readonly indexes: readonly X[];
  readonly values: readonly Y[];
};

const _getIndexesAssociatedToValues = <X, Y>(
  lookup: ReadonlyMap<X, readonly Y[]>,
): ((values: readonly Y[]) => readonly ValueIndexesAssociation<X, Y>[]) => {
  const getIndexesForValue = _getIndexesForValue([...lookup.entries()]);

  return (values: readonly Y[]): readonly ValueIndexesAssociation<X, Y>[] => {
    return pipe(
      values,
      map((value) => {
        return {
          indexes: getIndexesForValue(value),
          values,
          value,
        };
      }),
    );
  };
};

const _findSubsets = <X, Y>(
  lookup: ReadonlyMap<X, readonly Y[]>,
  level: SubsetLevel,
): readonly SubsetResult<X, Y>[] => {
  const getIndexesAssociatedToValues = _getIndexesAssociatedToValues(lookup);

  return pipe(
    // Loop through all the combinations of the values in the lookup
    generateTuples({
      size: level,
      validValues: flatten([...lookup.values()]),
      getDuplicates: false,
      getSameValues: false,
    }),
    // Get all the indexes in the lookup containing the current combination
    map(getIndexesAssociatedToValues),
    // Ensure that each value is associated to at least two indexes
    filter((results) => results.length > 0 && all((result) => result.indexes.length >= 2, results)),
    // Keep only one occurence of each index on the subset (e.g. [1, 2, 1, 2, 3, 4] => [1, 2, 3, 4]).
    map((results) => {
      return {
        subsetIndexes: pipe(
          results,
          map((result) => result.indexes),
          flatten(),
          uniq(),
          sort((a, b) => (typeof a === "number" && typeof b === "number" ? a - b : 0)),
        ),
        subsetValues: results[0].values,
      };
    }),
    // Check that the subset is of the appropriate level
    filter((result) => result.subsetIndexes.length === level),
  );
};

/**
 * Finds a subset in a lookup.
 *
 * A lookup is a data structure that can be represented as a table with an X-Axis (the values) and a Y-axis (the indexes):
 * ```
 * · 1 2 3 4 5 6 7 8 9 ← X-Axis (values)
 * 0 · · · · · · · · ·
 * 1 · · · · · · · · ·
 * 2 · · · · · · · · ·
 * 3 · · · · · · · · ·
 * 4 · · · · · · · · ·
 * 5 · · · · · · · · ·
 * 6 · · · · · · · · ·
 * 7 · · · · · · · · ·
 * 8 · · · · · · · · ·
 * ↑
 * Y-Axis (indexes)
 * ```
 *
 * A value can be associated to one or several indexes and each index can contain several values:
 * ```
 * · 1 2 3 4 5 6 7 8 9
 * 0 · · · · · · · · ·
 * 1 · · · · X · · X ·
 * 2 · · · · · · · · ·
 * 3 · · · · · · · · ·
 * 4 X · · X X · · X ·
 * 5 · X · X · · · · ·
 * 6 · · · · · · · · ·
 * 7 X · · · X · · · ·
 * 8 · · X X · · · · ·
 * ⇨ X indicates that the lookup contain the value on the index.
 * ```
 *
 * A subset is a group of N values that are contained only in N indexes (N is the level, it can be 2, 3 or 4):
 * ```
 * · 1 2 3 4 5 6 7 8 9
 * 0 | · · · | · · | ·
 * 1-|-------X-----X--
 * 2 | · · · | · · | ·
 * 3 | · · · | · · | ·
 * 4-X-----X-X-----X--
 * 5 | X · X | · · | ·
 * 6 | · · · | · · | ·
 * 7-X-------X-----|--
 * 8 | · X X | · · | ·
 * ⇨ Here the subset is of level 3 and it is composed of the indexes [1, 4, 7] and the values [1, 5, 8].
 * ⇨ An index can contain other values (e.g. [4, 4] in this example).
 * ⇨ A value cannot be associated to other indexes than the subset
 *  (e.g. in this example, if [5, 8] was true the subset would be invalid).
 * ⇨ A value must be contained on at least two indexes (e.g. if [4, 8] was false the subset would be invalid).
 * ```
 *
 * **Note:** The caller must build the lookup according to what kind of subset it needs to find:
 * - If we want to find digits that can be present on several cells but that the cells of the subset should not contain
 *   any other digit (Naked Subset), the digits must be set on the indexes (Y-Axis) and their cells as values (X-Axis).
 *   This lookup need to be built around the cells and candidates of one house only.
 * - If we want to find cells that can contain several digits but that the digits of the subset should not be present on
 *   any other cells (Hidden Subset), then it is the opposite (cells as indexes and digits as values).
 * - It is also possible to find basic fish using this technique, in that cas we need to build the lookup on the entire
 *   grid but only one per digit: the row indexes are put on the X-Axis and the column indexes on the Y-Axis (and then
 *   we can switch the two axes to find more subsets).
 *
 * @summary Finds a subset in a lookup.
 *
 * @private
 * @since 0.0.3
 *
 * @param lookup The lookup on which to find a subset.
 * @param level The level of the subset to find.
 * @returns A list containing the subsets that were found on the given lookup.
 *
 * @see eliminateNakedSubset,eliminateHiddenSubset,eliminateBasicFish
 */
export function findSubsets<X, Y>(
  lookup: ReadonlyMap<X, readonly Y[]>,
  level: SubsetLevel,
): readonly SubsetResult<X, Y>[];
export function findSubsets<X, Y>(
  level: SubsetLevel,
): (lookup: ReadonlyMap<X, readonly Y[]>) => readonly SubsetResult<X, Y>[];

// eslint-disable-next-line functional/functional-parameters,@typescript-eslint/explicit-function-return-type
export function findSubsets() {
  // eslint-disable-next-line prefer-rest-params,functional/functional-parameters
  return purry(_findSubsets, arguments);
}
