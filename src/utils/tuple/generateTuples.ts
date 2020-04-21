import { filter, flatten, map, pipe, uniq } from "remeda";
import { includes } from "ramda";

type GenerateTuplesOptions<T> = {
  readonly size: number;
  readonly validValues: readonly T[];
  readonly getDuplicates?: boolean;
  readonly getSameValues?: boolean;
};

const isDuplicate = <T>(currentTuple: readonly T[], currentIndex: number, currentValue: T): boolean => {
  return currentTuple[currentIndex - 1] !== undefined && currentTuple[currentIndex - 1] < currentValue;
};

/**
 * Generate a list of all the possible tuples of n elements with the given values.
 *
 * @private
 * @since 0.0.3
 *
 * @param options Options for the generation of the tuples.
 * @param options.size Size of the tuples to generate.
 * @param options.validValues Values that the tuples can contain.
 * @param [options.getDuplicates=true] Indicates whether the generated tuples can contain duplicates in different orders
 * (e.g. [0, 1] and [1, 0] are considered as duplicates).
 * @param [options.getSameValues=true] Indicates whether the generated tuples can contain the same value twice (e.g.
 * [1, 1] contains the value "1" twice).
 * @returns A list containing the generated tuples.
 */
export function generateTuples<T>({
  size,
  validValues,
  getDuplicates = true,
  getSameValues = true,
}: GenerateTuplesOptions<T>): readonly (readonly T[])[] {
  const finalIndex = size - 1;

  const findTuple = (index: number, previous: readonly T[]): readonly (readonly T[])[] => {
    return pipe(
      validValues,
      uniq(),
      filter((value) => getSameValues || !includes(value, previous)),
      map((value) => {
        return { value, tuple: [...previous, value] as const };
      }),
      filter((entry) => getDuplicates || !isDuplicate(entry.tuple, index, entry.value)),
      map((entry) => (index === finalIndex ? [entry.tuple] : findTuple(index + 1, entry.tuple))),
      flatten(),
    );
  };

  return findTuple(0, []);
}
