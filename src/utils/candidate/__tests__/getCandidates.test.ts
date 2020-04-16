import { parseGrid } from "../../../io/parser";
import { VALID_DIGITS } from "../../../types";
import { getCandidates, getCandidatesForCell } from "..";

describe("getCandidatesForCell", () => {
  it("returns the candidates of the cells with pencilmarks", () => {
    const grid = parseGrid(`
      +----------------------+----------------------+----------------------+
      | 1579   2      3      | 4      16     19     | 8      579    159    |
      | 6      189    149    | 289    128    7      | 3459   459    13459  |
      | 1479   1789   1479   | 5      3      189    | 6      2      149    |
      +----------------------+----------------------+----------------------+
      | 12379  13679  5      | 236789 124678 123489 | 479    4789   2489   |
      | 8      4      179    | 279    1257   129    | 579    3      6      |
      | 2379   3679   679    | 236789 245678 23489  | 1      45789  24589  |
      +----------------------+----------------------+----------------------+
      | 1347   5      2      | 378    9      6      | 34     48     348    |
      | 349    369    469    | 1      248    2348   | 3459   45689  7      |
      | 3479   3679   8      | 37     47     5      | 2      1      349    |
      +----------------------+----------------------+----------------------+
    `);

    expect(grid).toBeTruthy();
    if (grid) {
      for (const entry of grid.candidates.entries()) {
        expect(getCandidatesForCell(grid.digits, entry[0])).toStrictEqual(entry[1]);
      }
    }
  });

  it("returns nothing for the cells with a big number", () => {
    const grid = parseGrid(`
      +----------------------+----------------------+----------------------+
      | 1579   2      3      | 4      16     19     | 8      579    159    |
      | 6      189    149    | 289    128    7      | 3459   459    13459  |
      | 1479   1789   1479   | 5      3      189    | 6      2      149    |
      +----------------------+----------------------+----------------------+
      | 12379  13679  5      | 236789 124678 123489 | 479    4789   2489   |
      | 8      4      179    | 279    1257   129    | 579    3      6      |
      | 2379   3679   679    | 236789 245678 23489  | 1      45789  24589  |
      +----------------------+----------------------+----------------------+
      | 1347   5      2      | 378    9      6      | 34     48     348    |
      | 349    369    469    | 1      248    2348   | 3459   45689  7      |
      | 3479   3679   8      | 37     47     5      | 2      1      349    |
      +----------------------+----------------------+----------------------+
    `);

    expect(grid).toBeTruthy();
    if (grid) {
      for (const entry of grid.digits.entries()) {
        expect(getCandidatesForCell(grid.digits, entry[0])).toBeUndefined();
      }
    }
  });

  it("returns the last remaining candidate of a house almost complete", () => {
    const grid = parseGrid(`
      +---+---+---+
      |.23|...|...|
      |456|...|...|
      |789|...|...|
      +---+---+---+
      |...|...|...|
      |...|...|...|
      |...|...|...|
      +---+---+---+
      |...|...|...|
      |...|...|...|
      |...|...|...|
      +---+---+---+`);

    expect(grid).toBeTruthy();
    if (grid) {
      expect(getCandidatesForCell(grid.digits, 0)).toStrictEqual([1]);
      expect(getCandidatesForCell(grid.digits, 1)).toBeUndefined();
      expect(getCandidatesForCell(grid.digits, 3)).toStrictEqual([1, 4, 5, 6, 7, 8, 9]);
      expect(getCandidatesForCell(grid.digits, 80)).toStrictEqual(VALID_DIGITS);
    }
  });
});

describe("getCandidates", () => {
  it("calculates the candidates according to the given digits", () => {
    const grid = parseGrid(`
      +----------------------+----------------------+----------------------+
      | 1579   2      3      | 4      16     19     | 8      579    159    |
      | 6      189    149    | 289    128    7      | 3459   459    13459  |
      | 1479   1789   1479   | 5      3      189    | 6      2      149    |
      +----------------------+----------------------+----------------------+
      | 12379  13679  5      | 236789 124678 123489 | 479    4789   2489   |
      | 8      4      179    | 279    1257   129    | 579    3      6      |
      | 2379   3679   679    | 236789 245678 23489  | 1      45789  24589  |
      +----------------------+----------------------+----------------------+
      | 1347   5      2      | 378    9      6      | 34     48     348    |
      | 349    369    469    | 1      248    2348   | 3459   45689  7      |
      | 3479   3679   8      | 37     47     5      | 2      1      349    |
      +----------------------+----------------------+----------------------+
    `);

    expect(grid).toBeTruthy();
    if (grid) {
      const candidates = getCandidates(grid.digits);
      expect(candidates.size).toBe(grid.candidates.size);
      for (const entry of grid.candidates.entries()) {
        expect(candidates.get(entry[0])).toStrictEqual(entry[1]);
      }
    }
  });

  it("returns nothing if the grid is complete", () => {
    const grid = parseGrid(`
      +---+---+---+
      |971|263|584|
      |345|798|126|
      |268|145|937|
      +---+---+---+
      |437|519|862|
      |156|824|793|
      |892|376|451|
      +---+---+---+
      |713|952|648|
      |584|631|279|
      |629|487|315|
      +---+---+---+`);

    expect(grid).toBeTruthy();
    if (grid) {
      expect(getCandidates(grid.digits).size).toBe(0);
    }
  });

  it("returns a full list of all the digits the grid is empty", () => {
    const grid = parseGrid(`
      +---+---+---+
      |...|...|...|
      |...|...|...|
      |...|...|...|
      +---+---+---+
      |...|...|...|
      |...|...|...|
      |...|...|...|
      +---+---+---+
      |...|...|...|
      |...|...|...|
      |...|...|...|
      +---+---+---+`);

    expect(grid).toBeTruthy();
    if (grid) {
      const candidates = getCandidates(grid.digits);
      expect(candidates.size).toBe(81);
      for (const candidate of candidates.values()) {
        expect(candidate).toStrictEqual(VALID_DIGITS);
      }
    }
  });
});
