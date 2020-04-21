import { parseGrid } from "../../../../../io/parser";
import { eliminateNakedSubset, SubsetType } from "../../subset";
import { EliminationImplicationSubset, EliminationImplicationType } from "../../types";
import { eliminationDescription } from "../../../../../io/serializer";

describe("eliminateNakedSubset with Locked Pair", () => {
  it("solves a Locked Pair in a row and a box", () => {
    const grid = parseGrid(
      ":0110:2:.5.+1346...+9.+6+5+2+1+38.3.879.+4.+215..+3..6.+8.26+1+35.+3+6..+8+592+1.4..27.13.73..+6....+2.+3.87+6.::219 233: ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateNakedSubset(grid, SubsetType.Pair);
      expect(results).toHaveLength(5);

      expect(results[1].technique).toBe("Locked Pair");
      expect(results[1].eliminations).toHaveLength(1);
      expect(results[1].eliminations[0].digit).toBe(2);
      expect(results[1].eliminations[0].coords).toHaveLength(2);
      expect(results[1].eliminations[0].coords).toContainEqual([0, 8]);
      expect(results[1].eliminations[0].coords).toContainEqual([2, 2]);
      expect(results[1].implication).not.toBeFalsy();
      if (results[1].implication) {
        const implication = results[1].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(2);
        expect(implication.digits).toStrictEqual([2, 5]);
        expect(implication.cells).toHaveLength(2);
        expect(implication.cells).toContainEqual([2, 6]);
        expect(implication.cells).toContainEqual([2, 8]);
      }
      expect(eliminationDescription(results[1])).toBe("Locked Pair: 2,5 in r3c79 => r1c9,r3c3<>2");
    }
  });

  // it("solves a Locked Pair in a column and a box", () => {});
});

describe("eliminateNakedSubset with Locked Triple", () => {
  it("solves a Locked Triple in a row and a box", () => {
    const grid = parseGrid(
      ":0111:567:4..5..37.32......4.6.......8....2.3.21.84...........9..7..9.1..+94.651.......7....::547 549 553 556 567 569 647 649 653 656 667 669 747 749 753 756 767 769: ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateNakedSubset(grid, SubsetType.Triple);
      expect(results).toHaveLength(2);

      expect(results[0].technique).toBe("Locked Triple");
      expect(results[0].eliminations).toHaveLength(3);
      expect(results[0].eliminations[0].digit).toBe(5);
      expect(results[0].eliminations[0].coords).toHaveLength(6);
      expect(results[0].eliminations[0].coords).toContainEqual([3, 6]);
      expect(results[0].eliminations[0].coords).toContainEqual([3, 8]);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 2]);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 5]);
      expect(results[0].eliminations[0].coords).toContainEqual([5, 6]);
      expect(results[0].eliminations[0].coords).toContainEqual([5, 8]);
      expect(results[0].eliminations[1].digit).toBe(6);
      expect(results[0].eliminations[1].coords).toHaveLength(6);
      expect(results[0].eliminations[0].coords).toContainEqual([3, 6]);
      expect(results[0].eliminations[0].coords).toContainEqual([3, 8]);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 2]);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 5]);
      expect(results[0].eliminations[0].coords).toContainEqual([5, 6]);
      expect(results[0].eliminations[0].coords).toContainEqual([5, 8]);
      expect(results[0].eliminations[2].digit).toBe(7);
      expect(results[0].eliminations[2].coords).toHaveLength(6);
      expect(results[0].eliminations[0].coords).toContainEqual([3, 6]);
      expect(results[0].eliminations[0].coords).toContainEqual([3, 8]);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 2]);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 5]);
      expect(results[0].eliminations[0].coords).toContainEqual([5, 6]);
      expect(results[0].eliminations[0].coords).toContainEqual([5, 8]);
      expect(results[0].implication).not.toBeFalsy();
      if (results[0].implication) {
        const implication = results[0].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(3);
        expect(implication.digits).toStrictEqual([5, 6, 7]);
        expect(implication.cells).toHaveLength(3);
        expect(implication.cells).toContainEqual([4, 6]);
        expect(implication.cells).toContainEqual([4, 7]);
        expect(implication.cells).toContainEqual([4, 8]);
      }
      expect(eliminationDescription(results[0])).toBe(
        "Locked Triple: 5,6,7 in r5c789 => r46c79,r5c36<>5, r46c79,r5c36<>6, r46c79,r5c36<>7",
      );
    }
  });

  it("solves a Locked Triple in a column and a box", () => {
    const grid = parseGrid(
      ":0111:9:..+2.5+4.3774+3...8.+5..+5+73.+2..5+71...+4+89+4+96+5+87+123+238+419+5+7+6.+5.6....2.....235..+29..+5...::925 984: ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateNakedSubset(grid, SubsetType.Triple);
      expect(results).toHaveLength(3);

      expect(results[1].technique).toBe("Locked Triple");
      expect(results[1].eliminations).toHaveLength(1);
      expect(results[1].eliminations[0].digit).toBe(9);
      expect(results[1].eliminations[0].coords).toHaveLength(2);
      expect(results[1].eliminations[0].coords).toContainEqual([1, 4]);
      expect(results[1].eliminations[0].coords).toContainEqual([7, 3]);
      expect(results[1].implication).not.toBeFalsy();
      if (results[1].implication) {
        const implication = results[1].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(3);
        expect(implication.digits).toStrictEqual([4, 7, 9]);
        expect(implication.cells).toHaveLength(3);
        expect(implication.cells).toContainEqual([6, 4]);
        expect(implication.cells).toContainEqual([7, 4]);
        expect(implication.cells).toContainEqual([8, 4]);
      }
      expect(eliminationDescription(results[1])).toBe("Locked Triple: 4,7,9 in r789c5 => r2c5,r8c4<>9");
    }
  });
});
