import { GridIndex, House } from "../../types";
import { equals, filter, flatten, map, pipe, uniqBy } from "remeda";
import { getCellHouses } from "./getCellHouses";
import { all, cond, includes } from "ramda";

/**
 * Find the houses that are shared by all the given cells.
 *
 * **Note:** If the given cells are all identical, returns `undefined`.
 *
 * @private
 * @since 0.0.3
 *
 * @param cells The cells for which to find the common houses.
 * @returns A tuple containing one or two houses that are common to given cells; otherwise, if the cells have no common
 * houses or if the cells are identical, `undefined`.
 */
export function getCellsCommonHouses(cells: readonly GridIndex[]): readonly [House, House | undefined] | undefined {
  const allCellsHouses = map(cells, getCellHouses);
  const commonHouses = pipe(
    cells,
    map(getCellHouses),
    flatten(),
    filter((house) => all((houses) => includes(house, houses), allCellsHouses)),
    uniqBy((house) => house.type + house.index),
  );

  return cond([
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [equals(1), (_): ReturnType<typeof getCellsCommonHouses> => [commonHouses[0], undefined]],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [equals(2), (_): ReturnType<typeof getCellsCommonHouses> => [commonHouses[0], commonHouses[1]]],
  ])(commonHouses.length);
}
