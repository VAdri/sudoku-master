import { eliminateBasicFish } from "..";
import { SubsetType } from "../../subset";
import { EliminationImplicationFish, EliminationImplicationType } from "../../types";
import { parseGrid } from "../../../../../io/parser";
import { eliminationDescription } from "../../../../../io/serializer";

describe("eliminateBasicFish of level 2", () => {
  it("solves an X-Wing in a row", () => {
    const grid = parseGrid(
      ":0300:5:.+4+1+7+2+9.+3.76+9..3+4.2.+3264.+7+194.39..+17.+6.+7..49.3+1+95+3+7..2+4+21+456+7+3+9+837+6.9.+541+9+5+8+4+3+1+26+7::545:r25 c58 ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateBasicFish(grid, SubsetType.Pair);
      expect(results).toHaveLength(1);

      expect(results[0].technique).toBe("X-Wing");
      expect(results[0].eliminations).toHaveLength(1);
      expect(results[0].eliminations[0].digit).toBe(5);
      expect(results[0].eliminations[0].coords).toHaveLength(1);
      expect(results[0].eliminations[0].coords).toContainEqual([3, 4]);
      expect(results[0].implication).not.toBeFalsy();
      if (results[0].implication) {
        const implication = results[0].implication as EliminationImplicationFish;
        expect(implication.type).toBe(EliminationImplicationType.Fish);
        expect(implication.line).toBe("row");
        expect(implication.digit).toBe(5);
        expect(implication.baseSet).toStrictEqual([1, 4]);
        expect(implication.coverSet).toStrictEqual([4, 7]);
      }
      expect(eliminationDescription(results[0])).toBe("X-Wing: 5 r25 c58 => r4c5<>5");
    }
  });

  it("solves an X-Wing in a column", () => {
    const grid = parseGrid(
      ":0300:1:9+8..627+5+3.+65..3...+3+2+7.+5...67+9..3.+5...+5...9...8+32.45..9+6+735+91+428+24+9.+8+7..5+51+8.+2...+7::124 127 128 129 153 154 157 158 159:c15 r25 ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateBasicFish(grid, SubsetType.Pair);
      expect(results).toHaveLength(1);

      expect(results[0].technique).toBe("X-Wing");
      expect(results[0].eliminations).toHaveLength(1);
      expect(results[0].eliminations[0].digit).toBe(1);
      expect(results[0].eliminations[0].coords).toHaveLength(9);
      expect(results[0].eliminations[0].coords).toContainEqual([1, 3]);
      expect(results[0].eliminations[0].coords).toContainEqual([1, 6]);
      expect(results[0].eliminations[0].coords).toContainEqual([1, 7]);
      expect(results[0].eliminations[0].coords).toContainEqual([1, 8]);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 2]);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 3]);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 6]);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 7]);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 8]);
      expect(results[0].implication).not.toBeFalsy();
      if (results[0].implication) {
        const implication = results[0].implication as EliminationImplicationFish;
        expect(implication.type).toBe(EliminationImplicationType.Fish);
        expect(implication.line).toBe("col");
        expect(implication.digit).toBe(1);
        expect(implication.baseSet).toStrictEqual([0, 4]);
        expect(implication.coverSet).toStrictEqual([1, 4]);
      }
      expect(eliminationDescription(results[0])).toBe("X-Wing: 1 c15 r25 => r2c4789,r5c34789<>1");
    }
  });
});

describe("eliminateBasicFish of level 3", () => {
  it("solves a Swordfish in a row", () => {
    const grid = parseGrid(
      ":0301:2:16.54+3.7..+78+6.1+43+5+43+58.+7+6.+17+2.+45+8.696..9+12.57...+3+7+6..+4.+1+6.3..4.+3...+8..16..+71645.+3::268 271:r239 c158 ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateBasicFish(grid, SubsetType.Triple);
      expect(results).toHaveLength(2);

      expect(results[0].technique).toBe("Swordfish");
      expect(results[0].eliminations).toHaveLength(1);
      expect(results[0].eliminations[0].digit).toBe(2);
      expect(results[0].eliminations[0].coords).toHaveLength(2);
      expect(results[0].eliminations[0].coords).toContainEqual([5, 7]);
      expect(results[0].eliminations[0].coords).toContainEqual([6, 0]);
      expect(results[0].implication).not.toBeFalsy();
      if (results[0].implication) {
        const implication = results[0].implication as EliminationImplicationFish;
        expect(implication.type).toBe(EliminationImplicationType.Fish);
        expect(implication.line).toBe("row");
        expect(implication.digit).toBe(2);
        expect(implication.baseSet).toStrictEqual([1, 2, 8]);
        expect(implication.coverSet).toStrictEqual([0, 4, 7]);
      }
      expect(eliminationDescription(results[0])).toBe("Swordfish: 2 r239 c158 => r6c8,r7c1<>2");
    }
  });

  // it("solves a Swordfish in a column", () => {});
});

describe("eliminateBasicFish of level 4", () => {
  it("solves a Jellyfish in a row", () => {
    const grid = parseGrid(
      ":0302:7:2.......3.8..3..5...34.21....12.54......9......93.86....25.69...9..2..7.4.......1::712 715 721 729 751 752 759 792 795:r3467 c1259 ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateBasicFish(grid, SubsetType.Quadruple);
      expect(results).toHaveLength(2);

      expect(results[0].technique).toBe("Jellyfish");
      expect(results[0].eliminations).toHaveLength(1);
      expect(results[0].eliminations[0].digit).toBe(7);
      expect(results[0].eliminations[0].coords).toHaveLength(9);
      expect(results[0].eliminations[0].coords).toContainEqual([0, 1]);
      expect(results[0].eliminations[0].coords).toContainEqual([0, 4]);
      expect(results[0].eliminations[0].coords).toContainEqual([1, 0]);
      expect(results[0].eliminations[0].coords).toContainEqual([1, 8]);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 0]);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 1]);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 8]);
      expect(results[0].eliminations[0].coords).toContainEqual([8, 1]);
      expect(results[0].eliminations[0].coords).toContainEqual([8, 4]);
      expect(results[0].implication).not.toBeFalsy();
      if (results[0].implication) {
        const implication = results[0].implication as EliminationImplicationFish;
        expect(implication.type).toBe(EliminationImplicationType.Fish);
        expect(implication.line).toBe("row");
        expect(implication.digit).toBe(7);
        expect(implication.baseSet).toStrictEqual([2, 3, 5, 6]);
        expect(implication.coverSet).toStrictEqual([0, 1, 4, 8]);
      }
      expect(eliminationDescription(results[0])).toBe("Jellyfish: 7 r3467 c1259 => r19c25,r2c19,r5c129<>7");
    }
  });

  // it("solves a Jellyfish in a column", () => {});
});
