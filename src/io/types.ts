export const EMPTY_CELL_SYMBOLS = [".", "-", "*", "0"] as const;
export type EmptyCellSymbol = typeof EMPTY_CELL_SYMBOLS[number];

export const VALID_BRACKETS = ["[]", "()", "{}"] as const;
export type Brackets = typeof VALID_BRACKETS[number];
