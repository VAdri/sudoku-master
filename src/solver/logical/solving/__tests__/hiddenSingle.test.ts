import { parseGrid } from "../../../../io/parser";
import { solveHiddenSingle } from "..";

describe("solveHiddenSingle", () => {
  it("solves a hidden single in a row", () => {
    const grid = parseGrid(
      ":0002::.+28..7....16.83.+7.....+2.+8511+3729.......+7+3........463.729..+7.......86.14....3..7..::: ",
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedHiddenSingle = solveHiddenSingle(grid);
      expect(solvedHiddenSingle).toHaveLength(1);
      if (solvedHiddenSingle[0]) {
        expect(solvedHiddenSingle[0].technique).toBe("Hidden Single");
        expect(solvedHiddenSingle[0].coord).toStrictEqual([2, 3]);
        expect(solvedHiddenSingle[0].digit).toBe(6);
      }
    }
  });

  // it("solves a hidden single in a column", () => {});

  // it("solves a hidden single in a box", () => {});

  it("solves a hidden single only once", () => {
    const grid = parseGrid(
      ":0002::..2193........7...7...4..198.3...6...45...23...7...5.437..8...6...6........5341..::: ",
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedHiddenSingle = solveHiddenSingle(grid, 0, Infinity);
      expect(solvedHiddenSingle).toHaveLength(4);
      expect(solvedHiddenSingle.filter(solving => solving.coord[0] === 5 && solving.coord[1])).toHaveLength(1)
      if (solvedHiddenSingle[1]) {
        expect(solvedHiddenSingle[1].technique).toBe("Hidden Single");
        expect(solvedHiddenSingle[1].coord).toStrictEqual([5, 3]);
        expect(solvedHiddenSingle[1].digit).toBe(3);
      }
    }
  });
});
