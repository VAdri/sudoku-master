import { parseGrid } from "../../../../io/parser";
import { solveNakedSingle } from "../nakedSingle";

describe("nakedSingle", () => {
  it("solves a naked single", () => {
    const grid = parseGrid(
      ":0003::4+127+36+5+8+9......+1.656+8.1.+37....+85.21.1.......8.87.9.....3..7.+8658...........9.84.1:653 558 661 582 782 982 583 983:: ",
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedNakedSingle = solveNakedSingle(grid);
      expect(solvedNakedSingle).toHaveLength(1);
      if (solvedNakedSingle[0]) {
        expect(solvedNakedSingle[0].technique).toBe("Naked Single");
        expect(solvedNakedSingle[0].coord).toStrictEqual([5, 6]);
        expect(solvedNakedSingle[0].digit).toBe(6);
      }
    }
  });

  it("doesn't solve without naked single", () => {
    const grid = parseGrid(
      ":0100:5:984........+25...4...+1+9.+4..2..6.972+3...3+6.2...+2.+9.+3+5+61.+1+95+76+8+4+234+27+35189+6+63+8..97+5+1::537: ",
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedNakedSingle = solveNakedSingle(grid);
      expect(solvedNakedSingle).toHaveLength(0);
    }
  });

  it("skips a naked single when requested", () => {
    const grid = parseGrid(`
      1..2....4
      .9.5.367.
      .4..7....
      .1.....59
      ..2...3..
      97.....2.
      ....1..6.
      .853.9.1.
      4....6..5`);
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedNakedSingle = solveNakedSingle(grid, 1);
      expect(solvedNakedSingle).toHaveLength(1);
      if (solvedNakedSingle[0]) {
        expect(solvedNakedSingle[0].technique).toBe("Naked Single");
        expect(solvedNakedSingle[0].coord).toStrictEqual([1, 2]);
        expect(solvedNakedSingle[0].digit).toBe(8);
      }
    }
  });

  it("takes multiple naked single when requested", () => {
    const grid = parseGrid(`
      1..2....4
      .9.5.367.
      .4..7....
      .1.....59
      ..2...3..
      97.....2.
      ....1..6.
      .853.9.1.
      4....6..5`);
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedNakedSingle = solveNakedSingle(grid, 0, 2);
      expect(solvedNakedSingle).toHaveLength(2);
      if (solvedNakedSingle[0] && solvedNakedSingle[1]) {
        expect(solvedNakedSingle[0].technique).toBe("Naked Single");
        expect(solvedNakedSingle[0].coord).toStrictEqual([0, 5]);
        expect(solvedNakedSingle[0].digit).toBe(8);
        expect(solvedNakedSingle[1].technique).toBe("Naked Single");
        expect(solvedNakedSingle[1].coord).toStrictEqual([1, 2]);
        expect(solvedNakedSingle[1].digit).toBe(8);
      }
    }
  });

  it("doesn't solve when all solved results are skipped", () => {
    const grid = parseGrid(`
      1..2....4
      .9.5.367.
      .4..7....
      .1.....59
      ..2...3..
      97.....2.
      ....1..6.
      .853.9.1.
      4....6..5`);
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedNakedSingle = solveNakedSingle(grid, 2);
      expect(solvedNakedSingle).toHaveLength(0);
    }
  });
});
