import { findIntersectingHouses } from "..";
import { ROWS_LIST, COLUMNS_LIST, BOXES_LIST } from "../constants";
import { House } from "../../../types";
import { filter } from "remeda";

describe("findIntersectingHouses", () => {
  let results: readonly House[];

  it("finds houses intersecting with a row", () => {
    // Row 1
    results = findIntersectingHouses(ROWS_LIST[0]);
    expect(results).toHaveLength(12);
    COLUMNS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[0]);
    expect(results).toContainEqual(BOXES_LIST[1]);
    expect(results).toContainEqual(BOXES_LIST[2]);

    // Row 2
    results = findIntersectingHouses(ROWS_LIST[1]);
    expect(results).toHaveLength(12);
    COLUMNS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[0]);
    expect(results).toContainEqual(BOXES_LIST[1]);
    expect(results).toContainEqual(BOXES_LIST[2]);

    // Row 3
    results = findIntersectingHouses(ROWS_LIST[2]);
    expect(results).toHaveLength(12);
    COLUMNS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[0]);
    expect(results).toContainEqual(BOXES_LIST[1]);
    expect(results).toContainEqual(BOXES_LIST[2]);

    // Row 4
    results = findIntersectingHouses(ROWS_LIST[3]);
    expect(results).toHaveLength(12);
    COLUMNS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[3]);
    expect(results).toContainEqual(BOXES_LIST[4]);
    expect(results).toContainEqual(BOXES_LIST[5]);

    // Row 5
    results = findIntersectingHouses(ROWS_LIST[4]);
    expect(results).toHaveLength(12);
    COLUMNS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[3]);
    expect(results).toContainEqual(BOXES_LIST[4]);
    expect(results).toContainEqual(BOXES_LIST[5]);

    // Row 6
    results = findIntersectingHouses(ROWS_LIST[5]);
    expect(results).toHaveLength(12);
    COLUMNS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[3]);
    expect(results).toContainEqual(BOXES_LIST[4]);
    expect(results).toContainEqual(BOXES_LIST[5]);

    // Row 7
    results = findIntersectingHouses(ROWS_LIST[6]);
    expect(results).toHaveLength(12);
    COLUMNS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[6]);
    expect(results).toContainEqual(BOXES_LIST[7]);
    expect(results).toContainEqual(BOXES_LIST[8]);

    // Row 8
    results = findIntersectingHouses(ROWS_LIST[7]);
    expect(results).toHaveLength(12);
    COLUMNS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[6]);
    expect(results).toContainEqual(BOXES_LIST[7]);
    expect(results).toContainEqual(BOXES_LIST[8]);

    // Row 9
    results = findIntersectingHouses(ROWS_LIST[8]);
    expect(results).toHaveLength(12);
    COLUMNS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[6]);
    expect(results).toContainEqual(BOXES_LIST[7]);
    expect(results).toContainEqual(BOXES_LIST[8]);
  });

  it("finds houses intersecting with a column", () => {
    // Col 1
    results = findIntersectingHouses(COLUMNS_LIST[0]);
    expect(results).toHaveLength(12);
    ROWS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[0]);
    expect(results).toContainEqual(BOXES_LIST[3]);
    expect(results).toContainEqual(BOXES_LIST[6]);

    // Col 2
    results = findIntersectingHouses(COLUMNS_LIST[1]);
    expect(results).toHaveLength(12);
    ROWS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[0]);
    expect(results).toContainEqual(BOXES_LIST[3]);
    expect(results).toContainEqual(BOXES_LIST[6]);

    // Col 3
    results = findIntersectingHouses(COLUMNS_LIST[2]);
    expect(results).toHaveLength(12);
    ROWS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[0]);
    expect(results).toContainEqual(BOXES_LIST[3]);
    expect(results).toContainEqual(BOXES_LIST[6]);

    // Col 4
    results = findIntersectingHouses(COLUMNS_LIST[3]);
    expect(results).toHaveLength(12);
    ROWS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[1]);
    expect(results).toContainEqual(BOXES_LIST[4]);
    expect(results).toContainEqual(BOXES_LIST[7]);

    // Col 5
    results = findIntersectingHouses(COLUMNS_LIST[4]);
    expect(results).toHaveLength(12);
    ROWS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[1]);
    expect(results).toContainEqual(BOXES_LIST[4]);
    expect(results).toContainEqual(BOXES_LIST[7]);

    // Col 6
    results = findIntersectingHouses(COLUMNS_LIST[5]);
    expect(results).toHaveLength(12);
    ROWS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[1]);
    expect(results).toContainEqual(BOXES_LIST[4]);
    expect(results).toContainEqual(BOXES_LIST[7]);

    // Col 7
    results = findIntersectingHouses(COLUMNS_LIST[6]);
    expect(results).toHaveLength(12);
    ROWS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[2]);
    expect(results).toContainEqual(BOXES_LIST[5]);
    expect(results).toContainEqual(BOXES_LIST[8]);

    // Col 8
    results = findIntersectingHouses(COLUMNS_LIST[7]);
    expect(results).toHaveLength(12);
    ROWS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[2]);
    expect(results).toContainEqual(BOXES_LIST[5]);
    expect(results).toContainEqual(BOXES_LIST[8]);

    // Col 9
    results = findIntersectingHouses(COLUMNS_LIST[8]);
    expect(results).toHaveLength(12);
    ROWS_LIST.forEach((col) => expect(results).toContainEqual(col));
    expect(results).toContainEqual(BOXES_LIST[2]);
    expect(results).toContainEqual(BOXES_LIST[5]);
    expect(results).toContainEqual(BOXES_LIST[8]);
  });

  it("finds houses intersecting with a box", () => {
    // Box 1
    results = findIntersectingHouses(BOXES_LIST[0]);
    expect(results).toHaveLength(6);
    expect(results).toContainEqual(ROWS_LIST[0]);
    expect(results).toContainEqual(ROWS_LIST[1]);
    expect(results).toContainEqual(ROWS_LIST[2]);
    expect(results).toContainEqual(COLUMNS_LIST[0]);
    expect(results).toContainEqual(COLUMNS_LIST[1]);
    expect(results).toContainEqual(COLUMNS_LIST[2]);

    // Box 2
    results = findIntersectingHouses(BOXES_LIST[1]);
    expect(results).toHaveLength(6);
    expect(results).toContainEqual(ROWS_LIST[0]);
    expect(results).toContainEqual(ROWS_LIST[1]);
    expect(results).toContainEqual(ROWS_LIST[2]);
    expect(results).toContainEqual(COLUMNS_LIST[3]);
    expect(results).toContainEqual(COLUMNS_LIST[4]);
    expect(results).toContainEqual(COLUMNS_LIST[5]);

    // Box 3
    results = findIntersectingHouses(BOXES_LIST[2]);
    expect(results).toHaveLength(6);
    expect(results).toContainEqual(ROWS_LIST[0]);
    expect(results).toContainEqual(ROWS_LIST[1]);
    expect(results).toContainEqual(ROWS_LIST[2]);
    expect(results).toContainEqual(COLUMNS_LIST[6]);
    expect(results).toContainEqual(COLUMNS_LIST[7]);
    expect(results).toContainEqual(COLUMNS_LIST[8]);

    // Box 4
    results = findIntersectingHouses(BOXES_LIST[3]);
    expect(results).toHaveLength(6);
    expect(results).toContainEqual(ROWS_LIST[3]);
    expect(results).toContainEqual(ROWS_LIST[4]);
    expect(results).toContainEqual(ROWS_LIST[5]);
    expect(results).toContainEqual(COLUMNS_LIST[0]);
    expect(results).toContainEqual(COLUMNS_LIST[1]);
    expect(results).toContainEqual(COLUMNS_LIST[2]);

    // Box 5
    results = findIntersectingHouses(BOXES_LIST[4]);
    expect(results).toHaveLength(6);
    expect(results).toContainEqual(ROWS_LIST[3]);
    expect(results).toContainEqual(ROWS_LIST[4]);
    expect(results).toContainEqual(ROWS_LIST[5]);
    expect(results).toContainEqual(COLUMNS_LIST[3]);
    expect(results).toContainEqual(COLUMNS_LIST[4]);
    expect(results).toContainEqual(COLUMNS_LIST[5]);

    // Box 6
    results = findIntersectingHouses(BOXES_LIST[5]);
    expect(results).toHaveLength(6);
    expect(results).toContainEqual(ROWS_LIST[3]);
    expect(results).toContainEqual(ROWS_LIST[4]);
    expect(results).toContainEqual(ROWS_LIST[5]);
    expect(results).toContainEqual(COLUMNS_LIST[6]);
    expect(results).toContainEqual(COLUMNS_LIST[7]);
    expect(results).toContainEqual(COLUMNS_LIST[8]);

    // Box 7
    results = findIntersectingHouses(BOXES_LIST[6]);
    expect(results).toHaveLength(6);
    expect(results).toContainEqual(ROWS_LIST[6]);
    expect(results).toContainEqual(ROWS_LIST[7]);
    expect(results).toContainEqual(ROWS_LIST[8]);
    expect(results).toContainEqual(COLUMNS_LIST[0]);
    expect(results).toContainEqual(COLUMNS_LIST[1]);
    expect(results).toContainEqual(COLUMNS_LIST[2]);

    // Box 8
    results = findIntersectingHouses(BOXES_LIST[7]);
    expect(results).toHaveLength(6);
    expect(results).toContainEqual(ROWS_LIST[6]);
    expect(results).toContainEqual(ROWS_LIST[7]);
    expect(results).toContainEqual(ROWS_LIST[8]);
    expect(results).toContainEqual(COLUMNS_LIST[3]);
    expect(results).toContainEqual(COLUMNS_LIST[4]);
    expect(results).toContainEqual(COLUMNS_LIST[5]);

    // Box 9
    results = findIntersectingHouses(BOXES_LIST[8]);
    expect(results).toHaveLength(6);
    expect(results).toContainEqual(ROWS_LIST[6]);
    expect(results).toContainEqual(ROWS_LIST[7]);
    expect(results).toContainEqual(ROWS_LIST[8]);
    expect(results).toContainEqual(COLUMNS_LIST[6]);
    expect(results).toContainEqual(COLUMNS_LIST[7]);
    expect(results).toContainEqual(COLUMNS_LIST[8]);
  });
});
