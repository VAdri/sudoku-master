import { CellIndex, Digit, GridIndex, House } from "../../types";
import { filter, map, pipe, purry, toPairs } from "remeda";

export type HouseValues = { readonly house: House; readonly values: ReadonlyMap<CellIndex, Digit | undefined> };

const _getHouseValues = (house: House, digits: ReadonlyMap<GridIndex, Digit>): HouseValues => {
  return {
    house,
    values: new Map(
      pipe(
        toPairs(house.cells),
        map((cell) => [parseInt(cell[0]), digits.get(cell[1])] as readonly [CellIndex, Digit | undefined]),
        filter((entry) => !!entry[1]),
      ),
    ),
  };
};

/**
 * Get the values of the cells with a placed digits in a given house.
 *
 * @since 0.0.2
 *
 * @param {House} house The house on which to find the cell values.
 * @param {ReadonlyMap<GridIndex, Digit>} digits The list of digits that are placed in the grid.
 * @returns {HouseValues} The house with its associated values on each cell.
 */
export function getHouseValues<T>(house: House, digits: ReadonlyMap<GridIndex, Digit>): HouseValues;
export function getHouseValues<T>(digits: ReadonlyMap<GridIndex, Digit>): (house: House) => HouseValues;

// eslint-disable-next-line functional/functional-parameters,@typescript-eslint/explicit-function-return-type
export function getHouseValues() {
  // eslint-disable-next-line prefer-rest-params,functional/functional-parameters
  return purry(_getHouseValues, arguments);
}
