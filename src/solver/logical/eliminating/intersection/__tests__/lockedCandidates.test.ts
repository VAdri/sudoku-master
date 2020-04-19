import { parseGrid } from "../../../../../io/parser";
import { eliminationDescription } from "../../../../../io/serializer";
import { eliminateLockedCandidates } from "..";
import { getCandidates } from "../../../../../utils/candidate";

describe("eliminateLockedCandidates", () => {
  it("eliminates locked candidates type 1 in a row", () => {
    const grid = parseGrid(
      ":0100:5:984........+25...4...+1+9.+4..2..6.972+3...3+6.2...+2.+9.+3+5+61.+1+95+76+8+4+234+27+35189+6+63+8..97+5+1::537: ",
    );
    expect(grid).toBeTruthy();
    if (grid) {
      const result = eliminateLockedCandidates({ digits: grid.digits, candidates: getCandidates(grid.digits) });
      expect(result).toHaveLength(4);
      expect(result[0].technique).toBe("Locked Candidates Type 1 (Pointing)");
      expect(result[0].eliminations).toHaveLength(1);
      expect(result[0].eliminations[0].digit).toBe(5);
      expect(result[0].eliminations[0].coords).toHaveLength(1);
      expect(result[0].eliminations[0].coords[0]).toStrictEqual([2, 6]);
      expect(eliminationDescription(result[0])).toBe("Locked Candidates Type 1 (Pointing): 5 in b1 => r3c7<>5");
    }
  });

  it("eliminates locked candidates type 1 in a column", () => {
    const grid = parseGrid("2.....1..14..2..83..3.1.5.............67...5.8.92.13.......32....18.2.3....16..94");
    expect(grid).toBeTruthy();
    if (grid) {
      const result = eliminateLockedCandidates({ digits: grid.digits, candidates: getCandidates(grid.digits) });
      expect(result).toHaveLength(4);
      expect(result[0].technique).toBe("Locked Candidates Type 1 (Pointing)");
      expect(result[0].eliminations).toHaveLength(1);
      expect(result[0].eliminations[0].digit).toBe(4);
      expect(result[0].eliminations[0].coords).toHaveLength(2);
      expect(result[0].eliminations[0].coords).toContainEqual([3, 7]);
      expect(result[0].eliminations[0].coords).toContainEqual([5, 7]);
      expect(eliminationDescription(result[0])).toBe("Locked Candidates Type 1 (Pointing): 4 in b3 => r46c8<>4");
    }
  });

  it("eliminates locked candidates type 2 in a row", () => {
    const grid = parseGrid(
      ":0101:7:+31+8..+54.+6...6.3+8+1...6.8.+5.38+6+495+21+3+7+12+34+7+6+958795+3+1+8+2+6+4.+3.5..7+8......7+3.+5....3+9641::732: ",
    );
    expect(grid).toBeTruthy();
    if (grid) {
      const result = eliminateLockedCandidates({ digits: grid.digits, candidates: getCandidates(grid.digits) });
      expect(result).toHaveLength(1);
      expect(result[0].technique).toBe("Locked Candidates Type 2 (Claiming)");
      expect(result[0].eliminations).toHaveLength(1);
      expect(result[0].eliminations[0].digit).toBe(7);
      expect(result[0].eliminations[0].coords).toHaveLength(1);
      expect(result[0].eliminations[0].coords[0]).toStrictEqual([2, 1]);
      expect(eliminationDescription(result[0])).toBe("Locked Candidates Type 2 (Claiming): 7 in r2 => r3c2<>7");
    }
  });

  it("eliminates locked candidates type 2 in a column", () => {
    const grid = parseGrid(
      ":0101:4:+762..8..19+8......6+1+5.....8+7478..+3+1+6+9+5+2+6..9+873+3+1+9+8..42+5+8+35..1+6+9+2+2+9768+53+1+4+6+4+1+9327+58::414 415 424 425 434 435: ",
    );
    expect(grid).toBeTruthy();
    if (grid) {
      const result = eliminateLockedCandidates({ digits: grid.digits, candidates: getCandidates(grid.digits) });
      expect(result).toHaveLength(1);
      expect(result[0].technique).toBe("Locked Candidates Type 2 (Claiming)");
      expect(result[0].eliminations).toHaveLength(1);
      expect(result[0].eliminations[0].digit).toBe(4);
      expect(result[0].eliminations[0].coords).toHaveLength(6);
      expect(result[0].eliminations[0].coords).toContainEqual([0, 3]);
      expect(result[0].eliminations[0].coords).toContainEqual([0, 4]);
      expect(result[0].eliminations[0].coords).toContainEqual([1, 3]);
      expect(result[0].eliminations[0].coords).toContainEqual([1, 4]);
      expect(result[0].eliminations[0].coords).toContainEqual([2, 3]);
      expect(result[0].eliminations[0].coords).toContainEqual([2, 4]);
      expect(eliminationDescription(result[0])).toBe("Locked Candidates Type 2 (Claiming): 4 in c6 => r123c45<>4");
    }
  });
});
