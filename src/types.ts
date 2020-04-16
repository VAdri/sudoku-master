export const VALID_DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export type Digit = typeof VALID_DIGITS[number];
export type Pencilmarks = readonly Digit[];

export const VALID_LINE_TYPES = ["row", "col"] as const;
export const VALID_HOUSE_TYPES = [...VALID_LINE_TYPES, "box"] as const;
export const VALID_HOUSE_INDEXES = [0, 1, 2, 3, 4, 5, 6, 7, 8] as const;
export type LineType = typeof VALID_LINE_TYPES[number];
export type HouseType = typeof VALID_HOUSE_TYPES[number];
export type HouseIndex = typeof VALID_HOUSE_INDEXES[number];

export const VALID_CELL_INDEXES = [...VALID_HOUSE_INDEXES] as const;
export type CellIndex = typeof VALID_CELL_INDEXES[number];
export type CellCoord = readonly [HouseIndex, HouseIndex];
export type CellHouse = {
  readonly houseType: HouseType;
  readonly houseIndex: HouseIndex;
  readonly cellIndex: CellIndex;
};


export const ROW1_INDEXES = [0, 1, 2, 3, 4, 5, 6, 7, 8] as const;
export const ROW2_INDEXES = [9, 10, 11, 12, 13, 14, 15, 16, 17] as const;
export const ROW3_INDEXES = [18, 19, 20, 21, 22, 23, 24, 25, 26] as const;
export const ROW4_INDEXES = [27, 28, 29, 30, 31, 32, 33, 34, 35] as const;
export const ROW5_INDEXES = [36, 37, 38, 39, 40, 41, 42, 43, 44] as const;
export const ROW6_INDEXES = [45, 46, 47, 48, 49, 50, 51, 52, 53] as const;
export const ROW7_INDEXES = [54, 55, 56, 57, 58, 59, 60, 61, 62] as const;
export const ROW8_INDEXES = [63, 64, 65, 66, 67, 68, 69, 70, 71] as const;
export const ROW9_INDEXES = [72, 73, 74, 75, 76, 77, 78, 79, 80] as const;
export const VALID_GRID_INDEXES = [
  ...ROW1_INDEXES,
  ...ROW2_INDEXES,
  ...ROW3_INDEXES,
  ...ROW4_INDEXES,
  ...ROW5_INDEXES,
  ...ROW6_INDEXES,
  ...ROW7_INDEXES,
  ...ROW8_INDEXES,
  ...ROW9_INDEXES,
] as const;
export type GridIndex = typeof VALID_GRID_INDEXES[number];

export type SudokuGrid = {
  readonly digits: ReadonlyMap<GridIndex, Digit>;
  readonly candidates: ReadonlyMap<GridIndex, readonly Digit[]>;
};

export type HouseCells = { [index in CellIndex]: GridIndex };

export type House = {
  readonly type: HouseType;
  readonly index: HouseIndex;
  readonly cells: HouseCells;
};
