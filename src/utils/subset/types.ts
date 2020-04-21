
export type SubsetLevel = 2 | 3 | 4;

export type SubsetResult<X, Y> = {
  readonly subsetIndexes: readonly X[];
  readonly subsetValues: readonly Y[];
};
