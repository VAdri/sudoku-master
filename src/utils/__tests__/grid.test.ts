import { parseGrid } from "../..";
import { isValidGrid } from "../grid";

describe("isValidGrid", () => {
  test("Grid without invalid house is valid", () => {
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
      expect(isValidGrid(grid)).toBe(true);
    }
  });

  test("Grid with an invalid house is not valid", () => {
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
      | 1579  139   13479| 5     12356 1256 | 23469 346   8    |
      | 159   8     1349 | 13469 12356 1256 | 23469 7     349  |
      | 6     2     349  | 349   8     7    | 349   1     5    |
      '------------------'------------------'------------------'`);

    expect(grid).toBeTruthy();
    if (grid) {
      expect(isValidGrid(grid)).toBe(false);
    }
  });
});
