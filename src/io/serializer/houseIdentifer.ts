import { House } from "../../types";

/**
 * Get the identifier of a house (e.g. "b5" means box 5).
 *
 * @since 0.0.3
 *
 * @param house The house to identify.
 * @returns The identifier of the house.
 */
export function houseIdentifier(house: House): string {
  return house.type[0] + String(house.index + 1);
}
