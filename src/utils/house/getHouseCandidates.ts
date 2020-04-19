import { Digit, GridIndex, House, Pencilmarks } from "../../types";
import { getCandidatesIndexes } from "../candidate";
import { filter, purry } from "remeda";
import { includes, values } from "ramda";

const _getHouseCandidates = (
  house: House,
  candidates: ReadonlyMap<GridIndex, Pencilmarks>,
): ReadonlyMap<Digit, readonly GridIndex[]> => {
  const houseCells = values(house.cells);
  return getCandidatesIndexes(new Map(filter([...candidates.entries()], (entry) => includes(entry[0], houseCells))));
};

/**
 * Get the candidates on a house.
 *
 * @private
 * @since 0.0.3
 *
 * @param house The house for which to get the candidates.
 * @param candidates The list of candidates in the grid.
 * @returns A key/value pair list that map each digit with the indexes in the grid that contain it as a candidate.
 */
export function getHouseCandidates<T>(
  house: House,
  candidates: ReadonlyMap<GridIndex, Pencilmarks>,
): ReadonlyMap<Digit, readonly GridIndex[]>;
export function getHouseCandidates<T>(
  candidates: ReadonlyMap<GridIndex, Pencilmarks>,
): (house: House) => ReadonlyMap<Digit, readonly GridIndex[]>;

// eslint-disable-next-line functional/functional-parameters,@typescript-eslint/explicit-function-return-type
export function getHouseCandidates() {
  // eslint-disable-next-line prefer-rest-params,functional/functional-parameters
  return purry(_getHouseCandidates, arguments);
}
