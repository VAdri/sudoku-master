import { parseGrid } from "../../../../io/parser";
import { solveLastDigit } from "../lastDigit";

describe("solveLastDigit", () => {
  it("solves the last digit in a grid", () => {
    const grid = parseGrid("000900700805107369769008005030074800080000017007001050008710600004050002370000000");
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedLastDigit = solveLastDigit(grid);
      expect(solvedLastDigit).toHaveLength(1);
      if (solvedLastDigit[0]) {
        expect(solvedLastDigit[0].technique).toBe("Last Digit");
        expect(solvedLastDigit[0].coord).toStrictEqual([7, 7]);
        expect(solvedLastDigit[0].digit).toBe(7);
      }
    }
  });

  it("doesn't solve without last digit", () => {
    const grid = parseGrid("963.1.....7.3..........27..7.9.6..........5...3.....9.....3...25...86..3....71846 ");
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedLastDigit = solveLastDigit(grid);
      expect(solvedLastDigit).toHaveLength(0);
    }
  });

  it("skips a last digit when requested", () => {
    const grid = parseGrid(`
      120000000
      012000000
      001200000
      000120000
      000000000
      000001200
      000000120
      000000012
      200000001`);
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedLastDigit = solveLastDigit(grid, 1);
      expect(solvedLastDigit).toHaveLength(1);
      if (solvedLastDigit[0]) {
        expect(solvedLastDigit[0].technique).toBe("Last Digit");
        expect(solvedLastDigit[0].coord).toStrictEqual([4, 5]);
        expect(solvedLastDigit[0].digit).toBe(2);
      }
    }
  });

  it("takes multiple last digit when requested", () => {
    const grid = parseGrid(`
      120000000
      012000000
      001200000
      000120000
      000000000
      000001200
      000000120
      000000012
      200000001`);
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedLastDigit = solveLastDigit(grid, 0, 2);
      expect(solvedLastDigit).toHaveLength(2);
      if (solvedLastDigit[0] && solvedLastDigit[1]) {
        expect(solvedLastDigit[0].technique).toBe("Last Digit");
        expect(solvedLastDigit[0].coord).toStrictEqual([4, 4]);
        expect(solvedLastDigit[0].digit).toBe(1);
        expect(solvedLastDigit[1].technique).toBe("Last Digit");
        expect(solvedLastDigit[1].coord).toStrictEqual([4, 5]);
        expect(solvedLastDigit[1].digit).toBe(2);
      }
    }
  });
});
