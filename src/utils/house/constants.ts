import { filter, flatMap, map, pipe, sortBy } from "remeda";
import {
  CellIndex,
  House,
  HouseIndex,
  HouseType,
  VALID_CELL_INDEXES,
  VALID_HOUSE_INDEXES,
  VALID_HOUSE_TYPES,
} from "../../types";
import { getCellIndexInGrid } from "../cell/getCellIndexInGrid";

export const HOUSES_LIST: readonly House[] = flatMap((houseType: HouseType) =>
  map((houseIndex: HouseIndex) => {
    return {
      type: houseType,
      index: houseIndex,
      cells: map(VALID_CELL_INDEXES, (cellIndex: CellIndex) => {
        const indexInGrid = getCellIndexInGrid({ houseType, houseIndex, cellIndex });
        return indexInGrid;
      }),
    };
  })(VALID_HOUSE_INDEXES),
)(VALID_HOUSE_TYPES);

export const ROWS_LIST: readonly House[] = pipe(
  HOUSES_LIST,
  filter((house) => house.type === "row"),
  sortBy((house) => house.index),
);

export const COLUMNS_LIST: readonly House[] = pipe(
  HOUSES_LIST,
  filter((house) => house.type === "col"),
  sortBy((house) => house.index),
);

export const BOXES_LIST: readonly House[] = pipe(
  HOUSES_LIST,
  filter((house) => house.type === "box"),
  sortBy((house) => house.index),
);
