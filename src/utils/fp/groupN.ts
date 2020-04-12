import { T, always, cond, dropLast, isNil } from "ramda";
import { concat, equals, last, purry, reduce } from "remeda";

const _groupN = <T>(list: readonly T[], n: number): readonly (readonly T[])[] => {
  const _baseGroupN = (acc: readonly (readonly T[])[], item: T): readonly (readonly T[])[] => {
    const lastAcc = last(acc);
    const newLastAcc = cond([
      [isNil, always([item])],
      [equals(n), always([item])],
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      [T, (_): readonly T[] => concat(last(acc) as readonly T[], [item])],
    ])(lastAcc?.length) as readonly T[];
    return newLastAcc.length === 1 ? concat(acc, [newLastAcc]) : concat(dropLast(1, acc), [newLastAcc]);
  };

  return reduce(list, _baseGroupN, []);
};

/**
 * Splits a list into sub-lists of the given length.
 *
 * @private
 * @since 0.0.1
 *
 * @param {readonly T[]} list The array to group.
 * @param {number} n The length of the sublists.
 * @returns {readonly (readonly T[])[]} An array that contains the sublists.
 *
 * @example
 * groupN(3)([1, 2, 3, 4, 5, 6, 7, 8, 9]))
 * // => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 *
 * groupN(3)([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
 * // => [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]]
 */
export function groupN<T>(list: readonly T[], n: number): readonly (readonly T[])[];
export function groupN<T>(n: number): (list: readonly T[]) => readonly (readonly T[])[];

// eslint-disable-next-line functional/functional-parameters,@typescript-eslint/explicit-function-return-type
export function groupN() {
  // eslint-disable-next-line prefer-rest-params,functional/functional-parameters
  return purry(_groupN, arguments);
}
