import { House } from "../../types";
import { filter, intersection } from "remeda";
import { HOUSES_LIST } from "./constants";

/**
 * Finds all the houses that share cells with the given house.
 *
 * @private
 * @since 0.0.3
 *
 * @param house The house for which to find the intersecting houses.
 * @returns a list of houses that are intersecting with the given house.
 */
export function findIntersectingHouses(house: House): readonly House[] {
  return filter(
    HOUSES_LIST,
    (iHouse) => iHouse.type !== house.type && intersection(iHouse.cells, house.cells).length > 0,
  );
}
