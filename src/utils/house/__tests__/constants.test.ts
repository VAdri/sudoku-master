import { SudokuGrid, House, VALID_HOUSE_INDEXES } from "../../../types";
import { parseGrid } from "../../../io/parser";
import { HOUSES_LIST } from "../constants";

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
