import { parseGrid } from "../../../../../io/parser";
import { eliminateNakedSubset } from "..";
import { SubsetType } from "..";
import { EliminationImplicationType, EliminationImplicationSubset } from "../../types";
import { eliminationDescription } from "../../../../../io/serializer";

describe("eliminateNakedSubset of level 2", () => {
  it("solves a Naked Pair in a row", () => {
    const grid = parseGrid(
      ":0200:3:7..+8+49.3.+9+2+81+35..64..26+7.+89+6+42+783951+3+97+4+5+1+6+2+8+8+156+9+2+3..+2.+4+5+1+6.+931....+8.6.+5....4.1.::382: ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateNakedSubset(grid, SubsetType.Pair);
      expect(results).toHaveLength(2);

      expect(results[0].technique).toBe("Naked Pair");
      expect(results[0].eliminations).toHaveLength(1);
      expect(results[0].eliminations[0].digit).toBe(3);
      expect(results[0].eliminations[0].coords).toHaveLength(1);
      expect(results[0].eliminations[0].coords).toContainEqual([7, 1]);
      expect(results[0].implication).not.toBeFalsy();
      if (results[0].implication) {
        const implication = results[0].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(2);
        expect(implication.digits).toStrictEqual([3, 9]);
        expect(implication.cells).toHaveLength(2);
        expect(implication.cells).toContainEqual([7, 2]);
        expect(implication.cells).toContainEqual([7, 3]);
      }
      expect(eliminationDescription(results[0])).toBe("Naked Pair: 3,9 in r8c34 => r8c2<>3");

      expect(results[1].technique).toBe("Naked Pair");
      expect(results[1].eliminations).toHaveLength(2);
      expect(results[1].eliminations[0].digit).toBe(2);
      expect(results[1].eliminations[0].coords).toHaveLength(1);
      expect(results[1].eliminations[0].coords).toContainEqual([8, 6]);
      expect(results[1].eliminations[1].digit).toBe(7);
      expect(results[1].eliminations[1].coords).toHaveLength(2);
      expect(results[1].eliminations[1].coords).toContainEqual([8, 1]);
      expect(results[1].eliminations[1].coords).toContainEqual([8, 6]);
      expect(results[1].implication).not.toBeFalsy();
      if (results[1].implication) {
        const implication = results[1].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(2);
        expect(implication.digits).toStrictEqual([2, 7]);
        expect(implication.cells).toHaveLength(2);
        expect(implication.cells).toContainEqual([8, 4]);
        expect(implication.cells).toContainEqual([8, 8]);
      }
      expect(eliminationDescription(results[1])).toBe("Naked Pair: 2,7 in r9c59 => r9c7<>2, r9c27<>7");
    }
  });

  // it("solves a Naked Pair in a column", () => {});

  it("solves a Naked Pair in a box", () => {
    const grid = parseGrid(
      ":0200:89:+6+87..4+52+3+9+5+3..26+1+4+14+2+356+97831...+7+24+6+76....3.+5.+2....+7.1.96..1.+3+22+3.....57.+7.....6+9::844 854 855 864 865 866 944 954 955 964 965 966: ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateNakedSubset(grid, SubsetType.Pair);
      expect(results).toHaveLength(3);

      expect(results[0].technique).toBe("Naked Pair");
      expect(results[0].eliminations).toHaveLength(2);
      expect(results[0].eliminations[0].digit).toBe(8);
      expect(results[0].eliminations[0].coords).toHaveLength(3);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 2]);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 3]);
      expect(results[0].eliminations[0].coords).toContainEqual([4, 4]);
      expect(results[0].eliminations[1].digit).toBe(9);
      expect(results[0].eliminations[1].coords).toHaveLength(3);
      expect(results[0].eliminations[1].coords).toContainEqual([4, 2]);
      expect(results[0].eliminations[1].coords).toContainEqual([4, 3]);
      expect(results[0].eliminations[1].coords).toContainEqual([4, 4]);
      expect(results[0].implication).not.toBeFalsy();
      if (results[0].implication) {
        const implication = results[0].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(2);
        expect(implication.digits).toStrictEqual([8, 9]);
        expect(implication.cells).toHaveLength(2);
        expect(implication.cells).toContainEqual([4, 5]);
        expect(implication.cells).toContainEqual([4, 7]);
      }
      expect(eliminationDescription(results[0])).toBe("Naked Pair: 8,9 in r5c68 => r5c345<>8, r5c345<>9");

      expect(results[1].technique).toBe("Naked Pair");
      expect(results[1].eliminations).toHaveLength(2);
      expect(results[1].eliminations[0].digit).toBe(8);
      expect(results[1].eliminations[0].coords).toHaveLength(2);
      expect(results[1].eliminations[0].coords).toContainEqual([5, 5]);
      expect(results[1].eliminations[0].coords).toContainEqual([8, 5]);
      expect(results[1].eliminations[1].digit).toBe(9);
      expect(results[1].eliminations[1].coords).toHaveLength(1);
      expect(results[1].eliminations[1].coords).toContainEqual([5, 5]);
      expect(results[1].implication).not.toBeFalsy();
      if (results[1].implication) {
        const implication = results[1].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(2);
        expect(implication.digits).toStrictEqual([8, 9]);
        expect(implication.cells).toHaveLength(2);
        expect(implication.cells).toContainEqual([4, 5]);
        expect(implication.cells).toContainEqual([7, 5]);
      }
      expect(eliminationDescription(results[1])).toBe("Naked Pair: 8,9 in r58c6 => r69c6<>8, r6c6<>9");

      expect(results[2].technique).toBe("Naked Pair");
      expect(results[2].eliminations).toHaveLength(2);
      expect(results[2].eliminations[0].digit).toBe(8);
      expect(results[2].eliminations[0].coords).toHaveLength(6);
      expect(results[2].eliminations[0].coords).toContainEqual([3, 3]);
      expect(results[2].eliminations[0].coords).toContainEqual([4, 3]);
      expect(results[2].eliminations[0].coords).toContainEqual([4, 4]);
      expect(results[2].eliminations[0].coords).toContainEqual([5, 3]);
      expect(results[2].eliminations[0].coords).toContainEqual([5, 4]);
      expect(results[2].eliminations[0].coords).toContainEqual([5, 5]);
      expect(results[2].eliminations[1].digit).toBe(9);
      expect(results[2].eliminations[1].coords).toHaveLength(6);
      expect(results[2].eliminations[1].coords).toContainEqual([3, 3]);
      expect(results[2].eliminations[1].coords).toContainEqual([4, 3]);
      expect(results[2].eliminations[1].coords).toContainEqual([4, 4]);
      expect(results[2].eliminations[1].coords).toContainEqual([5, 3]);
      expect(results[2].eliminations[1].coords).toContainEqual([5, 4]);
      expect(results[2].eliminations[1].coords).toContainEqual([5, 5]);
      expect(results[2].implication).not.toBeFalsy();
      if (results[2].implication) {
        const implication = results[2].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(2);
        expect(implication.digits).toStrictEqual([8, 9]);
        expect(implication.cells).toHaveLength(2);
        expect(implication.cells).toContainEqual([3, 4]);
        expect(implication.cells).toContainEqual([4, 5]);
      }
      expect(eliminationDescription(results[2])).toBe(
        "Naked Pair: 8,9 in r4c5,r5c6 => r4c4,r5c45,r6c456<>8, r4c4,r5c45,r6c456<>9",
      );
    }
  });
});

describe("eliminateNakedSubset of level 3", () => {
  // it("solves a Naked Triple in a row", () => {});

  it("solves a Naked Triple in a column", () => {
    const grid = parseGrid(
      ":0201:6:...+2+94+3+8....17+86+4.48.3561....4+8+375.+1...+41+57..5..+62+9+83495+3+7+8+2+4+1612+6+5+4+3+9+78.+4.+9+6+1+2+5+3::612: ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateNakedSubset(grid, SubsetType.Triple);
      expect(results).toHaveLength(1);
      expect(results[0].technique).toBe("Naked Triple");
      expect(results[0].eliminations).toHaveLength(1);
      expect(results[0].eliminations[0].digit).toBe(6);
      expect(results[0].eliminations[0].coords).toHaveLength(1);
      expect(results[0].eliminations[0].coords).toContainEqual([0, 1]);
      expect(results[0].implication).not.toBeFalsy();
      if (results[0].implication) {
        const implication = results[0].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(3);
        expect(implication.digits).toStrictEqual([3, 6, 9]);
        expect(implication.cells).toHaveLength(3);
        expect(implication.cells).toContainEqual([1, 1]);
        expect(implication.cells).toContainEqual([3, 1]);
        expect(implication.cells).toContainEqual([4, 1]);
      }
      expect(eliminationDescription(results[0])).toBe("Naked Triple: 3,6,9 in r245c2 => r1c2<>6");
    }
  });

  it("solves a Naked Triple in a box", () => {
    const grid = parseGrid(
      ":0201:126:39....+7........65.+5.7...349.+4938.+5.6+6.+1.54+9+8+3853...+4..+9..8..1+3+4..294.+86+54.....+2+97::114 116 124 125 126 136 214 216 224 225 226 236 614 616 636: ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateNakedSubset(grid, SubsetType.Triple);
      expect(results).toHaveLength(2);

      expect(results[0].technique).toBe("Naked Triple");
      expect(results[0].eliminations).toHaveLength(3);
      expect(results[0].eliminations[0].digit).toBe(1);
      expect(results[0].eliminations[0].coords).toHaveLength(3);
      expect(results[0].eliminations[0].coords).toContainEqual([1, 3]);
      expect(results[0].eliminations[0].coords).toContainEqual([1, 4]);
      expect(results[0].eliminations[0].coords).toContainEqual([1, 5]);
      expect(results[0].eliminations[1].digit).toBe(2);
      expect(results[0].eliminations[1].coords).toHaveLength(3);
      expect(results[0].eliminations[1].coords).toContainEqual([1, 3]);
      expect(results[0].eliminations[1].coords).toContainEqual([1, 4]);
      expect(results[0].eliminations[1].coords).toContainEqual([1, 5]);
      expect(results[0].eliminations[2].digit).toBe(8);
      expect(results[0].eliminations[2].coords).toHaveLength(2);
      expect(results[0].eliminations[2].coords).toContainEqual([1, 2]);
      expect(results[0].eliminations[2].coords).toContainEqual([1, 5]);
      expect(results[0].implication).not.toBeFalsy();
      if (results[0].implication) {
        const implication = results[0].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(3);
        expect(implication.digits).toStrictEqual([1, 2, 8]);
        expect(implication.cells).toHaveLength(3);
        expect(implication.cells).toContainEqual([1, 0]);
        expect(implication.cells).toContainEqual([1, 1]);
        expect(implication.cells).toContainEqual([1, 8]);
      }
      expect(eliminationDescription(results[0])).toBe(
        "Naked Triple: 1,2,8 in r2c129 => r2c456<>1, r2c456<>2, r2c36<>8",
      );

      expect(results[1].technique).toBe("Naked Triple");
      expect(results[1].eliminations).toHaveLength(3);
      expect(results[1].eliminations[0].digit).toBe(1);
      expect(results[1].eliminations[0].coords).toHaveLength(6);
      expect(results[1].eliminations[0].coords).toContainEqual([0, 3]);
      expect(results[1].eliminations[0].coords).toContainEqual([0, 5]);
      expect(results[1].eliminations[0].coords).toContainEqual([1, 3]);
      expect(results[1].eliminations[0].coords).toContainEqual([1, 4]);
      expect(results[1].eliminations[0].coords).toContainEqual([1, 5]);
      expect(results[1].eliminations[0].coords).toContainEqual([2, 5]);
      expect(results[1].eliminations[1].digit).toBe(2);
      expect(results[1].eliminations[1].coords).toHaveLength(6);
      expect(results[1].eliminations[1].coords).toContainEqual([0, 3]);
      expect(results[1].eliminations[1].coords).toContainEqual([0, 5]);
      expect(results[1].eliminations[1].coords).toContainEqual([1, 3]);
      expect(results[1].eliminations[1].coords).toContainEqual([1, 4]);
      expect(results[1].eliminations[1].coords).toContainEqual([1, 5]);
      expect(results[1].eliminations[1].coords).toContainEqual([2, 5]);
      expect(results[1].eliminations[2].digit).toBe(6);
      expect(results[1].eliminations[2].coords).toHaveLength(3);
      expect(results[1].eliminations[2].coords).toContainEqual([0, 3]);
      expect(results[1].eliminations[2].coords).toContainEqual([0, 5]);
      expect(results[1].eliminations[2].coords).toContainEqual([2, 5]);
      expect(results[1].implication).not.toBeFalsy();
      if (results[1].implication) {
        const implication = results[1].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(3);
        expect(implication.digits).toStrictEqual([1, 2, 6]);
        expect(implication.cells).toHaveLength(3);
        expect(implication.cells).toContainEqual([0, 4]);
        expect(implication.cells).toContainEqual([2, 3]);
        expect(implication.cells).toContainEqual([2, 4]);
      }
      expect(eliminationDescription(results[1])).toBe(
        "Naked Triple: 1,2,6 in r1c5,r3c45 => r1c46,r2c456,r3c6<>1, r1c46,r2c456,r3c6<>2, r1c46,r3c6<>6",
      );
    }
  });
});

describe("eliminateNakedSubset of level 4", () => {
  it("solves a Naked Quadruple in a row", () => {
    const grid = parseGrid(
      ":0202:389:.+1.+7+2.+56+3.+5+6.3.+247+7325+4+6+1+8+96+9+3+2+87+4+152+47+61+59+38+581+3+94........2...........1..587....::387 887 988: ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateNakedSubset(grid, SubsetType.Quadruple);
      expect(results).toHaveLength(1);
      expect(results[0].technique).toBe("Naked Quadruple");
      expect(results[0].eliminations).toHaveLength(3);
      expect(results[0].eliminations[0].digit).toBe(3);
      expect(results[0].eliminations[0].coords).toHaveLength(1);
      expect(results[0].eliminations[0].coords).toContainEqual([7, 6]);
      expect(results[0].eliminations[1].digit).toBe(8);
      expect(results[0].eliminations[1].coords).toHaveLength(1);
      expect(results[0].eliminations[1].coords).toContainEqual([7, 6]);
      expect(results[0].eliminations[2].digit).toBe(9);
      expect(results[0].eliminations[2].coords).toHaveLength(1);
      expect(results[0].eliminations[2].coords).toContainEqual([7, 7]);
      expect(results[0].implication).not.toBeFalsy();
      if (results[0].implication) {
        const implication = results[0].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(4);
        expect(implication.digits).toStrictEqual([3, 4, 8, 9]);
        expect(implication.cells).toHaveLength(4);
        expect(implication.cells).toContainEqual([7, 0]);
        expect(implication.cells).toContainEqual([7, 2]);
        expect(implication.cells).toContainEqual([7, 3]);
        expect(implication.cells).toContainEqual([7, 5]);
      }
      expect(eliminationDescription(results[0])).toBe(
        "Naked Quadruple: 3,4,8,9 in r8c1346 => r8c7<>3, r8c7<>8, r8c8<>9",
      );
    }
  });

  // it("solves a Naked Quadruple in a column", () => {});

  it("solves a Naked Quadruple in a box", () => {
    const grid = parseGrid(
      ":0202:469:+53+2+78+6...9+78+241.+6...19+5+32+87.254..6+7...3+617.5+27..+5........+1........+8.51.6...3...98::471 472 481 491 492 671 672 691 692 972: ",
      true,
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const results = eliminateNakedSubset(grid, SubsetType.Quadruple);
      expect(results).toHaveLength(1);
      expect(results[0].technique).toBe("Naked Quadruple");
      expect(results[0].eliminations).toHaveLength(3);
      expect(results[0].eliminations[0].digit).toBe(4);
      expect(results[0].eliminations[0].coords).toHaveLength(5);
      expect(results[0].eliminations[0].coords).toContainEqual([6, 0]);
      expect(results[0].eliminations[0].coords).toContainEqual([6, 1]);
      expect(results[0].eliminations[0].coords).toContainEqual([7, 0]);
      expect(results[0].eliminations[0].coords).toContainEqual([8, 0]);
      expect(results[0].eliminations[0].coords).toContainEqual([8, 1]);
      expect(results[0].eliminations[1].digit).toBe(6);
      expect(results[0].eliminations[1].coords).toHaveLength(4);
      expect(results[0].eliminations[1].coords).toContainEqual([6, 0]);
      expect(results[0].eliminations[1].coords).toContainEqual([6, 1]);
      expect(results[0].eliminations[1].coords).toContainEqual([8, 0]);
      expect(results[0].eliminations[1].coords).toContainEqual([8, 1]);
      expect(results[0].eliminations[2].digit).toBe(9);
      expect(results[0].eliminations[2].coords).toHaveLength(1);
      expect(results[0].eliminations[2].coords).toContainEqual([6, 1]);
      expect(results[0].implication).not.toBeFalsy();
      if (results[0].implication) {
        const implication = results[0].implication as EliminationImplicationSubset;
        expect(implication.type).toBe(EliminationImplicationType.Subset);
        expect(implication.digits).toHaveLength(4);
        expect(implication.digits).toStrictEqual([4, 6, 7, 9]);
        expect(implication.cells).toHaveLength(4);
        expect(implication.cells).toContainEqual([6, 2]);
        expect(implication.cells).toContainEqual([7, 2]);
        expect(implication.cells).toContainEqual([8, 2]);
        expect(implication.cells).toContainEqual([7, 1]);
      }
      expect(eliminationDescription(results[0])).toBe(
        "Naked Quadruple: 4,6,7,9 in r79c3,r8c23 => r79c12,r8c1<>4, r79c12<>6, r7c2<>9",
      );
    }
  });
});
