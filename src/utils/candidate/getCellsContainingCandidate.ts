import { Digit, GridIndex, Pencilmarks } from "../../types";
import { filter, map, pipe, purry } from "remeda";
import { includes } from "ramda";

const _getCellsContainingCandidate = (
  digit: Digit,
  candidates: ReadonlyMap<GridIndex, Pencilmarks>,
): readonly GridIndex[] => {
  return pipe(
    [...candidates.entries()],
    filter((entry) => includes(digit, entry[1])),
    map((entry) => entry[0]),
  );
};

export function getCellsContainingCandidate<T>(
  digit: Digit,
  candidates: ReadonlyMap<GridIndex, Pencilmarks>,
): readonly GridIndex[];
export function getCellsContainingCandidate<T>(
  candidates: ReadonlyMap<GridIndex, Pencilmarks>,
): (digit: Digit) => readonly GridIndex[];

// eslint-disable-next-line functional/functional-parameters,@typescript-eslint/explicit-function-return-type
export function getCellsContainingCandidate() {
  // eslint-disable-next-line prefer-rest-params,functional/functional-parameters
  return purry(_getCellsContainingCandidate, arguments);
}
