import { parseGrid } from "../../../io/parser";
import { findIntersectingCandidates } from "..";
import { ROWS_LIST, BOXES_LIST, COLUMNS_LIST } from "../../house";

describe("findIntersectingCandidates", () => {
  it("returns all the candidates that are contained in both houses", () => {
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
      const intersectingCandidates = findIntersectingCandidates(grid.candidates, BOXES_LIST[6], ROWS_LIST[7]);
      expect(intersectingCandidates).toHaveLength(4);
      expect(intersectingCandidates).toContain(3);
      expect(intersectingCandidates).toContain(4);
      expect(intersectingCandidates).toContain(6);
      expect(intersectingCandidates).toContain(9);
    }
  });

  it("returns no candidates that are contained in only one house", () => {
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
      const intersectingCandidates = findIntersectingCandidates(grid.candidates, BOXES_LIST[0], ROWS_LIST[1]);
      expect(intersectingCandidates).toHaveLength(4);
      expect(intersectingCandidates).not.toContain(5);
      expect(intersectingCandidates).not.toContain(7);
    }
  });

  it("returns no candidates that are contained in no houses", () => {
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
      const intersectingCandidates = findIntersectingCandidates(grid.candidates, BOXES_LIST[2], COLUMNS_LIST[6]);
      expect(intersectingCandidates).toHaveLength(4);
      expect(intersectingCandidates).not.toContain(1);
      expect(intersectingCandidates).not.toContain(2);
      expect(intersectingCandidates).not.toContain(6);
      expect(intersectingCandidates).not.toContain(7);
      expect(intersectingCandidates).not.toContain(8);
    }
  });
});

describe("findIntersectingCandidates with minCount", () => {
  it("returns the candidates that are contained in both houses at least n times", () => {
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
      const intersectingCandidatesTwice = findIntersectingCandidates(
        grid.candidates,
        BOXES_LIST[4],
        COLUMNS_LIST[3],
        2,
      );
      expect(intersectingCandidatesTwice).toHaveLength(6);
      expect(intersectingCandidatesTwice).toContain(2);
      expect(intersectingCandidatesTwice).toContain(3);
      expect(intersectingCandidatesTwice).toContain(6);
      expect(intersectingCandidatesTwice).toContain(7);
      expect(intersectingCandidatesTwice).toContain(8);
      expect(intersectingCandidatesTwice).toContain(9);

      const intersectingCandidatesThrice = findIntersectingCandidates(
        grid.candidates,
        BOXES_LIST[4],
        COLUMNS_LIST[3],
        3,
      );
      expect(intersectingCandidatesThrice).toHaveLength(3);
      expect(intersectingCandidatesTwice).toContain(2);
      expect(intersectingCandidatesTwice).toContain(7);
      expect(intersectingCandidatesTwice).toContain(9);
    }
  });

  it("doesn't return the candidates that are contained in both houses less than n times", () => {
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
      const intersectingCandidatesTwice = findIntersectingCandidates(
        grid.candidates,
        BOXES_LIST[2],
        COLUMNS_LIST[8],
        2,
      );
      expect(intersectingCandidatesTwice).toHaveLength(4);
      expect(intersectingCandidatesTwice).not.toContain(3);

      const intersectingCandidatesThrice = findIntersectingCandidates(
        grid.candidates,
        BOXES_LIST[2],
        COLUMNS_LIST[8],
        3,
      );
      expect(intersectingCandidatesThrice).toHaveLength(2);
      expect(intersectingCandidatesThrice).not.toContain(4);
      expect(intersectingCandidatesThrice).not.toContain(5);
    }
  });
});
