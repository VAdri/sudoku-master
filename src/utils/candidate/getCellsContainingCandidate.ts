import { Digit, GridIndex, Pencilmarks } from "../../types";
import { filter, map, pipe, purry } from "remeda";
import { includes } from "ramda";

const _getCellsContainingCandidate = (
  digit: Digit,
  candidates: ReadonlyMap<GridIndex, Pencilmarks>,
  validCells: readonly GridIndex[] | undefined,
): readonly GridIndex[] => {
  return pipe(
    [...candidates.entries()],
    filter(
      ([gridIndex, candidates]) =>
        (validCells === undefined || includes(gridIndex, validCells)) && includes(digit, candidates),
    ),
    map((entry) => entry[0]),
  );
};

/**
 * Finds the indexes in the grid that contain the given digit as a candidate.
 *
 * @private
 * @since 0.0.2
 *
 * @param digit The candidate for which to find the cells.
 * @param candidates The list of candidates in the frid.
 * @param validCells When this paramater is defined, the function tries to find the candidates only on the given subset
 * of cells.
 * @returns A list of indexes in the grid that contain the given digit as an index.
 */
export function getCellsContainingCandidate<T>(
  digit: Digit,
  candidates: ReadonlyMap<GridIndex, Pencilmarks>,
  validCells: readonly GridIndex[] | undefined,
): readonly GridIndex[];
export function getCellsContainingCandidate<T>(
  candidates: ReadonlyMap<GridIndex, Pencilmarks>,
  validCells: readonly GridIndex[] | undefined,
): (digit: Digit) => readonly GridIndex[];

// eslint-disable-next-line functional/functional-parameters,@typescript-eslint/explicit-function-return-type
export function getCellsContainingCandidate() {
  // eslint-disable-next-line prefer-rest-params,functional/functional-parameters
  return purry(_getCellsContainingCandidate, arguments);
}
