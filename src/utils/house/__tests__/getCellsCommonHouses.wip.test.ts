import { getCellsCommonHouses } from "../getCellsCommonHouses";
import { ROWS_LIST, COLUMNS_LIST, BOXES_LIST } from "../constants";

describe("getCellsCommonHouses", () => {
  it("returns one house when the cells are on the same row but not the same box", () => {
    expect(getCellsCommonHouses([1, 2, 3, 4, 5, 6])).toStrictEqual([ROWS_LIST[0], undefined]);
  });

  it("returns one house when the cells are on the same column but not the same box", () => {
    expect(getCellsCommonHouses([18, 27, 36])).toStrictEqual([COLUMNS_LIST[0], undefined]);
  });

  it("returns one house when the cells are on the same box but not the same line", () => {
    expect(getCellsCommonHouses([42, 43, 52])).toStrictEqual([BOXES_LIST[5], undefined]);
  });

  it("returns two houses when the cells are on the same row and the same box", () => {
    const result = getCellsCommonHouses([31, 32]);
    expect(result).toContainEqual(ROWS_LIST[3]);
    expect(result).toContainEqual(BOXES_LIST[4]);
  });

  it("returns two houses when the cells are on the same column and the same box", () => {
    const result = getCellsCommonHouses([27, 36]);
    expect(result).toContainEqual(COLUMNS_LIST[0]);
    expect(result).toContainEqual(BOXES_LIST[3]);
  });

  it("returns nothing when the cells are identical", () => {
    expect(getCellsCommonHouses([0])).toBeUndefined();
    expect(getCellsCommonHouses([0, 0])).toBeUndefined();
  });

  it("returns nothing when the cells have no house in common", () => {
    expect(getCellsCommonHouses([0, 47, 79])).toBeUndefined();
  });

  it("returns only the houses that all the cells have in common", () => {
    expect(getCellsCommonHouses([1, 2, 3])).toStrictEqual([ROWS_LIST[0], undefined]);
    expect(getCellsCommonHouses([0, 1, 36])).toBeUndefined();
  });
});
