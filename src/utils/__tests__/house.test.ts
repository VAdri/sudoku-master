import { getCellHouses, getCellIndexInGrid, isValidHouse, HOUSES_LIST } from "../house";
import { House, SudokuGrid, VALID_GRID_INDEXES, VALID_HOUSE_INDEXES, VALID_HOUSE_TYPES } from "../../types";
import { parseGrid } from "../..";

describe("getIndexInGrid", () => {
  test("Indexes for rows", () => {
    // Row 1
    expect(getCellIndexInGrid("row", 0, 0)).toBe(0);
    expect(getCellIndexInGrid("row", 0, 1)).toBe(1);
    expect(getCellIndexInGrid("row", 0, 2)).toBe(2);
    expect(getCellIndexInGrid("row", 0, 3)).toBe(3);
    expect(getCellIndexInGrid("row", 0, 4)).toBe(4);
    expect(getCellIndexInGrid("row", 0, 5)).toBe(5);
    expect(getCellIndexInGrid("row", 0, 6)).toBe(6);
    expect(getCellIndexInGrid("row", 0, 7)).toBe(7);
    expect(getCellIndexInGrid("row", 0, 8)).toBe(8);

    // Row 2
    expect(getCellIndexInGrid("row", 1, 0)).toBe(9);
    expect(getCellIndexInGrid("row", 1, 1)).toBe(10);
    expect(getCellIndexInGrid("row", 1, 2)).toBe(11);
    expect(getCellIndexInGrid("row", 1, 3)).toBe(12);
    expect(getCellIndexInGrid("row", 1, 4)).toBe(13);
    expect(getCellIndexInGrid("row", 1, 5)).toBe(14);
    expect(getCellIndexInGrid("row", 1, 6)).toBe(15);
    expect(getCellIndexInGrid("row", 1, 7)).toBe(16);
    expect(getCellIndexInGrid("row", 1, 8)).toBe(17);

    // Row 3
    expect(getCellIndexInGrid("row", 2, 0)).toBe(18);
    expect(getCellIndexInGrid("row", 2, 1)).toBe(19);
    expect(getCellIndexInGrid("row", 2, 2)).toBe(20);
    expect(getCellIndexInGrid("row", 2, 3)).toBe(21);
    expect(getCellIndexInGrid("row", 2, 4)).toBe(22);
    expect(getCellIndexInGrid("row", 2, 5)).toBe(23);
    expect(getCellIndexInGrid("row", 2, 6)).toBe(24);
    expect(getCellIndexInGrid("row", 2, 7)).toBe(25);
    expect(getCellIndexInGrid("row", 2, 8)).toBe(26);

    // Row 4
    expect(getCellIndexInGrid("row", 3, 0)).toBe(27);
    expect(getCellIndexInGrid("row", 3, 1)).toBe(28);
    expect(getCellIndexInGrid("row", 3, 2)).toBe(29);
    expect(getCellIndexInGrid("row", 3, 3)).toBe(30);
    expect(getCellIndexInGrid("row", 3, 4)).toBe(31);
    expect(getCellIndexInGrid("row", 3, 5)).toBe(32);
    expect(getCellIndexInGrid("row", 3, 6)).toBe(33);
    expect(getCellIndexInGrid("row", 3, 7)).toBe(34);
    expect(getCellIndexInGrid("row", 3, 8)).toBe(35);

    // Row 5
    expect(getCellIndexInGrid("row", 4, 0)).toBe(36);
    expect(getCellIndexInGrid("row", 4, 1)).toBe(37);
    expect(getCellIndexInGrid("row", 4, 2)).toBe(38);
    expect(getCellIndexInGrid("row", 4, 3)).toBe(39);
    expect(getCellIndexInGrid("row", 4, 4)).toBe(40);
    expect(getCellIndexInGrid("row", 4, 5)).toBe(41);
    expect(getCellIndexInGrid("row", 4, 6)).toBe(42);
    expect(getCellIndexInGrid("row", 4, 7)).toBe(43);
    expect(getCellIndexInGrid("row", 4, 8)).toBe(44);

    // Row 6
    expect(getCellIndexInGrid("row", 5, 0)).toBe(45);
    expect(getCellIndexInGrid("row", 5, 1)).toBe(46);
    expect(getCellIndexInGrid("row", 5, 2)).toBe(47);
    expect(getCellIndexInGrid("row", 5, 3)).toBe(48);
    expect(getCellIndexInGrid("row", 5, 4)).toBe(49);
    expect(getCellIndexInGrid("row", 5, 5)).toBe(50);
    expect(getCellIndexInGrid("row", 5, 6)).toBe(51);
    expect(getCellIndexInGrid("row", 5, 7)).toBe(52);
    expect(getCellIndexInGrid("row", 5, 8)).toBe(53);

    // Row 7
    expect(getCellIndexInGrid("row", 6, 0)).toBe(54);
    expect(getCellIndexInGrid("row", 6, 1)).toBe(55);
    expect(getCellIndexInGrid("row", 6, 2)).toBe(56);
    expect(getCellIndexInGrid("row", 6, 3)).toBe(57);
    expect(getCellIndexInGrid("row", 6, 4)).toBe(58);
    expect(getCellIndexInGrid("row", 6, 5)).toBe(59);
    expect(getCellIndexInGrid("row", 6, 6)).toBe(60);
    expect(getCellIndexInGrid("row", 6, 7)).toBe(61);
    expect(getCellIndexInGrid("row", 6, 8)).toBe(62);

    // Row 8
    expect(getCellIndexInGrid("row", 7, 0)).toBe(63);
    expect(getCellIndexInGrid("row", 7, 1)).toBe(64);
    expect(getCellIndexInGrid("row", 7, 2)).toBe(65);
    expect(getCellIndexInGrid("row", 7, 3)).toBe(66);
    expect(getCellIndexInGrid("row", 7, 4)).toBe(67);
    expect(getCellIndexInGrid("row", 7, 5)).toBe(68);
    expect(getCellIndexInGrid("row", 7, 6)).toBe(69);
    expect(getCellIndexInGrid("row", 7, 7)).toBe(70);
    expect(getCellIndexInGrid("row", 7, 8)).toBe(71);

    // Row 9
    expect(getCellIndexInGrid("row", 8, 0)).toBe(72);
    expect(getCellIndexInGrid("row", 8, 1)).toBe(73);
    expect(getCellIndexInGrid("row", 8, 2)).toBe(74);
    expect(getCellIndexInGrid("row", 8, 3)).toBe(75);
    expect(getCellIndexInGrid("row", 8, 4)).toBe(76);
    expect(getCellIndexInGrid("row", 8, 5)).toBe(77);
    expect(getCellIndexInGrid("row", 8, 6)).toBe(78);
    expect(getCellIndexInGrid("row", 8, 7)).toBe(79);
    expect(getCellIndexInGrid("row", 8, 8)).toBe(80);
  });

  test("Indexes for columns", () => {
    // Col 1
    expect(getCellIndexInGrid("col", 0, 0)).toBe(0);
    expect(getCellIndexInGrid("col", 0, 1)).toBe(9);
    expect(getCellIndexInGrid("col", 0, 2)).toBe(18);
    expect(getCellIndexInGrid("col", 0, 3)).toBe(27);
    expect(getCellIndexInGrid("col", 0, 4)).toBe(36);
    expect(getCellIndexInGrid("col", 0, 5)).toBe(45);
    expect(getCellIndexInGrid("col", 0, 6)).toBe(54);
    expect(getCellIndexInGrid("col", 0, 7)).toBe(63);
    expect(getCellIndexInGrid("col", 0, 8)).toBe(72);

    // Col 2
    expect(getCellIndexInGrid("col", 1, 0)).toBe(1);
    expect(getCellIndexInGrid("col", 1, 1)).toBe(10);
    expect(getCellIndexInGrid("col", 1, 2)).toBe(19);
    expect(getCellIndexInGrid("col", 1, 3)).toBe(28);
    expect(getCellIndexInGrid("col", 1, 4)).toBe(37);
    expect(getCellIndexInGrid("col", 1, 5)).toBe(46);
    expect(getCellIndexInGrid("col", 1, 6)).toBe(55);
    expect(getCellIndexInGrid("col", 1, 7)).toBe(64);
    expect(getCellIndexInGrid("col", 1, 8)).toBe(73);

    // Col 3
    expect(getCellIndexInGrid("col", 2, 0)).toBe(2);
    expect(getCellIndexInGrid("col", 2, 1)).toBe(11);
    expect(getCellIndexInGrid("col", 2, 2)).toBe(20);
    expect(getCellIndexInGrid("col", 2, 3)).toBe(29);
    expect(getCellIndexInGrid("col", 2, 4)).toBe(38);
    expect(getCellIndexInGrid("col", 2, 5)).toBe(47);
    expect(getCellIndexInGrid("col", 2, 6)).toBe(56);
    expect(getCellIndexInGrid("col", 2, 7)).toBe(65);
    expect(getCellIndexInGrid("col", 2, 8)).toBe(74);

    // Col 4
    expect(getCellIndexInGrid("col", 3, 0)).toBe(3);
    expect(getCellIndexInGrid("col", 3, 1)).toBe(12);
    expect(getCellIndexInGrid("col", 3, 2)).toBe(21);
    expect(getCellIndexInGrid("col", 3, 3)).toBe(30);
    expect(getCellIndexInGrid("col", 3, 4)).toBe(39);
    expect(getCellIndexInGrid("col", 3, 5)).toBe(48);
    expect(getCellIndexInGrid("col", 3, 6)).toBe(57);
    expect(getCellIndexInGrid("col", 3, 7)).toBe(66);
    expect(getCellIndexInGrid("col", 3, 8)).toBe(75);

    // Col 5
    expect(getCellIndexInGrid("col", 4, 0)).toBe(4);
    expect(getCellIndexInGrid("col", 4, 1)).toBe(13);
    expect(getCellIndexInGrid("col", 4, 2)).toBe(22);
    expect(getCellIndexInGrid("col", 4, 3)).toBe(31);
    expect(getCellIndexInGrid("col", 4, 4)).toBe(40);
    expect(getCellIndexInGrid("col", 4, 5)).toBe(49);
    expect(getCellIndexInGrid("col", 4, 6)).toBe(58);
    expect(getCellIndexInGrid("col", 4, 7)).toBe(67);
    expect(getCellIndexInGrid("col", 4, 8)).toBe(76);

    // Col 6
    expect(getCellIndexInGrid("col", 5, 0)).toBe(5);
    expect(getCellIndexInGrid("col", 5, 1)).toBe(14);
    expect(getCellIndexInGrid("col", 5, 2)).toBe(23);
    expect(getCellIndexInGrid("col", 5, 3)).toBe(32);
    expect(getCellIndexInGrid("col", 5, 4)).toBe(41);
    expect(getCellIndexInGrid("col", 5, 5)).toBe(50);
    expect(getCellIndexInGrid("col", 5, 6)).toBe(59);
    expect(getCellIndexInGrid("col", 5, 7)).toBe(68);
    expect(getCellIndexInGrid("col", 5, 8)).toBe(77);

    // Col 7
    expect(getCellIndexInGrid("col", 6, 0)).toBe(6);
    expect(getCellIndexInGrid("col", 6, 1)).toBe(15);
    expect(getCellIndexInGrid("col", 6, 2)).toBe(24);
    expect(getCellIndexInGrid("col", 6, 3)).toBe(33);
    expect(getCellIndexInGrid("col", 6, 4)).toBe(42);
    expect(getCellIndexInGrid("col", 6, 5)).toBe(51);
    expect(getCellIndexInGrid("col", 6, 6)).toBe(60);
    expect(getCellIndexInGrid("col", 6, 7)).toBe(69);
    expect(getCellIndexInGrid("col", 6, 8)).toBe(78);

    // Col 8
    expect(getCellIndexInGrid("col", 7, 0)).toBe(7);
    expect(getCellIndexInGrid("col", 7, 1)).toBe(16);
    expect(getCellIndexInGrid("col", 7, 2)).toBe(25);
    expect(getCellIndexInGrid("col", 7, 3)).toBe(34);
    expect(getCellIndexInGrid("col", 7, 4)).toBe(43);
    expect(getCellIndexInGrid("col", 7, 5)).toBe(52);
    expect(getCellIndexInGrid("col", 7, 6)).toBe(61);
    expect(getCellIndexInGrid("col", 7, 7)).toBe(70);
    expect(getCellIndexInGrid("col", 7, 8)).toBe(79);

    // Col 9
    expect(getCellIndexInGrid("col", 8, 0)).toBe(8);
    expect(getCellIndexInGrid("col", 8, 1)).toBe(17);
    expect(getCellIndexInGrid("col", 8, 2)).toBe(26);
    expect(getCellIndexInGrid("col", 8, 3)).toBe(35);
    expect(getCellIndexInGrid("col", 8, 4)).toBe(44);
    expect(getCellIndexInGrid("col", 8, 5)).toBe(53);
    expect(getCellIndexInGrid("col", 8, 6)).toBe(62);
    expect(getCellIndexInGrid("col", 8, 7)).toBe(71);
    expect(getCellIndexInGrid("col", 8, 8)).toBe(80);
  });

  test("Indexes for boxes", () => {
    // Box 1
    expect(getCellIndexInGrid("box", 0, 0)).toBe(0);
    expect(getCellIndexInGrid("box", 0, 1)).toBe(1);
    expect(getCellIndexInGrid("box", 0, 2)).toBe(2);
    expect(getCellIndexInGrid("box", 0, 3)).toBe(9);
    expect(getCellIndexInGrid("box", 0, 4)).toBe(10);
    expect(getCellIndexInGrid("box", 0, 5)).toBe(11);
    expect(getCellIndexInGrid("box", 0, 6)).toBe(18);
    expect(getCellIndexInGrid("box", 0, 7)).toBe(19);
    expect(getCellIndexInGrid("box", 0, 8)).toBe(20);

    // Box 2
    expect(getCellIndexInGrid("box", 1, 0)).toBe(3);
    expect(getCellIndexInGrid("box", 1, 1)).toBe(4);
    expect(getCellIndexInGrid("box", 1, 2)).toBe(5);
    expect(getCellIndexInGrid("box", 1, 3)).toBe(12);
    expect(getCellIndexInGrid("box", 1, 4)).toBe(13);
    expect(getCellIndexInGrid("box", 1, 5)).toBe(14);
    expect(getCellIndexInGrid("box", 1, 6)).toBe(21);
    expect(getCellIndexInGrid("box", 1, 7)).toBe(22);
    expect(getCellIndexInGrid("box", 1, 8)).toBe(23);

    // Box 3
    expect(getCellIndexInGrid("box", 2, 0)).toBe(6);
    expect(getCellIndexInGrid("box", 2, 1)).toBe(7);
    expect(getCellIndexInGrid("box", 2, 2)).toBe(8);
    expect(getCellIndexInGrid("box", 2, 3)).toBe(15);
    expect(getCellIndexInGrid("box", 2, 4)).toBe(16);
    expect(getCellIndexInGrid("box", 2, 5)).toBe(17);
    expect(getCellIndexInGrid("box", 2, 6)).toBe(24);
    expect(getCellIndexInGrid("box", 2, 7)).toBe(25);
    expect(getCellIndexInGrid("box", 2, 8)).toBe(26);

    // Box 4
    expect(getCellIndexInGrid("box", 3, 0)).toBe(27);
    expect(getCellIndexInGrid("box", 3, 1)).toBe(28);
    expect(getCellIndexInGrid("box", 3, 2)).toBe(29);
    expect(getCellIndexInGrid("box", 3, 3)).toBe(36);
    expect(getCellIndexInGrid("box", 3, 4)).toBe(37);
    expect(getCellIndexInGrid("box", 3, 5)).toBe(38);
    expect(getCellIndexInGrid("box", 3, 6)).toBe(45);
    expect(getCellIndexInGrid("box", 3, 7)).toBe(46);
    expect(getCellIndexInGrid("box", 3, 8)).toBe(47);

    // Box 5
    expect(getCellIndexInGrid("box", 4, 0)).toBe(30);
    expect(getCellIndexInGrid("box", 4, 1)).toBe(31);
    expect(getCellIndexInGrid("box", 4, 2)).toBe(32);
    expect(getCellIndexInGrid("box", 4, 3)).toBe(39);
    expect(getCellIndexInGrid("box", 4, 4)).toBe(40);
    expect(getCellIndexInGrid("box", 4, 5)).toBe(41);
    expect(getCellIndexInGrid("box", 4, 6)).toBe(48);
    expect(getCellIndexInGrid("box", 4, 7)).toBe(49);
    expect(getCellIndexInGrid("box", 4, 8)).toBe(50);

    // Box 6
    expect(getCellIndexInGrid("box", 5, 0)).toBe(33);
    expect(getCellIndexInGrid("box", 5, 1)).toBe(34);
    expect(getCellIndexInGrid("box", 5, 2)).toBe(35);
    expect(getCellIndexInGrid("box", 5, 3)).toBe(42);
    expect(getCellIndexInGrid("box", 5, 4)).toBe(43);
    expect(getCellIndexInGrid("box", 5, 5)).toBe(44);
    expect(getCellIndexInGrid("box", 5, 6)).toBe(51);
    expect(getCellIndexInGrid("box", 5, 7)).toBe(52);
    expect(getCellIndexInGrid("box", 5, 8)).toBe(53);

    // Box 7
    expect(getCellIndexInGrid("box", 6, 0)).toBe(54);
    expect(getCellIndexInGrid("box", 6, 1)).toBe(55);
    expect(getCellIndexInGrid("box", 6, 2)).toBe(56);
    expect(getCellIndexInGrid("box", 6, 3)).toBe(63);
    expect(getCellIndexInGrid("box", 6, 4)).toBe(64);
    expect(getCellIndexInGrid("box", 6, 5)).toBe(65);
    expect(getCellIndexInGrid("box", 6, 6)).toBe(72);
    expect(getCellIndexInGrid("box", 6, 7)).toBe(73);
    expect(getCellIndexInGrid("box", 6, 8)).toBe(74);

    // Box 8
    expect(getCellIndexInGrid("box", 7, 0)).toBe(57);
    expect(getCellIndexInGrid("box", 7, 1)).toBe(58);
    expect(getCellIndexInGrid("box", 7, 2)).toBe(59);
    expect(getCellIndexInGrid("box", 7, 3)).toBe(66);
    expect(getCellIndexInGrid("box", 7, 4)).toBe(67);
    expect(getCellIndexInGrid("box", 7, 5)).toBe(68);
    expect(getCellIndexInGrid("box", 7, 6)).toBe(75);
    expect(getCellIndexInGrid("box", 7, 7)).toBe(76);
    expect(getCellIndexInGrid("box", 7, 8)).toBe(77);

    // Box 9
    expect(getCellIndexInGrid("box", 8, 0)).toBe(60);
    expect(getCellIndexInGrid("box", 8, 1)).toBe(61);
    expect(getCellIndexInGrid("box", 8, 2)).toBe(62);
    expect(getCellIndexInGrid("box", 8, 3)).toBe(69);
    expect(getCellIndexInGrid("box", 8, 4)).toBe(70);
    expect(getCellIndexInGrid("box", 8, 5)).toBe(71);
    expect(getCellIndexInGrid("box", 8, 6)).toBe(78);
    expect(getCellIndexInGrid("box", 8, 7)).toBe(79);
    expect(getCellIndexInGrid("box", 8, 8)).toBe(80);
  });
});

describe("HOUSES_LIST", () => {
  let grid: SudokuGrid;
  let houses: readonly House[] = HOUSES_LIST;

  beforeAll(() => {
    grid = parseGrid(`
      .------------------.------------------.------------------.
      | 19    7     169  | 2     156   3    | 459   8     49   |
      | 3     4     5    | 7     9     8    | 1     2     6    |
      | 2     169   8    | 16    4     156  | 3579  35    379  |
      :------------------+------------------+------------------:
      | 4     136   1367 | 5     1367  9    | 8     36    2    |
      | 17    5     12367| 8     12367 4    | 367   9     37   |
      | 8     369   23679| 36    2367  26   | 34567 3456  1    |
      :------------------+------------------+------------------:
      | 1579  139   13479| 13469 12356 1256 | 23469 346   8    |
      | 159   8     1349 | 13469 12356 1256 | 23469 7     349  |
      | 6     2     349  | 349   8     7    | 349   1     5    |
      '------------------'------------------'------------------'`) as SudokuGrid;

    expect(grid).toBeTruthy();
  });

  test("9 houses of each type, 27 in total", () => {
    expect(houses).toHaveLength(27);
    expect(houses.filter((h) => h.type === "row")).toHaveLength(9);
    expect(
      houses
        .filter((h) => h.type === "row")
        .map((h) => h.index)
        .sort(),
    ).toStrictEqual(VALID_HOUSE_INDEXES);
    expect(houses.filter((h) => h.type === "col")).toHaveLength(9);
    expect(
      houses
        .filter((h) => h.type === "col")
        .map((h) => h.index)
        .sort(),
    ).toStrictEqual(VALID_HOUSE_INDEXES);
    expect(houses.filter((h) => h.type === "box")).toHaveLength(9);
    expect(
      houses
        .filter((h) => h.type === "box")
        .map((h) => h.index)
        .sort(),
    ).toStrictEqual(VALID_HOUSE_INDEXES);
  });

  test("Digits are contained in their rows", () => {
    // Row 1
    const row1 = houses.find((h) => h.type === "row" && h.index === 0);
    expect(row1).toBeTruthy();
    if (row1) {
      expect(row1).not.toBeFalsy();
      expect(grid.digits.get(row1.cells[0])).toBeFalsy();
      expect(grid.digits.get(row1.cells[1])).toBe(7);
      expect(grid.digits.get(row1.cells[2])).toBeFalsy();
      expect(grid.digits.get(row1.cells[3])).toBe(2);
      expect(grid.digits.get(row1.cells[4])).toBeFalsy();
      expect(grid.digits.get(row1.cells[5])).toBe(3);
      expect(grid.digits.get(row1.cells[6])).toBeFalsy();
      expect(grid.digits.get(row1.cells[7])).toBe(8);
      expect(grid.digits.get(row1.cells[8])).toBeFalsy();
    }

    // Row 2
    const row2 = houses.find((h) => h.type === "row" && h.index === 1);
    expect(row2).toBeTruthy();
    if (row2) {
      expect(row2).not.toBeFalsy();
      expect(grid.digits.get(row2.cells[0])).toBe(3);
      expect(grid.digits.get(row2.cells[1])).toBe(4);
      expect(grid.digits.get(row2.cells[2])).toBe(5);
      expect(grid.digits.get(row2.cells[3])).toBe(7);
      expect(grid.digits.get(row2.cells[4])).toBe(9);
      expect(grid.digits.get(row2.cells[5])).toBe(8);
      expect(grid.digits.get(row2.cells[6])).toBe(1);
      expect(grid.digits.get(row2.cells[7])).toBe(2);
      expect(grid.digits.get(row2.cells[8])).toBe(6);
    }

    // Row 3
    const row3 = houses.find((h) => h.type === "row" && h.index === 2);
    expect(row3).toBeTruthy();
    if (row3) {
      expect(row3).not.toBeFalsy();
      expect(grid.digits.get(row3.cells[0])).toBe(2);
      expect(grid.digits.get(row3.cells[1])).toBeFalsy();
      expect(grid.digits.get(row3.cells[2])).toBe(8);
      expect(grid.digits.get(row3.cells[3])).toBeFalsy();
      expect(grid.digits.get(row3.cells[4])).toBe(4);
      expect(grid.digits.get(row3.cells[5])).toBeFalsy();
      expect(grid.digits.get(row3.cells[6])).toBeFalsy();
      expect(grid.digits.get(row3.cells[7])).toBeFalsy();
      expect(grid.digits.get(row3.cells[8])).toBeFalsy();
    }

    // Row 4
    const row4 = houses.find((h) => h.type === "row" && h.index === 3);
    expect(row4).toBeTruthy();
    if (row4) {
      expect(row4).not.toBeFalsy();
      expect(grid.digits.get(row4.cells[0])).toBe(4);
      expect(grid.digits.get(row4.cells[1])).toBeFalsy();
      expect(grid.digits.get(row4.cells[2])).toBeFalsy();
      expect(grid.digits.get(row4.cells[3])).toBe(5);
      expect(grid.digits.get(row4.cells[4])).toBeFalsy();
      expect(grid.digits.get(row4.cells[5])).toBe(9);
      expect(grid.digits.get(row4.cells[6])).toBe(8);
      expect(grid.digits.get(row4.cells[7])).toBeFalsy();
      expect(grid.digits.get(row4.cells[8])).toBe(2);
    }

    // Row 5
    const row5 = houses.find((h) => h.type === "row" && h.index === 4);
    expect(row5).toBeTruthy();
    if (row5) {
      expect(row5).not.toBeFalsy();
      expect(grid.digits.get(row5.cells[0])).toBeFalsy();
      expect(grid.digits.get(row5.cells[1])).toBe(5);
      expect(grid.digits.get(row5.cells[2])).toBeFalsy();
      expect(grid.digits.get(row5.cells[3])).toBe(8);
      expect(grid.digits.get(row5.cells[4])).toBeFalsy();
      expect(grid.digits.get(row5.cells[5])).toBe(4);
      expect(grid.digits.get(row5.cells[6])).toBeFalsy();
      expect(grid.digits.get(row5.cells[7])).toBe(9);
      expect(grid.digits.get(row5.cells[8])).toBeFalsy();
    }

    // Row 6
    const row6 = houses.find((h) => h.type === "row" && h.index === 5);
    expect(row6).toBeTruthy();
    if (row6) {
      expect(row6).not.toBeFalsy();
      expect(grid.digits.get(row6.cells[0])).toBe(8);
      expect(grid.digits.get(row6.cells[1])).toBeFalsy();
      expect(grid.digits.get(row6.cells[2])).toBeFalsy();
      expect(grid.digits.get(row6.cells[3])).toBeFalsy();
      expect(grid.digits.get(row6.cells[4])).toBeFalsy();
      expect(grid.digits.get(row6.cells[5])).toBeFalsy();
      expect(grid.digits.get(row6.cells[6])).toBeFalsy();
      expect(grid.digits.get(row6.cells[7])).toBeFalsy();
      expect(grid.digits.get(row6.cells[8])).toBe(1);
    }

    // Row 7
    const row7 = houses.find((h) => h.type === "row" && h.index === 6);
    expect(row7).toBeTruthy();
    if (row7) {
      expect(row7).not.toBeFalsy();
      expect(grid.digits.get(row7.cells[0])).toBeFalsy();
      expect(grid.digits.get(row7.cells[1])).toBeFalsy();
      expect(grid.digits.get(row7.cells[2])).toBeFalsy();
      expect(grid.digits.get(row7.cells[3])).toBeFalsy();
      expect(grid.digits.get(row7.cells[4])).toBeFalsy();
      expect(grid.digits.get(row7.cells[5])).toBeFalsy();
      expect(grid.digits.get(row7.cells[6])).toBeFalsy();
      expect(grid.digits.get(row7.cells[7])).toBeFalsy();
      expect(grid.digits.get(row7.cells[8])).toBe(8);
    }

    // Row 8
    const row8 = houses.find((h) => h.type === "row" && h.index === 7);
    expect(row8).toBeTruthy();
    if (row8) {
      expect(row8).not.toBeFalsy();
      expect(grid.digits.get(row8.cells[0])).toBeFalsy();
      expect(grid.digits.get(row8.cells[1])).toBe(8);
      expect(grid.digits.get(row8.cells[2])).toBeFalsy();
      expect(grid.digits.get(row8.cells[3])).toBeFalsy();
      expect(grid.digits.get(row8.cells[4])).toBeFalsy();
      expect(grid.digits.get(row8.cells[5])).toBeFalsy();
      expect(grid.digits.get(row8.cells[6])).toBeFalsy();
      expect(grid.digits.get(row8.cells[7])).toBe(7);
      expect(grid.digits.get(row8.cells[8])).toBeFalsy();
    }

    // Row 9
    const row9 = houses.find((h) => h.type === "row" && h.index === 8);
    expect(row9).toBeTruthy();
    if (row9) {
      expect(row9).not.toBeFalsy();
      expect(grid.digits.get(row9.cells[0])).toBe(6);
      expect(grid.digits.get(row9.cells[1])).toBe(2);
      expect(grid.digits.get(row9.cells[2])).toBeFalsy();
      expect(grid.digits.get(row9.cells[3])).toBeFalsy();
      expect(grid.digits.get(row9.cells[4])).toBe(8);
      expect(grid.digits.get(row9.cells[5])).toBe(7);
      expect(grid.digits.get(row9.cells[6])).toBeFalsy();
      expect(grid.digits.get(row9.cells[7])).toBe(1);
      expect(grid.digits.get(row9.cells[8])).toBe(5);
    }
  });

  test("Digits are contained in their columns", () => {
    // Col 1
    const col1 = houses.find((h) => h.type === "col" && h.index === 0);
    expect(col1).toBeTruthy();
    if (col1) {
      expect(col1).not.toBeFalsy();
      expect(grid.digits.get(col1.cells[0])).toBeFalsy();
      expect(grid.digits.get(col1.cells[1])).toBe(3);
      expect(grid.digits.get(col1.cells[2])).toBe(2);
      expect(grid.digits.get(col1.cells[3])).toBe(4);
      expect(grid.digits.get(col1.cells[4])).toBeFalsy();
      expect(grid.digits.get(col1.cells[5])).toBe(8);
      expect(grid.digits.get(col1.cells[6])).toBeFalsy();
      expect(grid.digits.get(col1.cells[7])).toBeFalsy();
      expect(grid.digits.get(col1.cells[8])).toBe(6);
    }

    // Col 2
    const col2 = houses.find((h) => h.type === "col" && h.index === 1);
    expect(col2).toBeTruthy();
    if (col2) {
      expect(col2).not.toBeFalsy();
      expect(grid.digits.get(col2.cells[0])).toBe(7);
      expect(grid.digits.get(col2.cells[1])).toBe(4);
      expect(grid.digits.get(col2.cells[2])).toBeFalsy();
      expect(grid.digits.get(col2.cells[3])).toBeFalsy();
      expect(grid.digits.get(col2.cells[4])).toBe(5);
      expect(grid.digits.get(col2.cells[5])).toBeFalsy();
      expect(grid.digits.get(col2.cells[6])).toBeFalsy();
      expect(grid.digits.get(col2.cells[7])).toBe(8);
      expect(grid.digits.get(col2.cells[8])).toBe(2);
    }

    // Col 3
    const col3 = houses.find((h) => h.type === "col" && h.index === 2);
    expect(col3).toBeTruthy();
    if (col3) {
      expect(col3).not.toBeFalsy();
      expect(grid.digits.get(col3.cells[0])).toBeFalsy();
      expect(grid.digits.get(col3.cells[1])).toBe(5);
      expect(grid.digits.get(col3.cells[2])).toBe(8);
      expect(grid.digits.get(col3.cells[3])).toBeFalsy();
      expect(grid.digits.get(col3.cells[4])).toBeFalsy();
      expect(grid.digits.get(col3.cells[5])).toBeFalsy();
      expect(grid.digits.get(col3.cells[6])).toBeFalsy();
      expect(grid.digits.get(col3.cells[7])).toBeFalsy();
      expect(grid.digits.get(col3.cells[8])).toBeFalsy();
    }

    // Col 4
    const col4 = houses.find((h) => h.type === "col" && h.index === 3);
    expect(col4).toBeTruthy();
    if (col4) {
      expect(col4).not.toBeFalsy();
      expect(grid.digits.get(col4.cells[0])).toBe(2);
      expect(grid.digits.get(col4.cells[1])).toBe(7);
      expect(grid.digits.get(col4.cells[2])).toBeFalsy();
      expect(grid.digits.get(col4.cells[3])).toBe(5);
      expect(grid.digits.get(col4.cells[4])).toBe(8);
      expect(grid.digits.get(col4.cells[5])).toBeFalsy();
      expect(grid.digits.get(col4.cells[6])).toBeFalsy();
      expect(grid.digits.get(col4.cells[7])).toBeFalsy();
      expect(grid.digits.get(col4.cells[8])).toBeFalsy();
    }

    // Col 5
    const col5 = houses.find((h) => h.type === "col" && h.index === 4);
    expect(col5).toBeTruthy();
    if (col5) {
      expect(col5).not.toBeFalsy();
      expect(grid.digits.get(col5.cells[0])).toBeFalsy();
      expect(grid.digits.get(col5.cells[1])).toBe(9);
      expect(grid.digits.get(col5.cells[2])).toBe(4);
      expect(grid.digits.get(col5.cells[3])).toBeFalsy();
      expect(grid.digits.get(col5.cells[4])).toBeFalsy();
      expect(grid.digits.get(col5.cells[5])).toBeFalsy();
      expect(grid.digits.get(col5.cells[6])).toBeFalsy();
      expect(grid.digits.get(col5.cells[7])).toBeFalsy();
      expect(grid.digits.get(col5.cells[8])).toBe(8);
    }

    // Col 6
    const col6 = houses.find((h) => h.type === "col" && h.index === 5);
    expect(col6).toBeTruthy();
    if (col6) {
      expect(col6).not.toBeFalsy();
      expect(grid.digits.get(col6.cells[0])).toBe(3);
      expect(grid.digits.get(col6.cells[1])).toBe(8);
      expect(grid.digits.get(col6.cells[2])).toBeFalsy();
      expect(grid.digits.get(col6.cells[3])).toBe(9);
      expect(grid.digits.get(col6.cells[4])).toBe(4);
      expect(grid.digits.get(col6.cells[5])).toBeFalsy();
      expect(grid.digits.get(col6.cells[6])).toBeFalsy();
      expect(grid.digits.get(col6.cells[7])).toBeFalsy();
      expect(grid.digits.get(col6.cells[8])).toBe(7);
    }

    // Col 7
    const col7 = houses.find((h) => h.type === "col" && h.index === 6);
    expect(col7).toBeTruthy();
    if (col7) {
      expect(col7).not.toBeFalsy();
      expect(grid.digits.get(col7.cells[0])).toBeFalsy();
      expect(grid.digits.get(col7.cells[1])).toBe(1);
      expect(grid.digits.get(col7.cells[2])).toBeFalsy();
      expect(grid.digits.get(col7.cells[3])).toBe(8);
      expect(grid.digits.get(col7.cells[4])).toBeFalsy();
      expect(grid.digits.get(col7.cells[5])).toBeFalsy();
      expect(grid.digits.get(col7.cells[6])).toBeFalsy();
      expect(grid.digits.get(col7.cells[7])).toBeFalsy();
      expect(grid.digits.get(col7.cells[8])).toBeFalsy();
    }

    // Col 8
    const col8 = houses.find((h) => h.type === "col" && h.index === 7);
    expect(col8).toBeTruthy();
    if (col8) {
      expect(col8).not.toBeFalsy();
      expect(grid.digits.get(col8.cells[0])).toBe(8);
      expect(grid.digits.get(col8.cells[1])).toBe(2);
      expect(grid.digits.get(col8.cells[2])).toBeFalsy();
      expect(grid.digits.get(col8.cells[3])).toBeFalsy();
      expect(grid.digits.get(col8.cells[4])).toBe(9);
      expect(grid.digits.get(col8.cells[5])).toBeFalsy();
      expect(grid.digits.get(col8.cells[6])).toBeFalsy();
      expect(grid.digits.get(col8.cells[7])).toBe(7);
      expect(grid.digits.get(col8.cells[8])).toBe(1);
    }

    // Col 9
    const col9 = houses.find((h) => h.type === "col" && h.index === 8);
    expect(col9).toBeTruthy();
    if (col9) {
      expect(col9).not.toBeFalsy();
      expect(grid.digits.get(col9.cells[0])).toBeFalsy();
      expect(grid.digits.get(col9.cells[1])).toBe(6);
      expect(grid.digits.get(col9.cells[2])).toBeFalsy();
      expect(grid.digits.get(col9.cells[3])).toBe(2);
      expect(grid.digits.get(col9.cells[4])).toBeFalsy();
      expect(grid.digits.get(col9.cells[5])).toBe(1);
      expect(grid.digits.get(col9.cells[6])).toBe(8);
      expect(grid.digits.get(col9.cells[7])).toBeFalsy();
      expect(grid.digits.get(col9.cells[8])).toBe(5);
    }
  });

  test("Digits are contained in their boxes", () => {
    // Box 1
    const box1 = houses.find((h) => h.type === "box" && h.index === 0);
    expect(box1).toBeTruthy();
    if (box1) {
      expect(box1).not.toBeFalsy();
      expect(grid.digits.get(box1.cells[0])).toBeFalsy();
      expect(grid.digits.get(box1.cells[1])).toBe(7);
      expect(grid.digits.get(box1.cells[2])).toBeFalsy();
      expect(grid.digits.get(box1.cells[3])).toBe(3);
      expect(grid.digits.get(box1.cells[4])).toBe(4);
      expect(grid.digits.get(box1.cells[5])).toBe(5);
      expect(grid.digits.get(box1.cells[6])).toBe(2);
      expect(grid.digits.get(box1.cells[7])).toBeFalsy();
      expect(grid.digits.get(box1.cells[8])).toBe(8);
    }

    // Box 2
    const box2 = houses.find((h) => h.type === "box" && h.index === 1);
    expect(box2).toBeTruthy();
    if (box2) {
      expect(box2).not.toBeFalsy();
      expect(grid.digits.get(box2.cells[0])).toBe(2);
      expect(grid.digits.get(box2.cells[1])).toBeFalsy();
      expect(grid.digits.get(box2.cells[2])).toBe(3);
      expect(grid.digits.get(box2.cells[3])).toBe(7);
      expect(grid.digits.get(box2.cells[4])).toBe(9);
      expect(grid.digits.get(box2.cells[5])).toBe(8);
      expect(grid.digits.get(box2.cells[6])).toBeFalsy();
      expect(grid.digits.get(box2.cells[7])).toBe(4);
      expect(grid.digits.get(box2.cells[8])).toBeFalsy();
    }

    // Box 3
    const box3 = houses.find((h) => h.type === "box" && h.index === 2);
    expect(box3).toBeTruthy();
    if (box3) {
      expect(box3).not.toBeFalsy();
      expect(grid.digits.get(box3.cells[0])).toBeFalsy();
      expect(grid.digits.get(box3.cells[1])).toBe(8);
      expect(grid.digits.get(box3.cells[2])).toBeFalsy();
      expect(grid.digits.get(box3.cells[3])).toBe(1);
      expect(grid.digits.get(box3.cells[4])).toBe(2);
      expect(grid.digits.get(box3.cells[5])).toBe(6);
      expect(grid.digits.get(box3.cells[6])).toBeFalsy();
      expect(grid.digits.get(box3.cells[7])).toBeFalsy();
      expect(grid.digits.get(box3.cells[8])).toBeFalsy();
    }

    // Box 4
    const box4 = houses.find((h) => h.type === "box" && h.index === 3);
    expect(box4).toBeTruthy();
    if (box4) {
      expect(box4).not.toBeFalsy();
      expect(grid.digits.get(box4.cells[0])).toBe(4);
      expect(grid.digits.get(box4.cells[1])).toBeFalsy();
      expect(grid.digits.get(box4.cells[2])).toBeFalsy();
      expect(grid.digits.get(box4.cells[3])).toBeFalsy();
      expect(grid.digits.get(box4.cells[4])).toBe(5);
      expect(grid.digits.get(box4.cells[5])).toBeFalsy();
      expect(grid.digits.get(box4.cells[6])).toBe(8);
      expect(grid.digits.get(box4.cells[7])).toBeFalsy();
      expect(grid.digits.get(box4.cells[8])).toBeFalsy();
    }

    // Box 5
    const box5 = houses.find((h) => h.type === "box" && h.index === 4);
    expect(box5).toBeTruthy();
    if (box5) {
      expect(box5).not.toBeFalsy();
      expect(grid.digits.get(box5.cells[0])).toBe(5);
      expect(grid.digits.get(box5.cells[1])).toBeFalsy();
      expect(grid.digits.get(box5.cells[2])).toBe(9);
      expect(grid.digits.get(box5.cells[3])).toBe(8);
      expect(grid.digits.get(box5.cells[4])).toBeFalsy();
      expect(grid.digits.get(box5.cells[5])).toBe(4);
      expect(grid.digits.get(box5.cells[6])).toBeFalsy();
      expect(grid.digits.get(box5.cells[7])).toBeFalsy();
      expect(grid.digits.get(box5.cells[8])).toBeFalsy();
    }

    // Box 6
    const box6 = houses.find((h) => h.type === "box" && h.index === 5);
    expect(box6).toBeTruthy();
    if (box6) {
      expect(box6).not.toBeFalsy();
      expect(grid.digits.get(box6.cells[0])).toBe(8);
      expect(grid.digits.get(box6.cells[1])).toBeFalsy();
      expect(grid.digits.get(box6.cells[2])).toBe(2);
      expect(grid.digits.get(box6.cells[3])).toBeFalsy();
      expect(grid.digits.get(box6.cells[4])).toBe(9);
      expect(grid.digits.get(box6.cells[5])).toBeFalsy();
      expect(grid.digits.get(box6.cells[6])).toBeFalsy();
      expect(grid.digits.get(box6.cells[7])).toBeFalsy();
      expect(grid.digits.get(box6.cells[8])).toBe(1);
    }

    // Box 7
    const box7 = houses.find((h) => h.type === "box" && h.index === 6);
    expect(box7).toBeTruthy();
    if (box7) {
      expect(box7).not.toBeFalsy();
      expect(grid.digits.get(box7.cells[0])).toBeFalsy();
      expect(grid.digits.get(box7.cells[1])).toBeFalsy();
      expect(grid.digits.get(box7.cells[2])).toBeFalsy();
      expect(grid.digits.get(box7.cells[3])).toBeFalsy();
      expect(grid.digits.get(box7.cells[4])).toBe(8);
      expect(grid.digits.get(box7.cells[5])).toBeFalsy();
      expect(grid.digits.get(box7.cells[6])).toBe(6);
      expect(grid.digits.get(box7.cells[7])).toBe(2);
      expect(grid.digits.get(box7.cells[8])).toBeFalsy();
    }

    // Box 8
    const box8 = houses.find((h) => h.type === "box" && h.index === 7);
    expect(box8).toBeTruthy();
    if (box8) {
      expect(box8).not.toBeFalsy();
      expect(grid.digits.get(box8.cells[0])).toBeFalsy();
      expect(grid.digits.get(box8.cells[1])).toBeFalsy();
      expect(grid.digits.get(box8.cells[2])).toBeFalsy();
      expect(grid.digits.get(box8.cells[3])).toBeFalsy();
      expect(grid.digits.get(box8.cells[4])).toBeFalsy();
      expect(grid.digits.get(box8.cells[5])).toBeFalsy();
      expect(grid.digits.get(box8.cells[6])).toBeFalsy();
      expect(grid.digits.get(box8.cells[7])).toBe(8);
      expect(grid.digits.get(box8.cells[8])).toBe(7);
    }

    // Box 9
    const box9 = houses.find((h) => h.type === "box" && h.index === 8);
    expect(box9).toBeTruthy();
    if (box9) {
      expect(box9).not.toBeFalsy();
      expect(grid.digits.get(box9.cells[0])).toBeFalsy();
      expect(grid.digits.get(box9.cells[1])).toBeFalsy();
      expect(grid.digits.get(box9.cells[2])).toBe(8);
      expect(grid.digits.get(box9.cells[3])).toBeFalsy();
      expect(grid.digits.get(box9.cells[4])).toBe(7);
      expect(grid.digits.get(box9.cells[5])).toBeFalsy();
      expect(grid.digits.get(box9.cells[6])).toBeFalsy();
      expect(grid.digits.get(box9.cells[7])).toBe(1);
      expect(grid.digits.get(box9.cells[8])).toBe(5);
    }
  });

  test("Candidates are contained in their rows", () => {
    // Row 1
    const row1 = houses.find((h) => h.type === "row" && h.index === 0);
    expect(row1).toBeTruthy();
    if (row1) {
      expect(row1).not.toBeFalsy();
      expect(grid.candidates.get(row1.cells[0])).toStrictEqual([1, 9]);
      expect(grid.candidates.get(row1.cells[1])).toBeFalsy();
      expect(grid.candidates.get(row1.cells[2])).toStrictEqual([1, 6, 9]);
      expect(grid.candidates.get(row1.cells[3])).toBeFalsy();
      expect(grid.candidates.get(row1.cells[4])).toStrictEqual([1, 5, 6]);
      expect(grid.candidates.get(row1.cells[5])).toBeFalsy();
      expect(grid.candidates.get(row1.cells[6])).toStrictEqual([4, 5, 9]);
      expect(grid.candidates.get(row1.cells[7])).toBeFalsy();
      expect(grid.candidates.get(row1.cells[8])).toStrictEqual([4, 9]);
    }

    // Row 2
    const row2 = houses.find((h) => h.type === "row" && h.index === 1);
    expect(row2).toBeTruthy();
    if (row2) {
      expect(row2).not.toBeFalsy();
      expect(grid.candidates.get(row2.cells[0])).toBeFalsy();
      expect(grid.candidates.get(row2.cells[1])).toBeFalsy();
      expect(grid.candidates.get(row2.cells[2])).toBeFalsy();
      expect(grid.candidates.get(row2.cells[3])).toBeFalsy();
      expect(grid.candidates.get(row2.cells[4])).toBeFalsy();
      expect(grid.candidates.get(row2.cells[5])).toBeFalsy();
      expect(grid.candidates.get(row2.cells[6])).toBeFalsy();
      expect(grid.candidates.get(row2.cells[7])).toBeFalsy();
      expect(grid.candidates.get(row2.cells[8])).toBeFalsy();
    }

    // Row 3
    const row3 = houses.find((h) => h.type === "row" && h.index === 2);
    expect(row3).toBeTruthy();
    if (row3) {
      expect(row3).not.toBeFalsy();
      expect(grid.candidates.get(row3.cells[0])).toBeFalsy();
      expect(grid.candidates.get(row3.cells[1])).toStrictEqual([1, 6, 9]);
      expect(grid.candidates.get(row3.cells[2])).toBeFalsy();
      expect(grid.candidates.get(row3.cells[3])).toStrictEqual([1, 6]);
      expect(grid.candidates.get(row3.cells[4])).toBeFalsy();
      expect(grid.candidates.get(row3.cells[5])).toStrictEqual([1, 5, 6]);
      expect(grid.candidates.get(row3.cells[6])).toStrictEqual([3, 5, 7, 9]);
      expect(grid.candidates.get(row3.cells[7])).toStrictEqual([3, 5]);
      expect(grid.candidates.get(row3.cells[8])).toStrictEqual([3, 7, 9]);
    }

    // Row 4
    const row4 = houses.find((h) => h.type === "row" && h.index === 3);
    expect(row4).toBeTruthy();
    if (row4) {
      expect(row4).not.toBeFalsy();
      expect(grid.candidates.get(row4.cells[0])).toBeFalsy();
      expect(grid.candidates.get(row4.cells[1])).toStrictEqual([1, 3, 6]);
      expect(grid.candidates.get(row4.cells[2])).toStrictEqual([1, 3, 6, 7]);
      expect(grid.candidates.get(row4.cells[3])).toBeFalsy();
      expect(grid.candidates.get(row4.cells[4])).toStrictEqual([1, 3, 6, 7]);
      expect(grid.candidates.get(row4.cells[5])).toBeFalsy();
      expect(grid.candidates.get(row4.cells[6])).toBeFalsy();
      expect(grid.candidates.get(row4.cells[7])).toStrictEqual([3, 6]);
      expect(grid.candidates.get(row4.cells[8])).toBeFalsy();
    }

    // Row 5
    const row5 = houses.find((h) => h.type === "row" && h.index === 4);
    expect(row5).toBeTruthy();
    if (row5) {
      expect(row5).not.toBeFalsy();
      expect(grid.candidates.get(row5.cells[0])).toStrictEqual([1, 7]);
      expect(grid.candidates.get(row5.cells[1])).toBeFalsy();
      expect(grid.candidates.get(row5.cells[2])).toStrictEqual([1, 2, 3, 6, 7]);
      expect(grid.candidates.get(row5.cells[3])).toBeFalsy();
      expect(grid.candidates.get(row5.cells[4])).toStrictEqual([1, 2, 3, 6, 7]);
      expect(grid.candidates.get(row5.cells[5])).toBeFalsy();
      expect(grid.candidates.get(row5.cells[6])).toStrictEqual([3, 6, 7]);
      expect(grid.candidates.get(row5.cells[7])).toBeFalsy();
      expect(grid.candidates.get(row5.cells[8])).toStrictEqual([3, 7]);
    }

    // Row 6
    const row6 = houses.find((h) => h.type === "row" && h.index === 5);
    expect(row6).toBeTruthy();
    if (row6) {
      expect(row6).not.toBeFalsy();
      expect(grid.candidates.get(row6.cells[0])).toBeFalsy();
      expect(grid.candidates.get(row6.cells[1])).toStrictEqual([3, 6, 9]);
      expect(grid.candidates.get(row6.cells[2])).toStrictEqual([2, 3, 6, 7, 9]);
      expect(grid.candidates.get(row6.cells[3])).toStrictEqual([3, 6]);
      expect(grid.candidates.get(row6.cells[4])).toStrictEqual([2, 3, 6, 7]);
      expect(grid.candidates.get(row6.cells[5])).toStrictEqual([2, 6]);
      expect(grid.candidates.get(row6.cells[6])).toStrictEqual([3, 4, 5, 6, 7]);
      expect(grid.candidates.get(row6.cells[7])).toStrictEqual([3, 4, 5, 6]);
      expect(grid.candidates.get(row6.cells[8])).toBeFalsy();
    }

    // Row 7
    const row7 = houses.find((h) => h.type === "row" && h.index === 6);
    expect(row7).toBeTruthy();
    if (row7) {
      expect(row7).not.toBeFalsy();
      expect(grid.candidates.get(row7.cells[0])).toStrictEqual([1, 5, 7, 9]);
      expect(grid.candidates.get(row7.cells[1])).toStrictEqual([1, 3, 9]);
      expect(grid.candidates.get(row7.cells[2])).toStrictEqual([1, 3, 4, 7, 9]);
      expect(grid.candidates.get(row7.cells[3])).toStrictEqual([1, 3, 4, 6, 9]);
      expect(grid.candidates.get(row7.cells[4])).toStrictEqual([1, 2, 3, 5, 6]);
      expect(grid.candidates.get(row7.cells[5])).toStrictEqual([1, 2, 5, 6]);
      expect(grid.candidates.get(row7.cells[6])).toStrictEqual([2, 3, 4, 6, 9]);
      expect(grid.candidates.get(row7.cells[7])).toStrictEqual([3, 4, 6]);
      expect(grid.candidates.get(row7.cells[8])).toBeFalsy();
    }

    // Row 8
    const row8 = houses.find((h) => h.type === "row" && h.index === 7);
    expect(row8).toBeTruthy();
    if (row8) {
      expect(row8).not.toBeFalsy();
      expect(grid.candidates.get(row8.cells[0])).toStrictEqual([1, 5, 9]);
      expect(grid.candidates.get(row8.cells[1])).toBeFalsy();
      expect(grid.candidates.get(row8.cells[2])).toStrictEqual([1, 3, 4, 9]);
      expect(grid.candidates.get(row8.cells[3])).toStrictEqual([1, 3, 4, 6, 9]);
      expect(grid.candidates.get(row8.cells[4])).toStrictEqual([1, 2, 3, 5, 6]);
      expect(grid.candidates.get(row8.cells[5])).toStrictEqual([1, 2, 5, 6]);
      expect(grid.candidates.get(row8.cells[6])).toStrictEqual([2, 3, 4, 6, 9]);
      expect(grid.candidates.get(row8.cells[7])).toBeFalsy();
      expect(grid.candidates.get(row8.cells[8])).toStrictEqual([3, 4, 9]);
    }

    // Row 9
    const row9 = houses.find((h) => h.type === "row" && h.index === 8);
    expect(row9).toBeTruthy();
    if (row9) {
      expect(row9).not.toBeFalsy();
      expect(grid.candidates.get(row9.cells[0])).toBeFalsy();
      expect(grid.candidates.get(row9.cells[1])).toBeFalsy();
      expect(grid.candidates.get(row9.cells[2])).toStrictEqual([3, 4, 9]);
      expect(grid.candidates.get(row9.cells[3])).toStrictEqual([3, 4, 9]);
      expect(grid.candidates.get(row9.cells[4])).toBeFalsy();
      expect(grid.candidates.get(row9.cells[5])).toBeFalsy();
      expect(grid.candidates.get(row9.cells[6])).toStrictEqual([3, 4, 9]);
      expect(grid.candidates.get(row9.cells[7])).toBeFalsy();
      expect(grid.candidates.get(row9.cells[8])).toBeFalsy();
    }
  });

  test("Digits are contained in their columns", () => {
    // Col 1
    const col1 = houses.find((h) => h.type === "col" && h.index === 0);
    expect(col1).toBeTruthy();
    if (col1) {
      expect(col1).not.toBeFalsy();
      expect(grid.candidates.get(col1.cells[0])).toStrictEqual([1, 9]);
      expect(grid.candidates.get(col1.cells[1])).toBeFalsy();
      expect(grid.candidates.get(col1.cells[2])).toBeFalsy();
      expect(grid.candidates.get(col1.cells[3])).toBeFalsy();
      expect(grid.candidates.get(col1.cells[4])).toStrictEqual([1, 7]);
      expect(grid.candidates.get(col1.cells[5])).toBeFalsy();
      expect(grid.candidates.get(col1.cells[6])).toStrictEqual([1, 5, 7, 9]);
      expect(grid.candidates.get(col1.cells[7])).toStrictEqual([1, 5, 9]);
      expect(grid.candidates.get(col1.cells[8])).toBeFalsy();
    }

    // Col 2
    const col2 = houses.find((h) => h.type === "col" && h.index === 1);
    expect(col2).toBeTruthy();
    if (col2) {
      expect(col2).not.toBeFalsy();
      expect(grid.candidates.get(col2.cells[0])).toBeFalsy();
      expect(grid.candidates.get(col2.cells[1])).toBeFalsy();
      expect(grid.candidates.get(col2.cells[2])).toStrictEqual([1, 6, 9]);
      expect(grid.candidates.get(col2.cells[3])).toStrictEqual([1, 3, 6]);
      expect(grid.candidates.get(col2.cells[4])).toBeFalsy();
      expect(grid.candidates.get(col2.cells[5])).toStrictEqual([3, 6, 9]);
      expect(grid.candidates.get(col2.cells[6])).toStrictEqual([1, 3, 9]);
      expect(grid.candidates.get(col2.cells[7])).toBeFalsy();
      expect(grid.candidates.get(col2.cells[8])).toBeFalsy();
    }

    // Col 3
    const col3 = houses.find((h) => h.type === "col" && h.index === 2);
    expect(col3).toBeTruthy();
    if (col3) {
      expect(col3).not.toBeFalsy();
      expect(grid.candidates.get(col3.cells[0])).toStrictEqual([1, 6, 9]);
      expect(grid.candidates.get(col3.cells[1])).toBeFalsy();
      expect(grid.candidates.get(col3.cells[2])).toBeFalsy();
      expect(grid.candidates.get(col3.cells[3])).toStrictEqual([1, 3, 6, 7]);
      expect(grid.candidates.get(col3.cells[4])).toStrictEqual([1, 2, 3, 6, 7]);
      expect(grid.candidates.get(col3.cells[5])).toStrictEqual([2, 3, 6, 7, 9]);
      expect(grid.candidates.get(col3.cells[6])).toStrictEqual([1, 3, 4, 7, 9]);
      expect(grid.candidates.get(col3.cells[7])).toStrictEqual([1, 3, 4, 9]);
      expect(grid.candidates.get(col3.cells[8])).toStrictEqual([3, 4, 9]);
    }

    // Col 4
    const col4 = houses.find((h) => h.type === "col" && h.index === 3);
    expect(col4).toBeTruthy();
    if (col4) {
      expect(col4).not.toBeFalsy();
      expect(grid.candidates.get(col4.cells[0])).toBeFalsy();
      expect(grid.candidates.get(col4.cells[1])).toBeFalsy();
      expect(grid.candidates.get(col4.cells[2])).toStrictEqual([1, 6]);
      expect(grid.candidates.get(col4.cells[3])).toBeFalsy();
      expect(grid.candidates.get(col4.cells[4])).toBeFalsy();
      expect(grid.candidates.get(col4.cells[5])).toStrictEqual([3, 6]);
      expect(grid.candidates.get(col4.cells[6])).toStrictEqual([1, 3, 4, 6, 9]);
      expect(grid.candidates.get(col4.cells[7])).toStrictEqual([1, 3, 4, 6, 9]);
      expect(grid.candidates.get(col4.cells[8])).toStrictEqual([3, 4, 9]);
    }

    // Col 5
    const col5 = houses.find((h) => h.type === "col" && h.index === 4);
    expect(col5).toBeTruthy();
    if (col5) {
      expect(col5).not.toBeFalsy();
      expect(grid.candidates.get(col5.cells[0])).toStrictEqual([1, 5, 6]);
      expect(grid.candidates.get(col5.cells[1])).toBeFalsy();
      expect(grid.candidates.get(col5.cells[2])).toBeFalsy();
      expect(grid.candidates.get(col5.cells[3])).toStrictEqual([1, 3, 6, 7]);
      expect(grid.candidates.get(col5.cells[4])).toStrictEqual([1, 2, 3, 6, 7]);
      expect(grid.candidates.get(col5.cells[5])).toStrictEqual([2, 3, 6, 7]);
      expect(grid.candidates.get(col5.cells[6])).toStrictEqual([1, 2, 3, 5, 6]);
      expect(grid.candidates.get(col5.cells[7])).toStrictEqual([1, 2, 3, 5, 6]);
      expect(grid.candidates.get(col5.cells[8])).toBeFalsy();
    }

    // Col 6
    const col6 = houses.find((h) => h.type === "col" && h.index === 5);
    expect(col6).toBeTruthy();
    if (col6) {
      expect(col6).not.toBeFalsy();
      expect(grid.candidates.get(col6.cells[0])).toBeFalsy();
      expect(grid.candidates.get(col6.cells[1])).toBeFalsy();
      expect(grid.candidates.get(col6.cells[2])).toStrictEqual([1, 5, 6]);
      expect(grid.candidates.get(col6.cells[3])).toBeFalsy();
      expect(grid.candidates.get(col6.cells[4])).toBeFalsy();
      expect(grid.candidates.get(col6.cells[5])).toStrictEqual([2, 6]);
      expect(grid.candidates.get(col6.cells[6])).toStrictEqual([1, 2, 5, 6]);
      expect(grid.candidates.get(col6.cells[7])).toStrictEqual([1, 2, 5, 6]);
      expect(grid.candidates.get(col6.cells[8])).toBeFalsy();
    }

    // Col 7
    const col7 = houses.find((h) => h.type === "col" && h.index === 6);
    expect(col7).toBeTruthy();
    if (col7) {
      expect(col7).not.toBeFalsy();
      expect(grid.candidates.get(col7.cells[0])).toStrictEqual([4, 5, 9]);
      expect(grid.candidates.get(col7.cells[1])).toBeFalsy();
      expect(grid.candidates.get(col7.cells[2])).toStrictEqual([3, 5, 7, 9]);
      expect(grid.candidates.get(col7.cells[3])).toBeFalsy();
      expect(grid.candidates.get(col7.cells[4])).toStrictEqual([3, 6, 7]);
      expect(grid.candidates.get(col7.cells[5])).toStrictEqual([3, 4, 5, 6, 7]);
      expect(grid.candidates.get(col7.cells[6])).toStrictEqual([2, 3, 4, 6, 9]);
      expect(grid.candidates.get(col7.cells[7])).toStrictEqual([2, 3, 4, 6, 9]);
      expect(grid.candidates.get(col7.cells[8])).toStrictEqual([3, 4, 9]);
    }

    // Col 8
    const col8 = houses.find((h) => h.type === "col" && h.index === 7);
    expect(col8).toBeTruthy();
    if (col8) {
      expect(col8).not.toBeFalsy();
      expect(grid.candidates.get(col8.cells[0])).toBeFalsy();
      expect(grid.candidates.get(col8.cells[1])).toBeFalsy();
      expect(grid.candidates.get(col8.cells[2])).toStrictEqual([3, 5]);
      expect(grid.candidates.get(col8.cells[3])).toStrictEqual([3, 6]);
      expect(grid.candidates.get(col8.cells[4])).toBeFalsy();
      expect(grid.candidates.get(col8.cells[5])).toStrictEqual([3, 4, 5, 6]);
      expect(grid.candidates.get(col8.cells[6])).toStrictEqual([3, 4, 6]);
      expect(grid.candidates.get(col8.cells[7])).toBeFalsy();
      expect(grid.candidates.get(col8.cells[8])).toBeFalsy();
    }

    // Col 9
    const col9 = houses.find((h) => h.type === "col" && h.index === 8);
    expect(col9).toBeTruthy();
    if (col9) {
      expect(col9).not.toBeFalsy();
      expect(grid.candidates.get(col9.cells[0])).toStrictEqual([4, 9]);
      expect(grid.candidates.get(col9.cells[1])).toBeFalsy();
      expect(grid.candidates.get(col9.cells[2])).toStrictEqual([3, 7, 9]);
      expect(grid.candidates.get(col9.cells[3])).toBeFalsy();
      expect(grid.candidates.get(col9.cells[4])).toStrictEqual([3, 7]);
      expect(grid.candidates.get(col9.cells[5])).toBeFalsy();
      expect(grid.candidates.get(col9.cells[6])).toBeFalsy();
      expect(grid.candidates.get(col9.cells[7])).toStrictEqual([3, 4, 9]);
      expect(grid.candidates.get(col9.cells[8])).toBeFalsy();
    }
  });

  test("Digits are contained in their boxes", () => {
    // Box 1
    const box1 = houses.find((h) => h.type === "box" && h.index === 0);
    expect(box1).toBeTruthy();
    if (box1) {
      expect(box1).not.toBeFalsy();
      expect(grid.candidates.get(box1.cells[0])).toStrictEqual([1, 9]);
      expect(grid.candidates.get(box1.cells[1])).toBeFalsy();
      expect(grid.candidates.get(box1.cells[2])).toStrictEqual([1, 6, 9]);
      expect(grid.candidates.get(box1.cells[3])).toBeFalsy();
      expect(grid.candidates.get(box1.cells[4])).toBeFalsy();
      expect(grid.candidates.get(box1.cells[5])).toBeFalsy();
      expect(grid.candidates.get(box1.cells[6])).toBeFalsy();
      expect(grid.candidates.get(box1.cells[7])).toStrictEqual([1, 6, 9]);
      expect(grid.candidates.get(box1.cells[8])).toBeFalsy();
    }

    // Box 2
    const box2 = houses.find((h) => h.type === "box" && h.index === 1);
    expect(box2).toBeTruthy();
    if (box2) {
      expect(box2).not.toBeFalsy();
      expect(grid.candidates.get(box2.cells[0])).toBeFalsy();
      expect(grid.candidates.get(box2.cells[1])).toStrictEqual([1, 5, 6]);
      expect(grid.candidates.get(box2.cells[2])).toBeFalsy();
      expect(grid.candidates.get(box2.cells[3])).toBeFalsy();
      expect(grid.candidates.get(box2.cells[4])).toBeFalsy();
      expect(grid.candidates.get(box2.cells[5])).toBeFalsy();
      expect(grid.candidates.get(box2.cells[6])).toStrictEqual([1, 6]);
      expect(grid.candidates.get(box2.cells[7])).toBeFalsy();
      expect(grid.candidates.get(box2.cells[8])).toStrictEqual([1, 5, 6]);
    }

    // Box 3
    const box3 = houses.find((h) => h.type === "box" && h.index === 2);
    expect(box3).toBeTruthy();
    if (box3) {
      expect(box3).not.toBeFalsy();
      expect(grid.candidates.get(box3.cells[0])).toStrictEqual([4, 5, 9]);
      expect(grid.candidates.get(box3.cells[1])).toBeFalsy();
      expect(grid.candidates.get(box3.cells[2])).toStrictEqual([4, 9]);
      expect(grid.candidates.get(box3.cells[3])).toBeFalsy();
      expect(grid.candidates.get(box3.cells[4])).toBeFalsy();
      expect(grid.candidates.get(box3.cells[5])).toBeFalsy();
      expect(grid.candidates.get(box3.cells[6])).toStrictEqual([3, 5, 7, 9]);
      expect(grid.candidates.get(box3.cells[7])).toStrictEqual([3, 5]);
      expect(grid.candidates.get(box3.cells[8])).toStrictEqual([3, 7, 9]);
    }

    // Box 4
    const box4 = houses.find((h) => h.type === "box" && h.index === 3);
    expect(box4).toBeTruthy();
    if (box4) {
      expect(box4).not.toBeFalsy();
      expect(grid.candidates.get(box4.cells[0])).toBeFalsy();
      expect(grid.candidates.get(box4.cells[1])).toStrictEqual([1, 3, 6]);
      expect(grid.candidates.get(box4.cells[2])).toStrictEqual([1, 3, 6, 7]);
      expect(grid.candidates.get(box4.cells[3])).toStrictEqual([1, 7]);
      expect(grid.candidates.get(box4.cells[4])).toBeFalsy();
      expect(grid.candidates.get(box4.cells[5])).toStrictEqual([1, 2, 3, 6, 7]);
      expect(grid.candidates.get(box4.cells[6])).toBeFalsy();
      expect(grid.candidates.get(box4.cells[7])).toStrictEqual([3, 6, 9]);
      expect(grid.candidates.get(box4.cells[8])).toStrictEqual([2, 3, 6, 7, 9]);
    }

    // Box 5
    const box5 = houses.find((h) => h.type === "box" && h.index === 4);
    expect(box5).toBeTruthy();
    if (box5) {
      expect(box5).not.toBeFalsy();
      expect(grid.candidates.get(box5.cells[0])).toBeFalsy();
      expect(grid.candidates.get(box5.cells[1])).toStrictEqual([1, 3, 6, 7]);
      expect(grid.candidates.get(box5.cells[2])).toBeFalsy();
      expect(grid.candidates.get(box5.cells[3])).toBeFalsy();
      expect(grid.candidates.get(box5.cells[4])).toStrictEqual([1, 2, 3, 6, 7]);
      expect(grid.candidates.get(box5.cells[5])).toBeFalsy();
      expect(grid.candidates.get(box5.cells[6])).toStrictEqual([3, 6]);
      expect(grid.candidates.get(box5.cells[7])).toStrictEqual([2, 3, 6, 7]);
      expect(grid.candidates.get(box5.cells[8])).toStrictEqual([2, 6]);
    }

    // Box 6
    const box6 = houses.find((h) => h.type === "box" && h.index === 5);
    expect(box6).toBeTruthy();
    if (box6) {
      expect(box6).not.toBeFalsy();
      expect(grid.candidates.get(box6.cells[0])).toBeFalsy();
      expect(grid.candidates.get(box6.cells[1])).toStrictEqual([3, 6]);
      expect(grid.candidates.get(box6.cells[2])).toBeFalsy();
      expect(grid.candidates.get(box6.cells[3])).toStrictEqual([3, 6, 7]);
      expect(grid.candidates.get(box6.cells[4])).toBeFalsy();
      expect(grid.candidates.get(box6.cells[5])).toStrictEqual([3, 7]);
      expect(grid.candidates.get(box6.cells[6])).toStrictEqual([3, 4, 5, 6, 7]);
      expect(grid.candidates.get(box6.cells[7])).toStrictEqual([3, 4, 5, 6]);
      expect(grid.candidates.get(box6.cells[8])).toBeFalsy();
    }

    // Box 7
    const box7 = houses.find((h) => h.type === "box" && h.index === 6);
    expect(box7).toBeTruthy();
    if (box7) {
      expect(box7).not.toBeFalsy();
      expect(grid.candidates.get(box7.cells[0])).toStrictEqual([1, 5, 7, 9]);
      expect(grid.candidates.get(box7.cells[1])).toStrictEqual([1, 3, 9]);
      expect(grid.candidates.get(box7.cells[2])).toStrictEqual([1, 3, 4, 7, 9]);
      expect(grid.candidates.get(box7.cells[3])).toStrictEqual([1, 5, 9]);
      expect(grid.candidates.get(box7.cells[4])).toBeFalsy();
      expect(grid.candidates.get(box7.cells[5])).toStrictEqual([1, 3, 4, 9]);
      expect(grid.candidates.get(box7.cells[6])).toBeFalsy();
      expect(grid.candidates.get(box7.cells[7])).toBeFalsy();
      expect(grid.candidates.get(box7.cells[8])).toStrictEqual([3, 4, 9]);
    }

    // Box 8
    const box8 = houses.find((h) => h.type === "box" && h.index === 7);
    expect(box8).toBeTruthy();
    if (box8) {
      expect(box8).not.toBeFalsy();
      expect(grid.candidates.get(box8.cells[0])).toStrictEqual([1, 3, 4, 6, 9]);
      expect(grid.candidates.get(box8.cells[1])).toStrictEqual([1, 2, 3, 5, 6]);
      expect(grid.candidates.get(box8.cells[2])).toStrictEqual([1, 2, 5, 6]);
      expect(grid.candidates.get(box8.cells[3])).toStrictEqual([1, 3, 4, 6, 9]);
      expect(grid.candidates.get(box8.cells[4])).toStrictEqual([1, 2, 3, 5, 6]);
      expect(grid.candidates.get(box8.cells[5])).toStrictEqual([1, 2, 5, 6]);
      expect(grid.candidates.get(box8.cells[6])).toStrictEqual([3, 4, 9]);
      expect(grid.candidates.get(box8.cells[7])).toBeFalsy();
      expect(grid.candidates.get(box8.cells[8])).toBeFalsy();
    }

    // Box 9
    const box9 = houses.find((h) => h.type === "box" && h.index === 8);
    expect(box9).toBeTruthy();
    if (box9) {
      expect(box9).not.toBeFalsy();
      expect(grid.candidates.get(box9.cells[0])).toStrictEqual([2, 3, 4, 6, 9]);
      expect(grid.candidates.get(box9.cells[1])).toStrictEqual([3, 4, 6]);
      expect(grid.candidates.get(box9.cells[2])).toBeFalsy();
      expect(grid.candidates.get(box9.cells[3])).toStrictEqual([2, 3, 4, 6, 9]);
      expect(grid.candidates.get(box9.cells[4])).toBeFalsy();
      expect(grid.candidates.get(box9.cells[5])).toStrictEqual([3, 4, 9]);
      expect(grid.candidates.get(box9.cells[6])).toStrictEqual([3, 4, 9]);
      expect(grid.candidates.get(box9.cells[7])).toBeFalsy();
      expect(grid.candidates.get(box9.cells[8])).toBeFalsy();
    }
  });
});

describe("getCellHouses", () => {
  it("returns a row, a column and a box", () => {
    const houseTypes = [...VALID_HOUSE_TYPES].sort();
    for (const index of VALID_GRID_INDEXES) {
      const cellHouses = getCellHouses(index);
      expect(cellHouses).toHaveLength(3);
      cellHouses.forEach((house) => expect(house).not.toBeUndefined());
      expect(cellHouses.map((house) => house.type).sort()).toStrictEqual(houseTypes);
    }
  });

  it("returns the row of a cell", () => {
    expect(getCellHouses(0).find((house) => house.type === "row")?.index).toBe(0);
    expect(getCellHouses(1).find((house) => house.type === "row")?.index).toBe(0);
    expect(getCellHouses(2).find((house) => house.type === "row")?.index).toBe(0);
    expect(getCellHouses(3).find((house) => house.type === "row")?.index).toBe(0);
    expect(getCellHouses(4).find((house) => house.type === "row")?.index).toBe(0);
    expect(getCellHouses(5).find((house) => house.type === "row")?.index).toBe(0);
    expect(getCellHouses(6).find((house) => house.type === "row")?.index).toBe(0);
    expect(getCellHouses(7).find((house) => house.type === "row")?.index).toBe(0);
    expect(getCellHouses(8).find((house) => house.type === "row")?.index).toBe(0);
    expect(getCellHouses(9).find((house) => house.type === "row")?.index).toBe(1);
    expect(getCellHouses(10).find((house) => house.type === "row")?.index).toBe(1);
    expect(getCellHouses(11).find((house) => house.type === "row")?.index).toBe(1);
    expect(getCellHouses(12).find((house) => house.type === "row")?.index).toBe(1);
    expect(getCellHouses(13).find((house) => house.type === "row")?.index).toBe(1);
    expect(getCellHouses(14).find((house) => house.type === "row")?.index).toBe(1);
    expect(getCellHouses(15).find((house) => house.type === "row")?.index).toBe(1);
    expect(getCellHouses(16).find((house) => house.type === "row")?.index).toBe(1);
    expect(getCellHouses(17).find((house) => house.type === "row")?.index).toBe(1);
    expect(getCellHouses(18).find((house) => house.type === "row")?.index).toBe(2);
    expect(getCellHouses(19).find((house) => house.type === "row")?.index).toBe(2);
    expect(getCellHouses(20).find((house) => house.type === "row")?.index).toBe(2);
    expect(getCellHouses(21).find((house) => house.type === "row")?.index).toBe(2);
    expect(getCellHouses(22).find((house) => house.type === "row")?.index).toBe(2);
    expect(getCellHouses(23).find((house) => house.type === "row")?.index).toBe(2);
    expect(getCellHouses(24).find((house) => house.type === "row")?.index).toBe(2);
    expect(getCellHouses(25).find((house) => house.type === "row")?.index).toBe(2);
    expect(getCellHouses(26).find((house) => house.type === "row")?.index).toBe(2);
    expect(getCellHouses(27).find((house) => house.type === "row")?.index).toBe(3);
    expect(getCellHouses(28).find((house) => house.type === "row")?.index).toBe(3);
    expect(getCellHouses(29).find((house) => house.type === "row")?.index).toBe(3);
    expect(getCellHouses(30).find((house) => house.type === "row")?.index).toBe(3);
    expect(getCellHouses(31).find((house) => house.type === "row")?.index).toBe(3);
    expect(getCellHouses(32).find((house) => house.type === "row")?.index).toBe(3);
    expect(getCellHouses(33).find((house) => house.type === "row")?.index).toBe(3);
    expect(getCellHouses(34).find((house) => house.type === "row")?.index).toBe(3);
    expect(getCellHouses(35).find((house) => house.type === "row")?.index).toBe(3);
    expect(getCellHouses(36).find((house) => house.type === "row")?.index).toBe(4);
    expect(getCellHouses(37).find((house) => house.type === "row")?.index).toBe(4);
    expect(getCellHouses(38).find((house) => house.type === "row")?.index).toBe(4);
    expect(getCellHouses(39).find((house) => house.type === "row")?.index).toBe(4);
    expect(getCellHouses(40).find((house) => house.type === "row")?.index).toBe(4);
    expect(getCellHouses(41).find((house) => house.type === "row")?.index).toBe(4);
    expect(getCellHouses(42).find((house) => house.type === "row")?.index).toBe(4);
    expect(getCellHouses(43).find((house) => house.type === "row")?.index).toBe(4);
    expect(getCellHouses(44).find((house) => house.type === "row")?.index).toBe(4);
    expect(getCellHouses(45).find((house) => house.type === "row")?.index).toBe(5);
    expect(getCellHouses(46).find((house) => house.type === "row")?.index).toBe(5);
    expect(getCellHouses(47).find((house) => house.type === "row")?.index).toBe(5);
    expect(getCellHouses(48).find((house) => house.type === "row")?.index).toBe(5);
    expect(getCellHouses(49).find((house) => house.type === "row")?.index).toBe(5);
    expect(getCellHouses(50).find((house) => house.type === "row")?.index).toBe(5);
    expect(getCellHouses(51).find((house) => house.type === "row")?.index).toBe(5);
    expect(getCellHouses(52).find((house) => house.type === "row")?.index).toBe(5);
    expect(getCellHouses(53).find((house) => house.type === "row")?.index).toBe(5);
    expect(getCellHouses(54).find((house) => house.type === "row")?.index).toBe(6);
    expect(getCellHouses(55).find((house) => house.type === "row")?.index).toBe(6);
    expect(getCellHouses(56).find((house) => house.type === "row")?.index).toBe(6);
    expect(getCellHouses(57).find((house) => house.type === "row")?.index).toBe(6);
    expect(getCellHouses(58).find((house) => house.type === "row")?.index).toBe(6);
    expect(getCellHouses(59).find((house) => house.type === "row")?.index).toBe(6);
    expect(getCellHouses(60).find((house) => house.type === "row")?.index).toBe(6);
    expect(getCellHouses(61).find((house) => house.type === "row")?.index).toBe(6);
    expect(getCellHouses(62).find((house) => house.type === "row")?.index).toBe(6);
    expect(getCellHouses(63).find((house) => house.type === "row")?.index).toBe(7);
    expect(getCellHouses(64).find((house) => house.type === "row")?.index).toBe(7);
    expect(getCellHouses(65).find((house) => house.type === "row")?.index).toBe(7);
    expect(getCellHouses(66).find((house) => house.type === "row")?.index).toBe(7);
    expect(getCellHouses(67).find((house) => house.type === "row")?.index).toBe(7);
    expect(getCellHouses(68).find((house) => house.type === "row")?.index).toBe(7);
    expect(getCellHouses(69).find((house) => house.type === "row")?.index).toBe(7);
    expect(getCellHouses(70).find((house) => house.type === "row")?.index).toBe(7);
    expect(getCellHouses(71).find((house) => house.type === "row")?.index).toBe(7);
    expect(getCellHouses(72).find((house) => house.type === "row")?.index).toBe(8);
    expect(getCellHouses(73).find((house) => house.type === "row")?.index).toBe(8);
    expect(getCellHouses(74).find((house) => house.type === "row")?.index).toBe(8);
    expect(getCellHouses(75).find((house) => house.type === "row")?.index).toBe(8);
    expect(getCellHouses(76).find((house) => house.type === "row")?.index).toBe(8);
    expect(getCellHouses(77).find((house) => house.type === "row")?.index).toBe(8);
    expect(getCellHouses(78).find((house) => house.type === "row")?.index).toBe(8);
    expect(getCellHouses(79).find((house) => house.type === "row")?.index).toBe(8);
    expect(getCellHouses(80).find((house) => house.type === "row")?.index).toBe(8);
  });

  it("returns the column of a cell", () => {
    expect(getCellHouses(0).find((house) => house.type === "col")?.index).toBe(0);
    expect(getCellHouses(1).find((house) => house.type === "col")?.index).toBe(1);
    expect(getCellHouses(2).find((house) => house.type === "col")?.index).toBe(2);
    expect(getCellHouses(3).find((house) => house.type === "col")?.index).toBe(3);
    expect(getCellHouses(4).find((house) => house.type === "col")?.index).toBe(4);
    expect(getCellHouses(5).find((house) => house.type === "col")?.index).toBe(5);
    expect(getCellHouses(6).find((house) => house.type === "col")?.index).toBe(6);
    expect(getCellHouses(7).find((house) => house.type === "col")?.index).toBe(7);
    expect(getCellHouses(8).find((house) => house.type === "col")?.index).toBe(8);
    expect(getCellHouses(9).find((house) => house.type === "col")?.index).toBe(0);
    expect(getCellHouses(10).find((house) => house.type === "col")?.index).toBe(1);
    expect(getCellHouses(11).find((house) => house.type === "col")?.index).toBe(2);
    expect(getCellHouses(12).find((house) => house.type === "col")?.index).toBe(3);
    expect(getCellHouses(13).find((house) => house.type === "col")?.index).toBe(4);
    expect(getCellHouses(14).find((house) => house.type === "col")?.index).toBe(5);
    expect(getCellHouses(15).find((house) => house.type === "col")?.index).toBe(6);
    expect(getCellHouses(16).find((house) => house.type === "col")?.index).toBe(7);
    expect(getCellHouses(17).find((house) => house.type === "col")?.index).toBe(8);
    expect(getCellHouses(18).find((house) => house.type === "col")?.index).toBe(0);
    expect(getCellHouses(19).find((house) => house.type === "col")?.index).toBe(1);
    expect(getCellHouses(20).find((house) => house.type === "col")?.index).toBe(2);
    expect(getCellHouses(21).find((house) => house.type === "col")?.index).toBe(3);
    expect(getCellHouses(22).find((house) => house.type === "col")?.index).toBe(4);
    expect(getCellHouses(23).find((house) => house.type === "col")?.index).toBe(5);
    expect(getCellHouses(24).find((house) => house.type === "col")?.index).toBe(6);
    expect(getCellHouses(25).find((house) => house.type === "col")?.index).toBe(7);
    expect(getCellHouses(26).find((house) => house.type === "col")?.index).toBe(8);
    expect(getCellHouses(27).find((house) => house.type === "col")?.index).toBe(0);
    expect(getCellHouses(28).find((house) => house.type === "col")?.index).toBe(1);
    expect(getCellHouses(29).find((house) => house.type === "col")?.index).toBe(2);
    expect(getCellHouses(30).find((house) => house.type === "col")?.index).toBe(3);
    expect(getCellHouses(31).find((house) => house.type === "col")?.index).toBe(4);
    expect(getCellHouses(32).find((house) => house.type === "col")?.index).toBe(5);
    expect(getCellHouses(33).find((house) => house.type === "col")?.index).toBe(6);
    expect(getCellHouses(34).find((house) => house.type === "col")?.index).toBe(7);
    expect(getCellHouses(35).find((house) => house.type === "col")?.index).toBe(8);
    expect(getCellHouses(36).find((house) => house.type === "col")?.index).toBe(0);
    expect(getCellHouses(37).find((house) => house.type === "col")?.index).toBe(1);
    expect(getCellHouses(38).find((house) => house.type === "col")?.index).toBe(2);
    expect(getCellHouses(39).find((house) => house.type === "col")?.index).toBe(3);
    expect(getCellHouses(40).find((house) => house.type === "col")?.index).toBe(4);
    expect(getCellHouses(41).find((house) => house.type === "col")?.index).toBe(5);
    expect(getCellHouses(42).find((house) => house.type === "col")?.index).toBe(6);
    expect(getCellHouses(43).find((house) => house.type === "col")?.index).toBe(7);
    expect(getCellHouses(44).find((house) => house.type === "col")?.index).toBe(8);
    expect(getCellHouses(45).find((house) => house.type === "col")?.index).toBe(0);
    expect(getCellHouses(46).find((house) => house.type === "col")?.index).toBe(1);
    expect(getCellHouses(47).find((house) => house.type === "col")?.index).toBe(2);
    expect(getCellHouses(48).find((house) => house.type === "col")?.index).toBe(3);
    expect(getCellHouses(49).find((house) => house.type === "col")?.index).toBe(4);
    expect(getCellHouses(50).find((house) => house.type === "col")?.index).toBe(5);
    expect(getCellHouses(51).find((house) => house.type === "col")?.index).toBe(6);
    expect(getCellHouses(52).find((house) => house.type === "col")?.index).toBe(7);
    expect(getCellHouses(53).find((house) => house.type === "col")?.index).toBe(8);
    expect(getCellHouses(54).find((house) => house.type === "col")?.index).toBe(0);
    expect(getCellHouses(55).find((house) => house.type === "col")?.index).toBe(1);
    expect(getCellHouses(56).find((house) => house.type === "col")?.index).toBe(2);
    expect(getCellHouses(57).find((house) => house.type === "col")?.index).toBe(3);
    expect(getCellHouses(58).find((house) => house.type === "col")?.index).toBe(4);
    expect(getCellHouses(59).find((house) => house.type === "col")?.index).toBe(5);
    expect(getCellHouses(60).find((house) => house.type === "col")?.index).toBe(6);
    expect(getCellHouses(61).find((house) => house.type === "col")?.index).toBe(7);
    expect(getCellHouses(62).find((house) => house.type === "col")?.index).toBe(8);
    expect(getCellHouses(63).find((house) => house.type === "col")?.index).toBe(0);
    expect(getCellHouses(64).find((house) => house.type === "col")?.index).toBe(1);
    expect(getCellHouses(65).find((house) => house.type === "col")?.index).toBe(2);
    expect(getCellHouses(66).find((house) => house.type === "col")?.index).toBe(3);
    expect(getCellHouses(67).find((house) => house.type === "col")?.index).toBe(4);
    expect(getCellHouses(68).find((house) => house.type === "col")?.index).toBe(5);
    expect(getCellHouses(69).find((house) => house.type === "col")?.index).toBe(6);
    expect(getCellHouses(70).find((house) => house.type === "col")?.index).toBe(7);
    expect(getCellHouses(71).find((house) => house.type === "col")?.index).toBe(8);
    expect(getCellHouses(72).find((house) => house.type === "col")?.index).toBe(0);
    expect(getCellHouses(73).find((house) => house.type === "col")?.index).toBe(1);
    expect(getCellHouses(74).find((house) => house.type === "col")?.index).toBe(2);
    expect(getCellHouses(75).find((house) => house.type === "col")?.index).toBe(3);
    expect(getCellHouses(76).find((house) => house.type === "col")?.index).toBe(4);
    expect(getCellHouses(77).find((house) => house.type === "col")?.index).toBe(5);
    expect(getCellHouses(78).find((house) => house.type === "col")?.index).toBe(6);
    expect(getCellHouses(79).find((house) => house.type === "col")?.index).toBe(7);
    expect(getCellHouses(80).find((house) => house.type === "col")?.index).toBe(8);
  });

  it("returns the box of a cell", () => {
    expect(getCellHouses(0).find((house) => house.type === "box")?.index).toBe(0);
    expect(getCellHouses(1).find((house) => house.type === "box")?.index).toBe(0);
    expect(getCellHouses(2).find((house) => house.type === "box")?.index).toBe(0);
    expect(getCellHouses(3).find((house) => house.type === "box")?.index).toBe(1);
    expect(getCellHouses(4).find((house) => house.type === "box")?.index).toBe(1);
    expect(getCellHouses(5).find((house) => house.type === "box")?.index).toBe(1);
    expect(getCellHouses(6).find((house) => house.type === "box")?.index).toBe(2);
    expect(getCellHouses(7).find((house) => house.type === "box")?.index).toBe(2);
    expect(getCellHouses(8).find((house) => house.type === "box")?.index).toBe(2);
    expect(getCellHouses(9).find((house) => house.type === "box")?.index).toBe(0);
    expect(getCellHouses(10).find((house) => house.type === "box")?.index).toBe(0);
    expect(getCellHouses(11).find((house) => house.type === "box")?.index).toBe(0);
    expect(getCellHouses(12).find((house) => house.type === "box")?.index).toBe(1);
    expect(getCellHouses(13).find((house) => house.type === "box")?.index).toBe(1);
    expect(getCellHouses(14).find((house) => house.type === "box")?.index).toBe(1);
    expect(getCellHouses(15).find((house) => house.type === "box")?.index).toBe(2);
    expect(getCellHouses(16).find((house) => house.type === "box")?.index).toBe(2);
    expect(getCellHouses(17).find((house) => house.type === "box")?.index).toBe(2);
    expect(getCellHouses(18).find((house) => house.type === "box")?.index).toBe(0);
    expect(getCellHouses(19).find((house) => house.type === "box")?.index).toBe(0);
    expect(getCellHouses(20).find((house) => house.type === "box")?.index).toBe(0);
    expect(getCellHouses(21).find((house) => house.type === "box")?.index).toBe(1);
    expect(getCellHouses(22).find((house) => house.type === "box")?.index).toBe(1);
    expect(getCellHouses(23).find((house) => house.type === "box")?.index).toBe(1);
    expect(getCellHouses(24).find((house) => house.type === "box")?.index).toBe(2);
    expect(getCellHouses(25).find((house) => house.type === "box")?.index).toBe(2);
    expect(getCellHouses(26).find((house) => house.type === "box")?.index).toBe(2);
    expect(getCellHouses(27).find((house) => house.type === "box")?.index).toBe(3);
    expect(getCellHouses(28).find((house) => house.type === "box")?.index).toBe(3);
    expect(getCellHouses(29).find((house) => house.type === "box")?.index).toBe(3);
    expect(getCellHouses(30).find((house) => house.type === "box")?.index).toBe(4);
    expect(getCellHouses(31).find((house) => house.type === "box")?.index).toBe(4);
    expect(getCellHouses(32).find((house) => house.type === "box")?.index).toBe(4);
    expect(getCellHouses(33).find((house) => house.type === "box")?.index).toBe(5);
    expect(getCellHouses(34).find((house) => house.type === "box")?.index).toBe(5);
    expect(getCellHouses(35).find((house) => house.type === "box")?.index).toBe(5);
    expect(getCellHouses(36).find((house) => house.type === "box")?.index).toBe(3);
    expect(getCellHouses(37).find((house) => house.type === "box")?.index).toBe(3);
    expect(getCellHouses(38).find((house) => house.type === "box")?.index).toBe(3);
    expect(getCellHouses(39).find((house) => house.type === "box")?.index).toBe(4);
    expect(getCellHouses(40).find((house) => house.type === "box")?.index).toBe(4);
    expect(getCellHouses(41).find((house) => house.type === "box")?.index).toBe(4);
    expect(getCellHouses(42).find((house) => house.type === "box")?.index).toBe(5);
    expect(getCellHouses(43).find((house) => house.type === "box")?.index).toBe(5);
    expect(getCellHouses(44).find((house) => house.type === "box")?.index).toBe(5);
    expect(getCellHouses(45).find((house) => house.type === "box")?.index).toBe(3);
    expect(getCellHouses(46).find((house) => house.type === "box")?.index).toBe(3);
    expect(getCellHouses(47).find((house) => house.type === "box")?.index).toBe(3);
    expect(getCellHouses(48).find((house) => house.type === "box")?.index).toBe(4);
    expect(getCellHouses(49).find((house) => house.type === "box")?.index).toBe(4);
    expect(getCellHouses(50).find((house) => house.type === "box")?.index).toBe(4);
    expect(getCellHouses(51).find((house) => house.type === "box")?.index).toBe(5);
    expect(getCellHouses(52).find((house) => house.type === "box")?.index).toBe(5);
    expect(getCellHouses(53).find((house) => house.type === "box")?.index).toBe(5);
    expect(getCellHouses(54).find((house) => house.type === "box")?.index).toBe(6);
    expect(getCellHouses(55).find((house) => house.type === "box")?.index).toBe(6);
    expect(getCellHouses(56).find((house) => house.type === "box")?.index).toBe(6);
    expect(getCellHouses(57).find((house) => house.type === "box")?.index).toBe(7);
    expect(getCellHouses(58).find((house) => house.type === "box")?.index).toBe(7);
    expect(getCellHouses(59).find((house) => house.type === "box")?.index).toBe(7);
    expect(getCellHouses(60).find((house) => house.type === "box")?.index).toBe(8);
    expect(getCellHouses(61).find((house) => house.type === "box")?.index).toBe(8);
    expect(getCellHouses(62).find((house) => house.type === "box")?.index).toBe(8);
    expect(getCellHouses(63).find((house) => house.type === "box")?.index).toBe(6);
    expect(getCellHouses(64).find((house) => house.type === "box")?.index).toBe(6);
    expect(getCellHouses(65).find((house) => house.type === "box")?.index).toBe(6);
    expect(getCellHouses(66).find((house) => house.type === "box")?.index).toBe(7);
    expect(getCellHouses(67).find((house) => house.type === "box")?.index).toBe(7);
    expect(getCellHouses(68).find((house) => house.type === "box")?.index).toBe(7);
    expect(getCellHouses(69).find((house) => house.type === "box")?.index).toBe(8);
    expect(getCellHouses(70).find((house) => house.type === "box")?.index).toBe(8);
    expect(getCellHouses(71).find((house) => house.type === "box")?.index).toBe(8);
    expect(getCellHouses(72).find((house) => house.type === "box")?.index).toBe(6);
    expect(getCellHouses(73).find((house) => house.type === "box")?.index).toBe(6);
    expect(getCellHouses(74).find((house) => house.type === "box")?.index).toBe(6);
    expect(getCellHouses(75).find((house) => house.type === "box")?.index).toBe(7);
    expect(getCellHouses(76).find((house) => house.type === "box")?.index).toBe(7);
    expect(getCellHouses(77).find((house) => house.type === "box")?.index).toBe(7);
    expect(getCellHouses(78).find((house) => house.type === "box")?.index).toBe(8);
    expect(getCellHouses(79).find((house) => house.type === "box")?.index).toBe(8);
    expect(getCellHouses(80).find((house) => house.type === "box")?.index).toBe(8);
  });
});

describe("isValidHouse", () => {
  test("House without duplicate is valid", () => {
    const grid = parseGrid(`
      .------------------.------------------.------------------.
      | 19    7     169  | 2     156   3    | 459   8     49   |
      | 3     4     5    | 7     9     8    | 1     2     6    |
      | 2     169   8    | 16    4     156  | 3579  35    379  |
      :------------------+------------------+------------------:
      | 4     136   1367 | 5     1367  9    | 8     36    2    |
      | 17    5     12367| 8     12367 4    | 367   9     37   |
      | 8     369   23679| 36    2367  26   | 34567 3456  1    |
      :------------------+------------------+------------------:
      | 1579  139   13479| 13469 12356 1256 | 23469 346   8    |
      | 159   8     1349 | 13469 12356 1256 | 23469 7     349  |
      | 6     2     349  | 349   8     7    | 349   1     5    |
      '------------------'------------------'------------------'`);

    expect(grid).toBeTruthy();

    if (grid) {
      const isValid = isValidHouse({
        grid,
        house: HOUSES_LIST[0],
      });

      expect(isValid).toBe(true);
    }
  });

  test("House with duplicate is not valid", () => {
    const grid = parseGrid(`
      .------------------.------------------.------------------.
      | 19    7     169  | 2     7     3    | 459   8     49   |
      | 3     4     5    | 7     9     8    | 1     2     6    |
      | 2     169   8    | 16    4     156  | 3579  35    379  |
      :------------------+------------------+------------------:
      | 4     136   1367 | 5     1367  9    | 8     36    2    |
      | 17    5     12367| 8     12367 4    | 367   9     37   |
      | 8     369   23679| 36    2367  26   | 34567 3456  1    |
      :------------------+------------------+------------------:
      | 1579  139   13479| 13469 12356 1256 | 23469 346   8    |
      | 159   8     1349 | 13469 12356 1256 | 23469 7     349  |
      | 6     2     349  | 349   8     7    | 349   1     5    |
      '------------------'------------------'------------------'`);

    expect(grid).toBeTruthy();

    if (grid) {
      const isValid = isValidHouse({
        grid,
        house: HOUSES_LIST[0],
      });

      expect(isValid).toBe(false);
    }
  });
});
