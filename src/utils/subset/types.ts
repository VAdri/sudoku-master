export type SubsetLevel = 2 | 3 | 4;

export type SubsetData<X, Y> = {
  readonly subsetIndexes: readonly X[];
  readonly subsetValues: readonly Y[];
};

export type LookupData<T extends object, X, Y> = T & {
  readonly lookup: ReadonlyMap<X, readonly Y[]>;
};

export type FindSubsetResult<T extends object, X, Y> = LookupData<T, X, Y> & {
  readonly result: SubsetData<X, Y>;
};
