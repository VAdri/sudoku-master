import { parseGrid } from "../../../io/parser";
import { findDigitCells } from "../findDigitCells";

describe("findDigitCells", () => {
  it("returns all the cells of the digits", () => {
    const grid = parseGrid(
      ":0000::2.7.......8..9.....3.6..8....8.649..6+927853.4..132.5....9..1.2.....4..9.......4.8:::",
    );
    expect(grid).not.toBeFalsy();
    if (grid) {
      const digitCells1 = findDigitCells(grid.digits, 1);
      expect(digitCells1).toHaveLength(2);
      expect(digitCells1).toStrictEqual([47, 59]);
      const digitCells2 = findDigitCells(grid.digits, 2);
      expect(digitCells2).toHaveLength(4);
      expect(digitCells2).toStrictEqual([0, 38, 49, 61]);
      const digitCells3 = findDigitCells(grid.digits, 3);
      expect(digitCells3).toHaveLength(3);
      expect(digitCells3).toStrictEqual([19, 42, 48]);
      const digitCells4 = findDigitCells(grid.digits, 4);
      expect(digitCells4).toHaveLength(4);
      expect(digitCells4).toStrictEqual([32, 44, 67, 78]);
      const digitCells5 = findDigitCells(grid.digits, 5);
      expect(digitCells5).toHaveLength(2);
      expect(digitCells5).toStrictEqual([41, 51]);
      const digitCells6 = findDigitCells(grid.digits, 6);
      expect(digitCells6).toHaveLength(3);
      expect(digitCells6).toStrictEqual([21, 31, 36]);
      const digitCells7 = findDigitCells(grid.digits, 7);
      expect(digitCells7).toHaveLength(2);
      expect(digitCells7).toStrictEqual([2, 39]);
      const digitCells8 = findDigitCells(grid.digits, 8);
      expect(digitCells8).toHaveLength(5);
      expect(digitCells8).toStrictEqual([10, 24, 29, 40, 80]);
      const digitCells9 = findDigitCells(grid.digits, 9);
      expect(digitCells9).toHaveLength(5);
      expect(digitCells9).toStrictEqual([13, 33, 37, 56, 70]);
    }
  });

  it("returns no cell when the digit is not placed anywhere", () => {
    const grid = parseGrid("963.......7.3..........27..7.9.6..........5...3.....9.....3...25...86..3....7.846 ");
    expect(grid).not.toBeFalsy();
    if (grid) {
      const digitCells = findDigitCells(grid.digits, 1);
      expect(digitCells).toHaveLength(0);
    }
  });

  it("returns 9 cells when the digit is fully placed", () => {
    const grid = parseGrid("000900700805107369769008005030074800080000017007001050008710600004050072370000000");
    expect(grid).not.toBeFalsy();
    if (grid) {
      const digitCells = findDigitCells(grid.digits, 7);
      expect(digitCells).toHaveLength(9);
      expect(digitCells).toStrictEqual([6, 14, 18, 31, 44, 47, 57, 70, 73]);
    }
  });
});
