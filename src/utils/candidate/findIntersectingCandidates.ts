import { Digit, GridIndex, House, Pencilmarks } from "../../types";
import { filter, flatten, intersection, map, pipe } from "remeda";
import { count } from "../fp";

/**
 * Finds a list of digits that are candidates in the intersection of both houses.
 *
 * @private
 * @since 0.0.3
 *
 * @param candidates The list of candidates in the grid.
 * @param house1 The first house.
 * @param house2 The second house that is intersecting with the first.
 * @param [minCount=1] Indicates a minimum count of candidates that must be found in the intersection.
 * @returns A list of digits that are in the intersection of the two houses.
 */
export function findIntersectingCandidates(
  candidates: ReadonlyMap<GridIndex, Pencilmarks>,
  house1: House,
  house2: House,
  minCount = 1,
): readonly Digit[] {
  return pipe(
    house1.cells,
    intersection(house2.cells),
    map((cell: GridIndex) => candidates.get(cell)),
    filter((candidates) => candidates !== undefined),
    flatten,
    count(),
    filter((result) => result.count >= minCount),
    map((result) => result.value as Digit),
  );
}
