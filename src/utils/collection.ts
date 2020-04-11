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
