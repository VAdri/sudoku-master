import { CellCoord, Digit, House } from "../../../types";

export type EliminationTechnique =
  | "Locked Candidates Type 1 (Pointing)"
  | "Locked Candidates Type 2 (Claiming)"
  | "Naked Pair"
  | "Naked Triple"
  | "Naked Quadruple";

export enum EliminationImplicationType {
  DigitInHouse,
  Subset,
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

export type EliminationImplication = EliminationImplicationDigitInHouse | EliminationImplicationSubset;

export type EliminationCandidate = {
  readonly digit: Digit;
  readonly coords: readonly CellCoord[];
};

export type EliminationResult = {
  readonly technique: EliminationTechnique;
  readonly eliminations: readonly EliminationCandidate[];
  readonly implication?: EliminationImplication;
};
