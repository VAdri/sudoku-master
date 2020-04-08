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

export type SudokuGrid = {
  readonly digits: ReadonlyMap<number, Digit>;
  readonly candidates: ReadonlyMap<number, readonly Digit[]>;
};

export type HouseCells = { [index in CellIndex]: number };

export type House = {
  readonly type: HouseType;
  readonly index: HouseIndex;
  readonly cells: HouseCells;
};
