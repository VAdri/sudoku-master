export enum SubsetType {
  Pair = 2,
  Triple = 3,
  Quadruple = 4,
}

export const SUBSET_LEVEL_LABEL: ReadonlyMap<SubsetType, string> = new Map<SubsetType, string>([
  [SubsetType.Pair, "Pair"],
  [SubsetType.Triple, "Triple"],
  [SubsetType.Quadruple, "Quadruple"],
]);
