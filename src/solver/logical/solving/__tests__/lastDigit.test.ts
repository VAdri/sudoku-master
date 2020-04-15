import { parseGrid } from "../../../../io/parser";
import { solveLastDigit } from "../lastDigit";

describe("solveLastDigit", () => {
  it("solves the last digit in a grid", () => {
    const grid = parseGrid("000900700805107369769008005030074800080000017007001050008710600004050002370000000");
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedLastDigit = solveLastDigit(grid);
      expect(solvedLastDigit).not.toBeFalsy();
      if (solvedLastDigit) {
        expect(solvedLastDigit.technique).toBe("Last Digit");
        expect(solvedLastDigit.coord).toStrictEqual([7, 7]);
        expect(solvedLastDigit.digit).toBe(7);
      }
    }
  });

  it("doesn't solve without last digit", () => {
    const grid = parseGrid("963.1.....7.3..........27..7.9.6..........5...3.....9.....3...25...86..3....71846 ");
    expect(grid).not.toBeFalsy();
    if (grid) {
      const solvedLastDigit = solveLastDigit(grid);
      expect(solvedLastDigit).toBeUndefined();
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
      expect(solvedLastDigit).not.toBeFalsy();
      if (solvedLastDigit) {
        expect(solvedLastDigit.technique).toBe("Last Digit");
        expect(solvedLastDigit.coord).toStrictEqual([4, 5]);
        expect(solvedLastDigit.digit).toBe(2);
      }
    }
  });
});
