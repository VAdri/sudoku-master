import { parseGrid } from "../../../../io/parser";
import { solvingDescription } from "../../../../io/serializer";
import { solveFullHouse } from "../fullHouse";

describe("solveFullHouse", () => {
  it("solves a full house in a row", () => {
    const grid = parseGrid(
      ":0000::2.7.......8..9.....3.6..8....8.649..6+927853.4..132.5....9..1.2.....4..9.......4.8:::",
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedFullHouse = solveFullHouse(grid);
      expect(solvedFullHouse).toHaveLength(1);
      if (solvedFullHouse[0]) {
        expect(solvedFullHouse[0].technique).toBe("Full House");
        expect(solvedFullHouse[0].coord).toStrictEqual([4, 7]);
        expect(solvedFullHouse[0].digit).toBe(1);
      }
    }
  });

  it("solves a full house in a column", () => {
    const grid = parseGrid("000010000 000020000 000030000 000040000 000050000 000060000 000070000 000080000 000000000");
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedFullHouse = solveFullHouse(grid);
      expect(solvedFullHouse).toHaveLength(1);
      if (solvedFullHouse[0]) {
        expect(solvedFullHouse[0].technique).toBe("Full House");
        expect(solvedFullHouse[0].coord).toStrictEqual([8, 4]);
        expect(solvedFullHouse[0].digit).toBe(9);
      }
    }
  });

  it("solves a full house in a box", () => {
    const grid = parseGrid(
      ":0000::8..+7+39..637.+465....4.1+82..9...+6...4..54+3..61..6.+5.....4..8+53.7....27+1.641..9+4...2:::",
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedFullHouse = solveFullHouse(grid);
      expect(solvedFullHouse).toHaveLength(1);
      if (solvedFullHouse[0]) {
        expect(solvedFullHouse[0].technique).toBe("Full House");
        expect(solvedFullHouse[0].coord).toStrictEqual([8, 5]);
        expect(solvedFullHouse[0].digit).toBe(6);
      }
    }
  });

  it("doesn't solve without full house", () => {
    const grid = parseGrid("963.1.....7.3..........27..7.9.6..........5...3.....9.....3...25...86..3....71846 ");
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedFullHouse = solveFullHouse(grid);
      expect(solvedFullHouse).toHaveLength(0);
    }
  });
});

describe("solveFullHouse with skip or take", () => {
  it("skips a full house when requested", () => {
    const grid = parseGrid("000012000 000023000 000034000 000045000 000056000 000067000 000078000 000089000 000000000");
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedFullHouse = solveFullHouse(grid, 1);
      expect(solvedFullHouse).toHaveLength(1);
      if (solvedFullHouse[0]) {
        expect(solvedFullHouse[0].technique).toBe("Full House");
        expect(solvedFullHouse[0].coord).toStrictEqual([8, 5]);
        expect(solvedFullHouse[0].digit).toBe(1);
      }
    }
  });

  it("takes multiple full house when requested", () => {
    const grid = parseGrid("000012000 000023000 000034000 000045000 000056000 000067000 000078000 000089000 000000000");
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedFullHouse = solveFullHouse(grid, 0, 2);
      expect(solvedFullHouse).toHaveLength(2);
      if (solvedFullHouse[0] && solvedFullHouse[1]) {
        expect(solvedFullHouse[0].technique).toBe("Full House");
        expect(solvedFullHouse[0].coord).toStrictEqual([8, 4]);
        expect(solvedFullHouse[0].digit).toBe(9);
        expect(solvingDescription(solvedFullHouse[0])).toBe("Full House: r9c5=9");

        expect(solvedFullHouse[1].technique).toBe("Full House");
        expect(solvedFullHouse[1].coord).toStrictEqual([8, 5]);
        expect(solvedFullHouse[1].digit).toBe(1);
        expect(solvingDescription(solvedFullHouse[1])).toBe("Full House: r9c6=1");
      }
    }
  });

  it("doesn't solve when all solved results are skipped", () => {
    const grid = parseGrid("000012000 000023000 000034000 000045000 000056000 000067000 000078000 000089000 000000000");
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedFullHouse = solveFullHouse(grid, 2);
      expect(solvedFullHouse).toHaveLength(0);
    }
  });
});
