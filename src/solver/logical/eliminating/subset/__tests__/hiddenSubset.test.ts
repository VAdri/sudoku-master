import { parseGrid } from "../../../../../io/parser";
import { eliminateHiddenSubset } from "..";
import { SubsetType } from "..";
import { EliminationImplicationType, EliminationImplicationSubset } from "../../types";
import { eliminationDescription, serializeGrid } from "../../../../../io/serializer";

describe("eliminateHiddenSubset of level 2", () => {
  it("solves a Hidden Pair in a row", () => {
    const grid = parseGrid(
      ":0210:123589:....+6........4273+6..67+3..4..94....+6+8....96+4.+7+6.7.+5.+9231......85.6..8.27+1..5.1..+9+4::112 211 212 311 312 511 512 811 812 911: ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateHiddenSubset(grid, SubsetType.Pair);
      expect(results).toHaveLength(2);

      expect(results[0].technique).toBe("Hidden Pair");
      expect(results[0].eliminations).toHaveLength(6);
      expect(results[0].eliminations[0].digit).toBe(1);
      expect(results[0].eliminations[0].coords).toHaveLength(1);
      expect(results[0].eliminations[0].coords).toContainEqual([0, 1]);
      expect(results[0].eliminations[1].digit).toBe(2);
      expect(results[0].eliminations[1].coords).toHaveLength(2);
      expect(results[0].eliminations[1].coords).toContainEqual([0, 0]);
      expect(results[0].eliminations[1].coords).toContainEqual([0, 1]);
      expect(results[0].eliminations[2].digit).toBe(3);
      expect(results[0].eliminations[2].coords).toHaveLength(2);
      expect(results[0].eliminations[2].coords).toContainEqual([0, 0]);
      expect(results[0].eliminations[2].coords).toContainEqual([0, 1]);
      expect(results[0].eliminations[3].digit).toBe(5);
      expect(results[0].eliminations[3].coords).toHaveLength(2);
      expect(results[0].eliminations[3].coords).toContainEqual([0, 0]);
      expect(results[0].eliminations[3].coords).toContainEqual([0, 1]);
      expect(results[0].eliminations[4].digit).toBe(8);
      expect(results[0].eliminations[4].coords).toHaveLength(2);
      expect(results[0].eliminations[4].coords).toContainEqual([0, 0]);
      expect(results[0].eliminations[4].coords).toContainEqual([0, 1]);
      expect(results[0].eliminations[5].digit).toBe(9);
      expect(results[0].eliminations[5].coords).toHaveLength(1);
      expect(results[0].eliminations[5].coords).toContainEqual([0, 0]);
      expect(results[0].implication).not.toBeFalsy();
      if (results[0].implication) {
        const implication = results[0].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(2);
        expect(implication.digits).toStrictEqual([4, 7]);
        expect(implication.cells).toHaveLength(2);
        expect(implication.cells).toContainEqual([0, 0]);
        expect(implication.cells).toContainEqual([0, 1]);
      }
      expect(eliminationDescription(results[0])).toBe(
        "Hidden Pair: 4,7 in r1c12 => r1c2<>1, r1c12<>2, r1c12<>3, r1c12<>5, r1c12<>8, r1c1<>9",
      );
    }
  });

  it("solves a Hidden Pair in a column", () => {
    const grid = parseGrid(
      ":0210:6:.+4+9+132....+8+1+4+7+9...+3+276+8+5914.96.+5+18...+75.+28....3+8.4+6..5+85+32+6+7...7+1+2+8+9+456+39+64+51+3...::659: ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateHiddenSubset(grid, SubsetType.Pair);
      expect(results).toHaveLength(1);

      expect(results[0].technique).toBe("Hidden Pair");
      expect(results[0].eliminations).toHaveLength(1);
      expect(results[0].eliminations[0].digit).toBe(6);
      expect(results[0].eliminations[0].coords).toHaveLength(1);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 8]);
      expect(results[0].implication).not.toBeFalsy();
      if (results[0].implication) {
        const implication = results[0].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(2);
        expect(implication.digits).toStrictEqual([1, 9]);
        expect(implication.cells).toHaveLength(2);
        expect(implication.cells).toContainEqual([4, 8]);
        expect(implication.cells).toContainEqual([6, 8]);
      }
      expect(eliminationDescription(results[0])).toBe("Hidden Pair: 1,9 in r57c9 => r5c9<>6");
    }
  });

  // it("solves a Hidden Pair in a box", () => {});
});

describe("eliminateHiddenSubset of level 3", () => {
  // it("solves a Hidden Triple in a row", () => {});

  it("solves a Hidden Triple in a column", () => {
    const grid = parseGrid(
      ":0211:13478:5..62..37..489........5....93........2....6.57.......3.....9.........7..68.57...2::146 166 186 386 446 466 486 746 846 866 886: ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateHiddenSubset(grid, SubsetType.Triple);
      expect(results).toHaveLength(1);
      expect(results[0].technique).toBe("Hidden Triple");
      expect(results[0].eliminations).toHaveLength(5);
      expect(results[0].eliminations[0].digit).toBe(1);
      expect(results[0].eliminations[0].coords).toHaveLength(3);
      expect(results[0].eliminations[0].coords).toContainEqual([3, 5]);
      expect(results[0].eliminations[0].coords).toContainEqual([5, 5]);
      expect(results[0].eliminations[0].coords).toContainEqual([7, 5]);
      expect(results[0].eliminations[1].digit).toBe(3);
      expect(results[0].eliminations[1].coords).toHaveLength(1);
      expect(results[0].eliminations[1].coords).toContainEqual([7, 5]);
      expect(results[0].eliminations[2].digit).toBe(4);
      expect(results[0].eliminations[2].coords).toHaveLength(3);
      expect(results[0].eliminations[2].coords).toContainEqual([3, 5]);
      expect(results[0].eliminations[2].coords).toContainEqual([5, 5]);
      expect(results[0].eliminations[2].coords).toContainEqual([7, 5]);
      expect(results[0].eliminations[3].digit).toBe(7);
      expect(results[0].eliminations[3].coords).toHaveLength(1);
      expect(results[0].eliminations[3].coords).toContainEqual([3, 5]);
      expect(results[0].eliminations[4].digit).toBe(8);
      expect(results[0].eliminations[4].coords).toHaveLength(3);
      expect(results[0].eliminations[4].coords).toContainEqual([3, 5]);
      expect(results[0].eliminations[4].coords).toContainEqual([5, 5]);
      expect(results[0].eliminations[4].coords).toContainEqual([7, 5]);
      expect(results[0].implication).not.toBeFalsy();
      if (results[0].implication) {
        const implication = results[0].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(3);
        expect(implication.digits).toStrictEqual([2, 5, 6]);
        expect(implication.cells).toHaveLength(3);
        expect(implication.cells).toContainEqual([3, 5]);
        expect(implication.cells).toContainEqual([5, 5]);
        expect(implication.cells).toContainEqual([7, 5]);
      }
      expect(eliminationDescription(results[0])).toBe(
        "Hidden Triple: 2,5,6 in r468c6 => r468c6<>1, r8c6<>3, r468c6<>4, r4c6<>7, r468c6<>8",
      );
    }
  });

  it("solves a Hidden Triple in a box", () => {
    const grid = parseGrid(
      ":0211:16:2+8....4+7+35+3+4+8+2+7+1+96.+71.34.8.+3..5...4....+3+4..+6.+46.79.+3+1..9.2.+36+5+4..3..9+8+21....8.+937::192 693: ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateHiddenSubset(grid, SubsetType.Triple);
      expect(results).toHaveLength(1);

      expect(results[0].technique).toBe("Hidden Triple");
      expect(results[0].eliminations).toHaveLength(2);
      expect(results[0].eliminations[0].digit).toBe(1);
      expect(results[0].eliminations[0].coords).toHaveLength(1);
      expect(results[0].eliminations[0].coords).toContainEqual([8, 1]);
      expect(results[0].eliminations[1].digit).toBe(6);
      expect(results[0].eliminations[1].coords).toHaveLength(1);
      expect(results[0].eliminations[1].coords).toContainEqual([8, 2]);
      expect(results[0].implication).not.toBeFalsy();
      if (results[0].implication) {
        const implication = results[0].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(3);
        expect(implication.digits).toStrictEqual([2, 4, 5]);
        expect(implication.cells).toHaveLength(3);
        expect(implication.cells).toContainEqual([7, 1]);
        expect(implication.cells).toContainEqual([8, 1]);
        expect(implication.cells).toContainEqual([8, 2]);
      }
      expect(eliminationDescription(results[0])).toBe("Hidden Triple: 2,4,5 in r8c2,r9c23 => r9c2<>1, r9c3<>6");
    }
  });
});

describe("eliminateHiddenSubset of level 4", () => {
  // it("solves a Hidden Quadruple in a row", () => {});

  it("solves a Hidden Quadruple in a column", () => {
    const grid = parseGrid(`
      .------------------.---------------.---------------------.
      | 5679  3     279  | 24   45   27  | 2678  1     2456789 |
      | 567   1256  8    | 234  9    127 | 2367  356   234567  |
      | 4     125   1279 | 6    135  8   | 237   35    23579   |
      :------------------+---------------+---------------------:
      | 138   128   123  | 5    7    6   | 9     4     138     |
      | 67    146   147  | 9    8    3   | 5     2     167     |
      | 5679  568   379  | 1    2    4   | 3678  368   3678    |
      :------------------+---------------+---------------------:
      | 2     7     6    | 348  34   5   | 1     9     38      |
      | 138   148   134  | 7    136  9   | 2368  3568  23568   |
      | 138   9     5    | 238  136  12  | 4     7     368     |
      '------------------'---------------'---------------------'`);
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateHiddenSubset(grid, SubsetType.Quadruple);
      expect(results).toHaveLength(1);
      expect(results[0].technique).toBe("Hidden Quadruple");
      expect(results[0].eliminations).toHaveLength(4);
      expect(results[0].eliminations[0].digit).toBe(3);
      expect(results[0].eliminations[0].coords).toHaveLength(3);
      expect(results[0].eliminations[0].coords).toContainEqual([1, 8]);
      expect(results[0].eliminations[0].coords).toContainEqual([2, 8]);
      expect(results[0].eliminations[0].coords).toContainEqual([7, 8]);
      expect(results[0].eliminations[1].digit).toBe(6);
      expect(results[0].eliminations[1].coords).toHaveLength(3);
      expect(results[0].eliminations[1].coords).toContainEqual([0, 8]);
      expect(results[0].eliminations[1].coords).toContainEqual([1, 8]);
      expect(results[0].eliminations[1].coords).toContainEqual([7, 8]);
      expect(results[0].eliminations[2].digit).toBe(7);
      expect(results[0].eliminations[2].coords).toHaveLength(3);
      expect(results[0].eliminations[2].coords).toContainEqual([0, 8]);
      expect(results[0].eliminations[2].coords).toContainEqual([1, 8]);
      expect(results[0].eliminations[2].coords).toContainEqual([2, 8]);
      expect(results[0].eliminations[3].digit).toBe(8);
      expect(results[0].eliminations[3].coords).toHaveLength(2);
      expect(results[0].eliminations[3].coords).toContainEqual([0, 8]);
      expect(results[0].eliminations[3].coords).toContainEqual([7, 8]);
      expect(results[0].implication).not.toBeFalsy();
      if (results[0].implication) {
        const implication = results[0].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(4);
        expect(implication.digits).toStrictEqual([2, 4, 5, 9]);
        expect(implication.cells).toHaveLength(4);
        expect(implication.cells).toContainEqual([0, 8]);
        expect(implication.cells).toContainEqual([1, 8]);
        expect(implication.cells).toContainEqual([2, 8]);
        expect(implication.cells).toContainEqual([7, 8]);
      }
      expect(eliminationDescription(results[0])).toBe(
        "Hidden Quadruple: 2,4,5,9 in r1238c9 => r238c9<>3, r128c9<>6, r123c9<>7, r18c9<>8",
      );
    }
  });

  it("solves a Hidden Quadruple in a box", () => {
    const grid = parseGrid(
      ":0212:36:8+1+657+329+439+2......+4+5+72.+9..+6+9+41...5+68+7+8+5496+1+2+3+6+2+38...+4.2+79.....1+1+38....7.56+4....82:766 377 987:375 675 685: ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateHiddenSubset(grid, SubsetType.Quadruple);
      expect(results).toHaveLength(1);
      expect(results[0].technique).toBe("Hidden Quadruple");
      expect(results[0].eliminations).toHaveLength(2);
      expect(results[0].eliminations[0].digit).toBe(3);
      expect(results[0].eliminations[0].coords).toHaveLength(1);
      expect(results[0].eliminations[0].coords).toContainEqual([6, 4]);
      expect(results[0].eliminations[1].digit).toBe(6);
      expect(results[0].eliminations[1].coords).toHaveLength(2);
      expect(results[0].eliminations[1].coords).toContainEqual([6, 4]);
      expect(results[0].eliminations[1].coords).toContainEqual([7, 4]);
      expect(results[0].implication).not.toBeFalsy();
      if (results[0].implication) {
        const implication = results[0].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(4);
        expect(implication.digits).toStrictEqual([2, 4, 5, 8]);
        expect(implication.cells).toHaveLength(4);
        expect(implication.cells).toContainEqual([6, 4]);
        expect(implication.cells).toContainEqual([6, 5]);
        expect(implication.cells).toContainEqual([7, 4]);
        expect(implication.cells).toContainEqual([7, 5]);
      }
      expect(eliminationDescription(results[0])).toBe("Hidden Quadruple: 2,4,5,8 in r78c56 => r7c5<>3, r78c5<>6");
    }
  });
});
