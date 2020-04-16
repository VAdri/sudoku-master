import { parseGrid } from "../../../io/parser";
import { getCandidates, getCellsContainingCandidate } from "..";

describe("getCellsContainingCandidate", () => {
  it("returns the list of grid indexes on which the given digit is a candidate", () => {
    const grid = parseGrid(`
      .-------------------.------------------.----------------------.
      | 3459   2     8    | 14569  15  7     | 469    369    3469   |
      | 459    1     6    | 459    8   3     | 249    7      249    |
      | 3479   47    349  | 469    2   49    | 8      5      1      |
      :-------------------+------------------+----------------------:
      | 1      3     7    | 2      9   58    | 456    68     4568   |
      | 45689  4568  2459 | 7      3   158   | 24569  12689  245689 |
      | 589    58    259  | 15     4   6     | 3      1289   7      |
      :-------------------+------------------+----------------------:
      | 2      9     1345 | 145    7   145   | 56     368    3568   |
      | 357    57    35   | 8      6   259   | 1      4      2359   |
      | 4568   4568  145  | 3      15  12459 | 7      2689   25689  |
      '-------------------'------------------'----------------------'`);
    expect(grid).not.toBeFalsy();
    if (grid) {
      const result = getCellsContainingCandidate(8, grid.candidates);
      expect(result).toHaveLength(17);
      expect(result).toStrictEqual([32, 34, 35, 36, 37, 41, 43, 44, 45, 46, 52, 61, 62, 72, 73, 79, 80]);
    }
  });

  it("returns an empty list if the given digit is fully placed", () => {
    const grid = parseGrid("000900700805107369769008005030074800080000017007001050008710600004050702370000000");
    expect(grid).not.toBeFalsy();
    if (grid) {
      const result = getCellsContainingCandidate(7, getCandidates(grid.digits));
      expect(result).toHaveLength(0);
    }
  });
});
