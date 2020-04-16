import { flatMap, map } from "remeda";
import {
  CellIndex,
  House,
  HouseCells,
  HouseIndex,
  HouseType,
  VALID_CELL_INDEXES,
  VALID_HOUSE_INDEXES,
  VALID_HOUSE_TYPES,
} from "../../types";
import { fromPairs } from "ramda";
import { getCellIndexInGrid } from "../cell/getCellIndexInGrid";

/**
 * The list of all the houses in the grid.
 *
 * @private
 * @since 0.0.1
 */
export const HOUSES_LIST: readonly House[] = flatMap((houseType: HouseType) =>
  map((houseIndex: HouseIndex) => {
    return {
      type: houseType,
      index: houseIndex,
      cells: fromPairs(
        map(VALID_CELL_INDEXES, (cellIndex: CellIndex) => {
          const indexInGrid = getCellIndexInGrid({ houseType, houseIndex, cellIndex });
          return [cellIndex, indexInGrid];
        }),
      ) as HouseCells,
    };
  })(VALID_HOUSE_INDEXES),
)(VALID_HOUSE_TYPES);
