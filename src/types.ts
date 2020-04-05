export const VALID_DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export type Digit = typeof VALID_DIGITS[number];

export type Pencilmarks = readonly Digit[];

export type SudokuGrid = {
  digits: ReadonlyMap<number, Digit>;
  candidates: ReadonlyMap<number, readonly Digit[]>;
};
