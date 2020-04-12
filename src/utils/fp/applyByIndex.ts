import { purry } from "remeda";

const _applyByIndex = <T, TResult>(list: readonly T[], indexInList: number, fn: (item: T) => TResult): TResult => {
  const index = indexInList >= 0 ? indexInList : list.length + indexInList;
  return fn(list[index]);
};

/**
 * Takes an item in the list with its index and applies a function to it.
 *
 * @private
 * @since 0.0.1
 *
 * @param list The list on which to apply the function for one item.
 * @param indexInList The index of the item in the list on which to applyc the function.
 * @param fn The function to apply on the desired item in the list.
 * @returns
 *
 * @example
 * const isOfType = (type: string, item: any) => typeof item === type;
 * const isSecondItemString = callWith(1, isOfType("string"));
 *
 * isSecondItemString(["a", 1, true, null]);
 * // => false
 * isSecondItemString([1, "a", , true]);
 * // => true
 *
 * const isString = (item: any) => typeof item === "string";
 * const isLastItemArray = callWith(-1, Array.isArray);
 *
 * isLastItemArray(["a", 1, true, null]);
 * // => false
 * isLastItemArray([1, "a", , true, [1, 2, 3]]);
 * // => true
 */
export function applyByIndex<T, TResult>(list: readonly T[], indexInList: number, fn: (item: T) => TResult): TResult;
export function applyByIndex<T, TResult>(
  indexInList: number,
  fn: (item: T) => TResult,
): (list: readonly T[]) => TResult;

// eslint-disable-next-line functional/functional-parameters,@typescript-eslint/explicit-function-return-type
export function applyByIndex() {
  // eslint-disable-next-line prefer-rest-params,functional/functional-parameters
  return purry(_applyByIndex, arguments);
}
