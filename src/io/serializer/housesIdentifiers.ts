import { House } from "../../types";
import { groupBy, map, pipe, toPairs } from "remeda";
import { join } from "ramda";

/**
 * Get identifiers for the given houses (e.g. "r25" means rows 2 and 5).
 *
 * @since 0.0.3
 *
 * @param houses The houses to identify.
 * @returns An array containing identifiers for the given houses.
 *
 * @example
 * housesIdentifiers([{ type: "row", index: 4}, { type: "row", index: 5}, { type: "col", index: 4}, ]);
 * // => ["r56", "c5"]
 */
export function housesIdentifiers(houses: readonly House[]): readonly string[] {
  return pipe(
    houses,
    groupBy((house) => house.type),
    toPairs,
    map(
      (group) =>
        group[0][0] +
        join(
          "",
          map(group[1], (house) => house.index + 1),
        ),
    ),
  );
}

/**
 * Get the identifier of a house (e.g. "b5" means box 5).
 *
 * @since 0.0.3
 *
 * @param house The house to identify.
 * @returns The identifier of the house.
 *
 * @example
 * houseIdentifier({ type: "row", index: 4});
 * // => "r5"
 */
export function houseIdentifier(house: House): string {
  return house.type[0] + String(house.index + 1);
}
