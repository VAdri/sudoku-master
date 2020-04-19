import { CellCoord, Digit, GridIndex, House } from "../../../types";

export type EliminationTechnique = "Locked Candidates Type 1 (Pointing)" | "Locked Candidates Type 2 (Claiming)";

export enum EliminationImplicationType {
  DigitInHouse,
  NakedSubset,
}

export type EliminationImplicationDigitInHouse = {
  readonly type: EliminationImplicationType.DigitInHouse;
  readonly digit: Digit;
  readonly house: House;
};

export type EliminationImplicationNakedSubset = {
  readonly type: EliminationImplicationType.NakedSubset;
  readonly cells: readonly GridIndex[];
  readonly digits: readonly Digit[];
};

export type EliminationImplication = EliminationImplicationDigitInHouse | EliminationImplicationNakedSubset;

export type EliminationCandidate = {
  readonly digit: Digit;
  readonly coords: readonly CellCoord[];
}

export type EliminationResult = {
  readonly technique: EliminationTechnique;
  readonly eliminations: readonly EliminationCandidate[];
  readonly implication?: EliminationImplication;
};
