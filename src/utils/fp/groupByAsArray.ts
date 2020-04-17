import { groupBy, pipe, purry, toPairs } from "remeda";

const _groupByAsArray = <T>(
  items: readonly T[],
  fn: (item: T) => unknown,
): ReadonlyArray<readonly [unknown, readonly T[]]> => {
  return pipe(items, groupBy(fn), toPairs);
};

/**
 * Splits a collection into sets, grouped by the result of running each value through `fn`.
 *
 * @todo We need to return the key with thr original type, currently it is returned as a string.
 *
 * @param {Array} items The items to group.
 * @param {Function} fn The grouping function.
 * @returns {Array} An array of tuples with the group key as first element and the related items on second.
 */
export function groupByAsArray<T>(
  items: readonly T[],
  fn: (item: T) => unknown,
): ReadonlyArray<readonly [string, readonly T[]]>;

export function groupByAsArray<T>(
  fn: (item: T) => unknown,
): (array: readonly T[]) => ReadonlyArray<readonly [string, readonly T[]]>;

// eslint-disable-next-line functional/functional-parameters,@typescript-eslint/explicit-function-return-type
export function groupByAsArray() {
  // eslint-disable-next-line prefer-rest-params,functional/functional-parameters
  return purry(_groupByAsArray, arguments);
}
