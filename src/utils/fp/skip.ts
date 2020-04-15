import { filter } from "remeda";

/**
 * Skips a certain amount of results at the start of the given array.
 * 
 * @template T
 * @param {number} count The number of results to skip.
 * @returns {Function} A function that takes an array and that applies a skip function onto
 * it.
 * 
 * @example
 * skip(4)([0, 1, 2, 3, 4, 5]);
 * // => [4, 5]
 */
export function skip<T>(count: number): (array: readonly T[]) => readonly T[] {
  return filter.indexed((_, index) => index >= count);
}
