
export enum SubsetLevel {
  Pair = 2,
  Triple = 3,
  Quadruple = 4,
}

export const SUBSET_LEVEL_LABEL: ReadonlyMap<SubsetLevel, string> = new Map<SubsetLevel, string>([
  [SubsetLevel.Pair, "Pair"],
  [SubsetLevel.Triple, "Triple"],
  [SubsetLevel.Quadruple, "Quadruple"],
]);
