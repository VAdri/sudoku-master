import { Brackets, EMPTY_CELL_SYMBOLS, EmptyCellSymbol } from "./types";
import {
  Digit,
  GridIndex,
  HouseIndex,
  Pencilmarks,
  SudokuGrid,
  VALID_CELL_INDEXES,
  VALID_GRID_INDEXES,
  VALID_HOUSE_INDEXES,
} from "../types";
import { applyByIndex, groupN } from "../utils/fp";
import { getCellCol, getCellIndexInGrid } from "../utils/house";
import { T, always, append, cond, insert, is, join, prepend, repeat, replace, sum } from "ramda";
import { equals, map, pipe, reduce } from "remeda";

export const SERIALIZER_STYLES = ["singleLine", "multiLines", "grid", "sudopedia"] as const;
export type SerializeStyle = typeof SERIALIZER_STYLES[number];

type SerializerOptionsWithPencilmarks = {
  readonly style?: SerializeStyle;
  readonly pencilmarks: true;
  readonly brackets?: Brackets;
};

export type SerializerOptionsWithoutPencilmarks = {
  readonly style?: Exclude<SerializeStyle, "sudopedia">;
  readonly pencilmarks?: false;
  readonly emptyCellSymbol?: EmptyCellSymbol;
};

export type SerializerOptions = SerializerOptionsWithPencilmarks | SerializerOptionsWithoutPencilmarks;

type Row3ColCellsLength = readonly [number, number, number];
type Row3ColLength = readonly [Row3ColCellsLength, Row3ColCellsLength, Row3ColCellsLength];
type CellsLengths = readonly [
  Row3ColLength,
  Row3ColLength,
  Row3ColLength,
  Row3ColLength,
  Row3ColLength,
  Row3ColLength,
  Row3ColLength,
  Row3ColLength,
  Row3ColLength,
];

/**
 * @private
 */
export function getColumnsLengths(
  candidates: ReadonlyMap<GridIndex, Pencilmarks>,
): readonly [number, number, number, number, number, number, number, number, number] {
  return (pipe(
    VALID_HOUSE_INDEXES,
    map((houseIndex) =>
      pipe(
        VALID_CELL_INDEXES,
        map((cellIndex) => getCellIndexInGrid("col", houseIndex, cellIndex) as GridIndex),
        map((gridIndex) => candidates.get(gridIndex)?.length || 1),
        reduce((acc: number, item: number) => Math.max(acc, item), 0),
      ),
    ),
  ) as unknown) as readonly [number, number, number, number, number, number, number, number, number];
}

type GrindIndexCellTuple = readonly [GridIndex, Digit | Pencilmarks | undefined];

function _getCell(pencilmarks: boolean, grid: SudokuGrid) {
  return (index: GridIndex): GrindIndexCellTuple => [
    index,
    grid.digits.get(index) || (pencilmarks ? grid.candidates.get(index) : undefined),
  ];
}

function _addMissingSpaces(maxCandidatesByCol: readonly number[]): (cell: string, index: GridIndex) => string {
  return (cell: string, index: GridIndex): string => {
    const columnLength = maxCandidatesByCol[getCellCol(index).index];
    return cell + " ".repeat(columnLength - cell.length);
  };
}

function _createCell(
  style: SerializeStyle,
  pencilmarks: boolean,
  emptyCellSymbol: EmptyCellSymbol,
  maxCandidatesByCol: readonly number[],
): (cell: GrindIndexCellTuple) => string {
  const addMissingSpaces =
    pencilmarks && (style === "grid" || style === "sudopedia")
      ? _addMissingSpaces(maxCandidatesByCol)
      : (cell: string): string => cell;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  return cond([
    [
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      applyByIndex(1, is(Number)),
      (cell: readonly [GridIndex, Digit]): string => addMissingSpaces(cell[1].toString(), cell[0]),
    ],
    [
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      applyByIndex(1, Array.isArray),
      (cell: readonly [GridIndex, Pencilmarks]): string => addMissingSpaces(cell[1].join(""), cell[0]),
    ],
    [T, (cell: readonly [GridIndex, undefined]): string => addMissingSpaces(emptyCellSymbol, cell[0])],
  ]) as (cell: GrindIndexCellTuple) => string;
}

function _surroundCell(brackets: Brackets | undefined) {
  return (cell: string): string => (brackets ? `${brackets[0]}${cell}${brackets[1]}` : cell);
}

function _gridSeparator(
  cellSeparator: "" | " ",
  maxCandidatesByCol: readonly number[],
): ([edgeSymbol, middleSymbol]: readonly [string, string]) => string {
  return ([edgeSymbol, middleSymbol]: readonly [string, string]): string =>
    pipe(
      maxCandidatesByCol,
      groupN(3),
      map((colsLengths) => repeat("-", sum(colsLengths) + cellSeparator.length * 4).join("")),
      join(middleSymbol),
      replace(/^(.*)$/, edgeSymbol + "$1" + edgeSymbol),
    );
}

function _gridSymbols(isSudopedia: boolean): (lineType: "start" | "middle" | "end") => readonly [string, string] {
  if (isSudopedia) {
    return cond([
      [equals("start"), always([".", "."])],
      [equals("middle"), always([":", "+"])],
      [equals("end"), always(["'", "'"])],
      [T, always("")],
    ]);
  } else {
    // eslint-disable-next-line functional/functional-parameters
    return (): readonly [string, string] => ["+", "+"];
  }
}

export function serializeGrid(grid: SudokuGrid, options?: SerializerOptions): string | null {
  const pencilmarks = options?.pencilmarks || false;
  const style = options?.style || SERIALIZER_STYLES[0];
  const emptyCellSymbol = (!options?.pencilmarks ? options?.emptyCellSymbol : undefined) || EMPTY_CELL_SYMBOLS[0];
  const brackets = options?.pencilmarks ? options?.brackets : undefined;

  const cellSeparator: "" | " " = pencilmarks && (style === "grid" || style === "sudopedia" || !brackets) ? " " : "";

  const maxCandidatesByCol = getColumnsLengths(grid.candidates);
  const gridSeparator = _gridSeparator(cellSeparator, maxCandidatesByCol);

  const getCell = _getCell(pencilmarks, grid);
  const createCell = _createCell(style, pencilmarks, emptyCellSymbol, maxCandidatesByCol);
  const surroundCell = _surroundCell(brackets);

  const groupByRow = (houseIndex: HouseIndex): string =>
    pipe(
      VALID_CELL_INDEXES,
      map((cellIndex) => getCellIndexInGrid("row", houseIndex, cellIndex) as GridIndex),
      map(getCell),
      map(createCell),
      map(surroundCell),
      join(cellSeparator),
    );

  const groupByBoxRow = (houseIndex: HouseIndex): string =>
    pipe(
      VALID_CELL_INDEXES,
      map((cellIndex) => getCellIndexInGrid("row", houseIndex, cellIndex) as GridIndex),
      groupN(3),
      map((gridIndexes) =>
        pipe(gridIndexes, map(getCell), map(createCell), map(surroundCell), prepend("|"), join(cellSeparator)),
      ),
      append("|"),
      join(cellSeparator),
    );

  const gridSymbols = _gridSymbols(style === "sudopedia");

  switch (style) {
    case "singleLine":
      return pipe(VALID_GRID_INDEXES, map(getCell), map(createCell), map(surroundCell), join(cellSeparator));
    case "multiLines":
      return pipe(VALID_HOUSE_INDEXES, map(groupByRow), join("\n"));
    case "grid":
    case "sudopedia":
      return pipe(
        VALID_HOUSE_INDEXES,
        map(groupByBoxRow),
        insert(6, gridSeparator(gridSymbols("middle"))),
        insert(3, gridSeparator(gridSymbols("middle"))),
        prepend(gridSeparator(gridSymbols("start"))),
        append(gridSeparator(gridSymbols("end"))),
        join("\n"),
      );
    default:
      return null;
  }
}
