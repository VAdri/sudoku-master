import { getHouseCandidates } from "..";
import { parseGrid } from "../../../io/parser";
import { HOUSES_LIST } from "..";

describe("getHouseCandidates", () => {
  it("returns all the cell indexes of a candidate in the house", () => {
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
    const row3 = HOUSES_LIST.find((house) => house.type === "row" && house.index === 2);
    expect(row3).not.toBeFalsy();
    if (grid && row3) {
      let result = getHouseCandidates(row3, grid.candidates);
      expect(result.size).toBe(5);
      expect(result.get(1)).toBeFalsy();
      expect(result.get(2)).toBeFalsy();
      expect(result.get(3)).toStrictEqual([18, 20]);
      expect(result.get(4)).toStrictEqual([18, 19, 20, 21, 23]);
      expect(result.get(5)).toBeFalsy();
      expect(result.get(6)).toStrictEqual([21]);
      expect(result.get(7)).toStrictEqual([18, 19]);
      expect(result.get(8)).toBeFalsy();
      expect(result.get(9)).toStrictEqual([18, 20, 21, 23]);
    }
  });
});
