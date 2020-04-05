import { parseGrid } from "../parser";
import { SudokuGrid } from "../../types";

describe("Parse valid strings with empty cells", () => {
  let grid: SudokuGrid | null;

  test("Single line with dots", () => {
    grid = parseGrid(".234..8..6....7......53.62...5......84.....36......1...52.96......1....7..8..521.");
  });

  test("Single line with zeros", () => {
    grid = parseGrid("023400800600007000000530620005000000840000036000000100052096000000100007008005210");
  });

  test("Single line with hyphens", () => {
    grid = parseGrid("-234--8--6----7------53-62---5------84-----36------1---52-96------1----7--8--521-");
  });

  test("Single line with stars", () => {
    grid = parseGrid("*234**8**6****7******53*62***5******84*****36******1***52*96******1****7**8**521*");
  });

  test("Grid without grid lines", () => {
    grid = parseGrid(`
      .234..8..
      6....7...
      ...53.62.
      ..5......
      84.....36
      ......1..
      .52.96...
      ...1....7
      ..8..521.
    `);
  });

  test("Grid with grid lines", () => {
    grid = parseGrid(`
      +---+---+---+
      |*23|4**|8**|
      |6**|**7|***|
      |***|53*|62*|
      +---+---+---+
      |**5|***|***|
      |84*|***|*36|
      |***|***|1**|
      +---+---+---+
      |*52|*96|***|
      |***|1**|**7|
      |**8|**5|21*|
      +---+---+---+
    `);
  });

  afterEach(() => {
    // Validity
    expect(grid).not.toBeNull();
    if (grid === null) {
      return;
    }

    // Length
    expect(grid.digits.size).toBe(26);
    expect(grid.candidates.size).toBe(0);

    // Keys
    expect(grid.digits.has(0)).toBe(false);
    expect(grid.digits.has(1)).toBe(true);
    expect(grid.candidates.has(0)).toBe(false);
    expect(grid.candidates.has(1)).toBe(false);

    // Row 1
    expect(grid.digits.get(1)).toBe(2);
    expect(grid.digits.get(2)).toBe(3);
    expect(grid.digits.get(3)).toBe(4);
    expect(grid.digits.get(6)).toBe(8);

    // Row 2
    expect(grid.digits.get(9)).toBe(6);
    expect(grid.digits.get(14)).toBe(7);

    // Row 3
    expect(grid.digits.get(21)).toBe(5);
    expect(grid.digits.get(22)).toBe(3);
    expect(grid.digits.get(24)).toBe(6);
    expect(grid.digits.get(25)).toBe(2);

    // Row 4
    expect(grid.digits.get(29)).toBe(5);

    // Row 5
    expect(grid.digits.get(36)).toBe(8);
    expect(grid.digits.get(37)).toBe(4);
    expect(grid.digits.get(43)).toBe(3);
    expect(grid.digits.get(44)).toBe(6);

    // Row 6
    expect(grid.digits.get(51)).toBe(1);

    // Row 7
    expect(grid.digits.get(55)).toBe(5);
    expect(grid.digits.get(56)).toBe(2);
    expect(grid.digits.get(58)).toBe(9);
    expect(grid.digits.get(59)).toBe(6);

    // Row 8
    expect(grid.digits.get(66)).toBe(1);
    expect(grid.digits.get(71)).toBe(7);

    // Row 9
    expect(grid.digits.get(74)).toBe(8);
    expect(grid.digits.get(77)).toBe(5);
    expect(grid.digits.get(78)).toBe(2);
    expect(grid.digits.get(79)).toBe(1);
  });
});

describe("Parse valid strings with pencilmarks", () => {
  let grid: SudokuGrid | null;

  test("Single line separated by spaces", () => {
    grid = parseGrid(
      "1579 2 3 4 16 19 8 579 159 6 189 149 289 128 7 3459 459 13459 1479 1789 1479 5 3 189 6 2 149 12379 13679 5 236789 124678 123489 479 4789 2489 8 4 179 279 1257 129 579 3 6 2379 3679 679 236789 245678 23489 1 45789 24589 1347 5 2 378 9 6 34 48 348 349 369 469 1 248 2348 3459 45689 7 3479 3679 8 37 47 5 2 1 349",
    );
  });

  test("Multiple lines separated by spaces", () => {
    grid = parseGrid(`
      1579 2 3 4 16 19 8 579 159
      6 189 149 289 128 7 3459 459 13459
      1479 1789 1479 5 3 189 6 2 149
      12379 13679 5 236789 124678 123489 479 4789 2489
      8 4 179 279 1257 129 579 3 6
      2379 3679 679 236789 245678 23489 1 45789 24589
      1347 5 2 378 9 6 34 48 348
      349 369 469 1 248 2348 3459 45689 7
      3479 3679 8 37 47 5 2 1 349
    `);
  });

  test("Multiple lines with all cells surrounded by brackets", () => {
    grid = parseGrid(`
      {1579}{2}{3}{4}{16}{19}{8}{579}{159}
      {6}{189}{149}{289}{128}{7}{3459}{459}{13459}
      {1479}{1789}{1479}{5}{3}{189}{6}{2}{149}
      {12379}{13679}{5}{236789}{124678}{123489}{479}{4789}{2489}
      {8}{4}{179}{279}{1257}{129}{579}{3}{6}
      {2379}{3679}{679}{236789}{245678}{23489}{1}{45789}{24589}
      {1347}{5}{2}{378}{9}{6}{34}{48}{348}
      {349}{369}{469}{1}{248}{2348}{3459}{45689}{7}
      {3479}{3679}{8}{37}{47}{5}{2}{1}{349}
    `);
  });

  test("Multiple lines with candidates surrounded by brackets", () => {
    grid = parseGrid(`
      (1579)234(16)(19)8(579)(159)
      6(189)(149)(289)(128)7(3459)(459)(13459)
      (1479)(1789)(1479)53(189)62(149)
      (12379)(13679)5(236789)(124678)(123489)(479)(4789)(2489)
      84(179)(279)(1257)(129)(579)36
      (2379)(3679)(679)(236789)(245678)(23489)1(45789)(24589)
      (1347)52(378)96(34)(48)(348)
      (349)(369)(469)1(248)(2348)(3459)(45689)7
      (3479)(3679)8(37)(47)521(349)
    `);
  });

  test("Grid with grid lines", () => {
    grid = parseGrid(`
      +----------------------+----------------------+----------------------+
      | 1579   2      3      | 4      16     19     | 8      579    159    |
      | 6      189    149    | 289    128    7      | 3459   459    13459  |
      | 1479   1789   1479   | 5      3      189    | 6      2      149    |
      +----------------------+----------------------+----------------------+
      | 12379  13679  5      | 236789 124678 123489 | 479    4789   2489   |
      | 8      4      179    | 279    1257   129    | 579    3      6      |
      | 2379   3679   679    | 236789 245678 23489  | 1      45789  24589  |
      +----------------------+----------------------+----------------------+
      | 1347   5      2      | 378    9      6      | 34     48     348    |
      | 349    369    469    | 1      248    2348   | 3459   45689  7      |
      | 3479   3679   8      | 37     47     5      | 2      1      349    |
      +----------------------+----------------------+----------------------+
    `);
  });

  test("Grid from sudopedia", () => {
    grid = parseGrid(`
      .----------------------.----------------------.----------------------.
      | 1579   2      3      | 4      16     19     | 8      579    159    |
      | 6      189    149    | 289    128    7      | 3459   459    13459  |
      | 1479   1789   1479   | 5      3      189    | 6      2      149    |
      :----------------------+---------------------- ----------------------:
      | 12379  13679  5      | 236789 124678 123489 | 479    4789   2489   |
      | 8      4      179    | 279    1257   129    | 579    3      6      |
      | 2379   3679   679    | 236789 245678 23489  | 1      45789  24589  |
      :---------------------- ----------------------+----------------------:
      | 1347   5      2      | 378    9      6      | 34     48     348    |
      | 349    369    469    | 1      248    2348   | 3459   45689  7      |
      | 3479   3679   8      | 37     47     5      | 2      1      349    |
      '----------------------'----------------------'----------------------'
    `);
  });

  afterEach(() => {
    // Validity
    expect(grid).not.toBeNull();
    if (grid === null) {
      return;
    }

    // Length
    expect(grid.digits.size).toBe(26);
    expect(grid.candidates.size).toBe(55);

    // Keys
    expect(grid.digits.has(0)).toBe(false);
    expect(grid.digits.has(1)).toBe(true);
    expect(grid.candidates.has(0)).toBe(true);
    expect(grid.candidates.has(1)).toBe(false);

    // Row 1
    expect(grid.candidates.get(0)).toStrictEqual([1, 5, 7, 9]);
    expect(grid.digits.get(1)).toBe(2);
    expect(grid.digits.get(2)).toBe(3);
    expect(grid.digits.get(3)).toBe(4);
    expect(grid.candidates.get(4)).toStrictEqual([1, 6]);
    expect(grid.candidates.get(5)).toStrictEqual([1, 9]);
    expect(grid.digits.get(6)).toBe(8);
    expect(grid.candidates.get(7)).toStrictEqual([5, 7, 9]);
    expect(grid.candidates.get(8)).toStrictEqual([1, 5, 9]);

    // Row 2
    expect(grid.digits.get(9)).toBe(6);
    expect(grid.candidates.get(10)).toStrictEqual([1, 8, 9]);
    expect(grid.candidates.get(11)).toStrictEqual([1, 4, 9]);
    expect(grid.candidates.get(12)).toStrictEqual([2, 8, 9]);
    expect(grid.candidates.get(13)).toStrictEqual([1, 2, 8]);
    expect(grid.digits.get(14)).toBe(7);
    expect(grid.candidates.get(15)).toStrictEqual([3, 4, 5, 9]);
    expect(grid.candidates.get(16)).toStrictEqual([4, 5, 9]);
    expect(grid.candidates.get(17)).toStrictEqual([1, 3, 4, 5, 9]);

    // Row 3
    expect(grid.candidates.get(18)).toStrictEqual([1, 4, 7, 9]);
    expect(grid.candidates.get(19)).toStrictEqual([1, 7, 8, 9]);
    expect(grid.candidates.get(20)).toStrictEqual([1, 4, 7, 9]);
    expect(grid.digits.get(21)).toBe(5);
    expect(grid.digits.get(22)).toBe(3);
    expect(grid.candidates.get(23)).toStrictEqual([1, 8, 9]);
    expect(grid.digits.get(24)).toBe(6);
    expect(grid.digits.get(25)).toBe(2);
    expect(grid.candidates.get(26)).toStrictEqual([1, 4, 9]);

    // Row 4
    expect(grid.candidates.get(27)).toStrictEqual([1, 2, 3, 7, 9]);
    expect(grid.candidates.get(28)).toStrictEqual([1, 3, 6, 7, 9]);
    expect(grid.digits.get(29)).toBe(5);
    expect(grid.candidates.get(30)).toStrictEqual([2, 3, 6, 7, 8, 9]);
    expect(grid.candidates.get(31)).toStrictEqual([1, 2, 4, 6, 7, 8]);
    expect(grid.candidates.get(32)).toStrictEqual([1, 2, 3, 4, 8, 9]);
    expect(grid.candidates.get(33)).toStrictEqual([4, 7, 9]);
    expect(grid.candidates.get(34)).toStrictEqual([4, 7, 8, 9]);
    expect(grid.candidates.get(35)).toStrictEqual([2, 4, 8, 9]);

    // Row 5
    expect(grid.digits.get(36)).toBe(8);
    expect(grid.digits.get(37)).toBe(4);
    expect(grid.candidates.get(38)).toStrictEqual([1, 7, 9]);
    expect(grid.candidates.get(39)).toStrictEqual([2, 7, 9]);
    expect(grid.candidates.get(40)).toStrictEqual([1, 2, 5, 7]);
    expect(grid.candidates.get(41)).toStrictEqual([1, 2, 9]);
    expect(grid.candidates.get(42)).toStrictEqual([5, 7, 9]);
    expect(grid.digits.get(43)).toBe(3);
    expect(grid.digits.get(44)).toBe(6);

    // Row 6
    expect(grid.candidates.get(45)).toStrictEqual([2, 3, 7, 9]);
    expect(grid.candidates.get(46)).toStrictEqual([3, 6, 7, 9]);
    expect(grid.candidates.get(47)).toStrictEqual([6, 7, 9]);
    expect(grid.candidates.get(48)).toStrictEqual([2, 3, 6, 7, 8, 9]);
    expect(grid.candidates.get(49)).toStrictEqual([2, 4, 5, 6, 7, 8]);
    expect(grid.candidates.get(50)).toStrictEqual([2, 3, 4, 8, 9]);
    expect(grid.digits.get(51)).toBe(1);
    expect(grid.candidates.get(52)).toStrictEqual([4, 5, 7, 8, 9]);
    expect(grid.candidates.get(53)).toStrictEqual([2, 4, 5, 8, 9]);

    // Row 7
    expect(grid.candidates.get(54)).toStrictEqual([1, 3, 4, 7]);
    expect(grid.digits.get(55)).toBe(5);
    expect(grid.digits.get(56)).toBe(2);
    expect(grid.candidates.get(57)).toStrictEqual([3, 7, 8]);
    expect(grid.digits.get(58)).toBe(9);
    expect(grid.digits.get(59)).toBe(6);
    expect(grid.candidates.get(60)).toStrictEqual([3, 4]);
    expect(grid.candidates.get(61)).toStrictEqual([4, 8]);
    expect(grid.candidates.get(62)).toStrictEqual([3, 4, 8]);

    // Row 8
    expect(grid.candidates.get(63)).toStrictEqual([3, 4, 9]);
    expect(grid.candidates.get(64)).toStrictEqual([3, 6, 9]);
    expect(grid.candidates.get(65)).toStrictEqual([4, 6, 9]);
    expect(grid.digits.get(66)).toBe(1);
    expect(grid.candidates.get(67)).toStrictEqual([2, 4, 8]);
    expect(grid.candidates.get(68)).toStrictEqual([2, 3, 4, 8]);
    expect(grid.candidates.get(69)).toStrictEqual([3, 4, 5, 9]);
    expect(grid.candidates.get(70)).toStrictEqual([4, 5, 6, 8, 9]);
    expect(grid.digits.get(71)).toBe(7);

    // Row 9
    expect(grid.candidates.get(72)).toStrictEqual([3, 4, 7, 9]);
    expect(grid.candidates.get(73)).toStrictEqual([3, 6, 7, 9]);
    expect(grid.digits.get(74)).toBe(8);
    expect(grid.candidates.get(75)).toStrictEqual([3, 7]);
    expect(grid.candidates.get(76)).toStrictEqual([4, 7]);
    expect(grid.digits.get(77)).toBe(5);
    expect(grid.digits.get(78)).toBe(2);
    expect(grid.digits.get(79)).toBe(1);
    expect(grid.candidates.get(80)).toStrictEqual([3, 4, 9]);
  });
});

describe("Parse invalid strings", () => {
  let grid: SudokuGrid | null;

  test("Single line with empty cells but too many characters", () => {
    grid = parseGrid(".234..8..6....7......53.62...5......84.....36......1...52.96......1....7..8..521..");
  });

  test("Single line separated by spaces with invalid digit", () => {
    grid = parseGrid(
      "1579 2 3 4 16 19 8 579 159 6 189 149 0 128 7 3459 459 13459 1479 1789 1479 5 3 189 6 2 149 12379 13679 5 236789 124678 123489 479 4789 2489 8 4 179 279 1257 129 579 3 6 2379 3679 679 236789 245678 23489 1 45789 24589 1347 5 2 378 9 6 34 48 348 349 369 469 1 248 2348 3459 45689 7 3479 3679 8 37 47 5 2 1 349",
    );
  });

  afterEach(() => {
    expect(grid).toBeNull();
  });
});
