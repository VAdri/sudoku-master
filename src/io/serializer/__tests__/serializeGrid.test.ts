import { parseGrid } from "../parser";
import { serializeGrid, SerializerOptions, getColumnsLengths } from "../serializer";
import { SudokuGrid } from "../../types";

describe("getColumnsLengths", () => {
  it("returns the length of all the columns according to their pencilmarks", () => {
    const grid = parseGrid(
      "+------------------+----------------------+------------------+\n" +
        "| 1579  2     3    | 4      16     19     | 8    579   159   |\n" +
        "| 6     189   149  | 289    128    7      | 3459 459   13459 |\n" +
        "| 1479  1789  1479 | 5      3      189    | 6    2     149   |\n" +
        "+------------------+----------------------+------------------+\n" +
        "| 12379 13679 5    | 236789 124678 123489 | 479  4789  2489  |\n" +
        "| 8     4     179  | 279    1257   129    | 579  3     6     |\n" +
        "| 2379  3679  679  | 236789 245678 23489  | 1    45789 24589 |\n" +
        "+------------------+----------------------+------------------+\n" +
        "| 1347  5     2    | 378    9      6      | 34   48    348   |\n" +
        "| 349   369   469  | 1      248    2348   | 3459 45689 7     |\n" +
        "| 3479  3679  8    | 37     47     5      | 2    1     349   |\n" +
        "+------------------+----------------------+------------------+",
    );

    expect(grid).not.toBeNull();
    if (grid) {
      const columnsLengths = getColumnsLengths(grid.candidates);
      expect(columnsLengths).toHaveLength(9);
      expect(columnsLengths[0]).toBe(5);
      expect(columnsLengths[1]).toBe(5);
      expect(columnsLengths[2]).toBe(4);
      expect(columnsLengths[3]).toBe(6);
      expect(columnsLengths[4]).toBe(6);
      expect(columnsLengths[5]).toBe(6);
      expect(columnsLengths[6]).toBe(4);
      expect(columnsLengths[7]).toBe(5);
      expect(columnsLengths[8]).toBe(5);
    }
  });

  it("returns a length of 1 for every columns when there is no pencilmark", () => {
    const grid = parseGrid(
      "+---+---+---+\n" +
        "|023|400|800|\n" +
        "|600|007|000|\n" +
        "|000|530|620|\n" +
        "+---+---+---+\n" +
        "|005|000|000|\n" +
        "|840|000|036|\n" +
        "|000|000|100|\n" +
        "+---+---+---+\n" +
        "|052|096|000|\n" +
        "|000|100|007|\n" +
        "|008|005|210|\n" +
        "+---+---+---+",
    );

    expect(grid).not.toBeNull();
    if (grid) {
      const columnsLengths = getColumnsLengths(grid.candidates);
      expect(columnsLengths).toHaveLength(9);
      columnsLengths.forEach((column) => {
        expect(column).toBe(1);
      });
    }
  });
});

describe("Serializing a valid input", () => {
  let inputGrid: string;
  let options: SerializerOptions;

  it("serializes a single line without pencilmarks", () => {
    inputGrid = ".234..8..6....7......53.62...5......84.....36......1...52.96......1....7..8..521.";
    options = {
      style: "singleLine",
      emptyCellSymbol: ".",
    };
  });

  it("serializes a single line with pencilmarks separated by spaces", () => {
    inputGrid =
      "1579 2 3 4 16 19 8 579 159 6 189 149 289 128 7 3459 459 13459 1479 1789 1479 5 3 189 6 2 149 12379 13679 5 236789 124678 123489 479 4789 2489 8 4 179 279 1257 129 579 3 6 2379 3679 679 236789 245678 23489 1 45789 24589 1347 5 2 378 9 6 34 48 348 349 369 469 1 248 2348 3459 45689 7 3479 3679 8 37 47 5 2 1 349";
    options = {
      style: "singleLine",
      pencilmarks: true,
    };
  });

  it("serializes a single line with pencilmarks surrounded by brackets", () => {
    inputGrid =
      "{1579}{2}{3}{4}{16}{19}{8}{579}{159}{6}{189}{149}{289}{128}{7}{3459}{459}{13459}{1479}{1789}{1479}{5}{3}{189}{6}{2}{149}{12379}{13679}{5}{236789}{124678}{123489}{479}{4789}{2489}{8}{4}{179}{279}{1257}{129}{579}{3}{6}{2379}{3679}{679}{236789}{245678}{23489}{1}{45789}{24589}{1347}{5}{2}{378}{9}{6}{34}{48}{348}{349}{369}{469}{1}{248}{2348}{3459}{45689}{7}{3479}{3679}{8}{37}{47}{5}{2}{1}{349}";
    options = {
      style: "singleLine",
      pencilmarks: true,
      brackets: "{}",
    };
  });

  it("serializes multiple lines without pencilmarks", () => {
    inputGrid =
      "-234--8--\n" +
      "6----7---\n" +
      "---53-62-\n" +
      "--5------\n" +
      "84-----36\n" +
      "------1--\n" +
      "-52-96---\n" +
      "---1----7\n" +
      "--8--521-";
    options = {
      style: "multiLines",
      emptyCellSymbol: "-",
    };
  });

  it("serializes multiple lines with pencilmarks separated by spaces", () => {
    inputGrid =
      "1579 2 3 4 16 19 8 579 159\n" +
      "6 189 149 289 128 7 3459 459 13459\n" +
      "1479 1789 1479 5 3 189 6 2 149\n" +
      "12379 13679 5 236789 124678 123489 479 4789 2489\n" +
      "8 4 179 279 1257 129 579 3 6\n" +
      "2379 3679 679 236789 245678 23489 1 45789 24589\n" +
      "1347 5 2 378 9 6 34 48 348\n" +
      "349 369 469 1 248 2348 3459 45689 7\n" +
      "3479 3679 8 37 47 5 2 1 349";
    options = {
      style: "multiLines",
      pencilmarks: true,
    };
  });

  it("serializes a grid without pencilmarks", () => {
    inputGrid =
      "+---+---+---+\n" +
      "|023|400|800|\n" +
      "|600|007|000|\n" +
      "|000|530|620|\n" +
      "+---+---+---+\n" +
      "|005|000|000|\n" +
      "|840|000|036|\n" +
      "|000|000|100|\n" +
      "+---+---+---+\n" +
      "|052|096|000|\n" +
      "|000|100|007|\n" +
      "|008|005|210|\n" +
      "+---+---+---+";
    options = {
      style: "grid",
      emptyCellSymbol: "0",
    };
  });

  it("serializes a grid with pencilmarks", () => {
    inputGrid =
      "+------------------+----------------------+------------------+\n" +
      "| 1579  2     3    | 4      16     19     | 8    579   159   |\n" +
      "| 6     189   149  | 289    128    7      | 3459 459   13459 |\n" +
      "| 1479  1789  1479 | 5      3      189    | 6    2     149   |\n" +
      "+------------------+----------------------+------------------+\n" +
      "| 12379 13679 5    | 236789 124678 123489 | 479  4789  2489  |\n" +
      "| 8     4     179  | 279    1257   129    | 579  3     6     |\n" +
      "| 2379  3679  679  | 236789 245678 23489  | 1    45789 24589 |\n" +
      "+------------------+----------------------+------------------+\n" +
      "| 1347  5     2    | 378    9      6      | 34   48    348   |\n" +
      "| 349   369   469  | 1      248    2348   | 3459 45689 7     |\n" +
      "| 3479  3679  8    | 37     47     5      | 2    1     349   |\n" +
      "+------------------+----------------------+------------------+";
    options = {
      style: "grid",
      pencilmarks: true,
    };
  });

  it("serializes a grid with pencilmarks like in sudopedia", () => {
    inputGrid =
      ".------------------.----------------------.------------------.\n" +
      "| 1579  2     3    | 4      16     19     | 8    579   159   |\n" +
      "| 6     189   149  | 289    128    7      | 3459 459   13459 |\n" +
      "| 1479  1789  1479 | 5      3      189    | 6    2     149   |\n" +
      ":------------------+----------------------+------------------:\n" +
      "| 12379 13679 5    | 236789 124678 123489 | 479  4789  2489  |\n" +
      "| 8     4     179  | 279    1257   129    | 579  3     6     |\n" +
      "| 2379  3679  679  | 236789 245678 23489  | 1    45789 24589 |\n" +
      ":------------------+----------------------+------------------:\n" +
      "| 1347  5     2    | 378    9      6      | 34   48    348   |\n" +
      "| 349   369   469  | 1      248    2348   | 3459 45689 7     |\n" +
      "| 3479  3679  8    | 37     47     5      | 2    1     349   |\n" +
      "'------------------'----------------------'------------------'";
    options = {
      style: "sudopedia",
      pencilmarks: true,
    };
  });

  afterEach(() => {
    expect(serializeGrid(parseGrid(inputGrid) as SudokuGrid, options)).toBe(inputGrid);
  });
});
