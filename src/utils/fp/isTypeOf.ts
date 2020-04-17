import { purry } from "remeda";

const _isTypeOf = (item: unknown, type: string): boolean => typeof item === type;

/**
 * Verify that an item is of the desired type.
 *
 * **Note:** This is equivalent to compare the given item with `typeof`.
 *
 * @param {unknown} item The item on which to verify the type.
 * @param {string} type The type to verify.
 * @returns {boolean} `true` if the item is of the desired type; otherwise, `false`.
 */
export function isTypeOf(item: unknown, type: string): boolean;
export function isTypeOf(type: string): (item: unknown) => boolean;

// eslint-disable-next-line functional/functional-parameters,@typescript-eslint/explicit-function-return-type
export function isTypeOf() {
  // eslint-disable-next-line prefer-rest-params,functional/functional-parameters
  return purry(_isTypeOf, arguments);
}
