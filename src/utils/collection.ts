import flow from "lodash/fp/flow";
import map from "lodash/fp/map";
import toPairs from "lodash/fp/toPairs";

/**
 * Creates an array of tuples containing the index-value pairs for the array that was given.
 *
 * @private
 * @since 0.0.1
 *
 * @param {ReadonlyArray<T>} array The array to query.
 * @returns {ReadonlyArray<readonly [number, T]>} Returns the index-value pairs.
 *
 * @example
 * const array = ["a", "b", "c"];
 * toIndexValuePairs(array);
 * // => [[0, "a"], [1, "b"], [2, "c"]]
 */
export const toIndexValuePairs = <T>(array: ReadonlyArray<T>): ReadonlyArray<readonly [number, T]> =>
  flow(
    toPairs,
    map((entry: readonly [string, T]) => [parseInt(entry[0]), entry[1]]),
  )(array);

/**
 * Run each element in the `collection` thru `iteratee` until a result is found. The `iteratee` transforms the value in
 * the collection into a apped value and the first that is truthy is returned to the caller.
 * 
 * **Note:** This function is wrapped to produce an immutable auto-curried iteratee-first data-last method, according to
 * the [functional programming](https://en.wikipedia.org/wiki/Functional_programming) (FP) paradigm, which means that it
 * needs to be called with the `iteratee` as its first and only parameter and the `collection` that needs to be
 * processed is then called in the resulting function (see the example section).
 * 
 * @private
 * @since 0.0.1
 * 
 * @param iteratee 
 * @returns A `function` meant to be called with a `collection` in order to be processed by the `iteratee`.
 * 
 * @example
 * mapFind((value) => typeof value === "number" ? value * 2 : value)(["a", [1, 2, 3], false, undefined, 12, true]);
 * // => 24
 * 
 * @see https://github.com/lodash/lodash/wiki/FP-Guide
 */
export function mapFind<T, TResult>(
  iteratee: (value: T) => TResult | undefined,
): (collection: readonly T[]) => TResult | undefined {
  return (collection: readonly T[]): TResult | undefined => {
    const { length } = collection;
    // eslint-disable-next-line functional/no-let
    let index = -1;

    // eslint-disable-next-line functional/no-loop-statement
    while (++index < length) {
      const result = iteratee(collection[index] /*, index, array*/);
      // eslint-disable-next-line functional/no-conditional-statement
      if (result) {
        return result;
      }
    }
  };
}
