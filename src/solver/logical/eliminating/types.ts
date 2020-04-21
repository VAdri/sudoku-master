import { CellCoord, Digit, House, HouseIndex } from "../../../types";

export type EliminationTechnique =
  | "Locked Candidates Type 1 (Pointing)"
  | "Locked Candidates Type 2 (Claiming)"
  | "Naked Pair"
  | "Naked Triple"
  | "Naked Quadruple"
  | "Locked Pair"
  | "Locked Triple"
  | "Hidden Pair"
  | "Hidden Triple"
  | "Hidden Quadruple"
  | "X-Wing"
  | "Swordfish"
  | "Jellyfish";

export enum EliminationImplicationType {
  DigitInHouse,
  Subset,
  Fish,
}

export type EliminationImplicationDigitInHouse = {
  readonly type: EliminationImplicationType.DigitInHouse;
  readonly digit: Digit;
  readonly house: House;
};

export type EliminationImplicationSubset = {
  readonly type: EliminationImplicationType.Subset;
  readonly cells: readonly CellCoord[];
  readonly digits: readonly Digit[];
};

export type EliminationImplicationFish = {
  readonly type: EliminationImplicationType.Fish;
  readonly digit: Digit;
  readonly rows: readonly HouseIndex[];
  readonly cols: readonly HouseIndex[];
};

export type EliminationImplication =
  | EliminationImplicationDigitInHouse
  | EliminationImplicationSubset
  | EliminationImplicationFish;

export type EliminationCandidate = {
  readonly digit: Digit;
  readonly coords: readonly CellCoord[];
};

export type EliminationResult = {
  readonly technique: EliminationTechnique;
  readonly eliminations: readonly EliminationCandidate[];
  readonly implication?: EliminationImplication;
};
