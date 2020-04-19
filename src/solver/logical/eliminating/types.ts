import { CellCoord, Digit, House } from "../../../types";

export type EliminationTechnique = "Locked Candidates Type 1 (Pointing)" | "Locked Candidates Type 2 (Claiming)";

export enum EliminationImplicationType {
  DigitInHouse,
}

export type EliminationImplicationDigitInHouse = {
  readonly type: EliminationImplicationType.DigitInHouse;
  readonly digit: Digit;
  readonly house: House;
};

export type EliminationImplication = EliminationImplicationDigitInHouse;

export type EliminationResult = {
  readonly technique: EliminationTechnique;
  readonly coords: readonly CellCoord[];
  readonly digit: Digit;
  readonly implication?: EliminationImplication;
};
