import { parseGrid } from "../../io/parser";
import { solveWithBacktracking } from "../bruteForce";
import { VALID_GRID_INDEXES } from "../../types";

describe("solveWithDFS", () => {
  const expectedSolution = parseGrid(`
    +---+---+---+
    |971|263|584|
    |345|798|126|
    |268|145|937|
    +---+---+---+
    |437|519|862|
    |156|824|793|
    |892|376|451|
    +---+---+---+
    |713|952|648|
    |584|631|279|
    |629|487|315|
    +---+---+---+`);

  it("solves a valid grid", () => {
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
    expect(expectedSolution).toBeTruthy();
    if (grid && expectedSolution) {
      const actualSolution = solveWithBacktracking(grid);
      expect(actualSolution).toBeTruthy();
      if (actualSolution) {
        expect(actualSolution.size).toBe(81);
        for (const index of VALID_GRID_INDEXES) {
          expect(actualSolution.get(index)).toBe(expectedSolution.digits.get(index));
        }
      }
    }
  });

  it("solves a grid without pencilmarks", () => {
    const grid = parseGrid(`
      +---+---+---+
      |-7-|2-3|-8-|
      |345|798|126|
      |2-8|-4-|---|
      +---+---+---+
      |4--|5-9|8-2|
      |-5-|8-4|-9-|
      |8--|---|--1|
      +---+---+---+
      |---|---|--8|
      |-8-|---|-7-|
      |62-|-87|-15|
      +---+---+---+`);

    expect(grid).toBeTruthy();
    expect(expectedSolution).toBeTruthy();
    if (grid && expectedSolution) {
      const actualSolution = solveWithBacktracking(grid);
      expect(actualSolution).toBeTruthy();
      if (actualSolution) {
        expect(actualSolution.size).toBe(81);
        for (const index of VALID_GRID_INDEXES) {
          expect(actualSolution.get(index)).toBe(expectedSolution.digits.get(index));
        }
      }
    }
  });

  it("solves a complete grid", () => {
    const grid = parseGrid(`
      +---+---+---+
      |971|263|584|
      |345|798|126|
      |268|145|937|
      +---+---+---+
      |437|519|862|
      |156|824|793|
      |892|376|451|
      +---+---+---+
      |713|952|648|
      |584|631|279|
      |629|487|315|
      +---+---+---+`);

    expect(grid).toBeTruthy();
    if (grid) {
      const actualSolution = solveWithBacktracking(grid);
      expect(actualSolution).toBeTruthy();
      if (actualSolution) {
        expect(actualSolution.size).toBe(81);
        for (const index of VALID_GRID_INDEXES) {
          expect(actualSolution.get(index)).toBe(grid.digits.get(index));
        }
      }
    }
  });

  it("doesn't solve an invalid grid (with duplicates)", () => {
    const grid = parseGrid(`
      .------------------.------------------.------------------.
      | 19    7     169  | 2     156   3    | 459   8     49   |
      | 3     4     5    | 7     9     8    | 1     2     6    |
      | 2     169   8    | 16    4     156  | 3579  35    379  |
      :------------------+------------------+------------------:
      | 4     136   1367 | 5     1367  9    | 8     36    2    |
      | 17    5     12367| 8     12367 4    | 367   9     37   |
      | 8     7     23679| 36    2367  26   | 34567 3456  1    |
      :------------------+------------------+------------------:
      | 1579  139   13479| 13469 12356 1256 | 23469 346   8    |
      | 159   8     1349 | 13469 12356 1256 | 23469 7     349  |
      | 6     2     349  | 349   8     7    | 349   1     5    |
      '------------------'------------------'------------------'`);

    expect(grid).toBeTruthy();
    if (grid) {
      const actualSolution = solveWithBacktracking(grid);
      expect(actualSolution).toBeUndefined();
    }
  });

  it("doesn't solve an incorrect grid (with misplaced digits)", () => {
    const grid = parseGrid(`
      .------------------.------------------.------------------.
      | 19    7     169  | 2     156   3    | 59    8     49   |
      | 3     4     5    | 7     9     8    | 1     2     6    |
      | 2     169   8    | 16    4     156  | 3579  35    379  |
      :------------------+------------------+------------------:
      | 4     136   1367 | 5     1367  9    | 8     36    2    |
      | 17    5     12367| 8     12367 4    | 367   9     37   |
      | 8     369   23679| 36    2367  26   | 3567  3456  1    |
      :------------------+------------------+------------------:
      | 1579  139   13479| 13469 12356 1256 | 2369  36    8    |
      | 159   8     1349 | 13469 12356 1256 | 2369  7     39   |
      | 6     2     39   | 39    8     7    | 4     1     5    |
      '------------------'------------------'------------------'`);

    expect(grid).toBeTruthy();
    if (grid) {
      const actualSolution = solveWithBacktracking(grid);
      expect(actualSolution).toBeUndefined();
    }
  });
});
