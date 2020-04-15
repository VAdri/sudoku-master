import { CellCoord, Digit } from "../../../types";

export type SolvingTechnique = "Full House" | "Last Digit" | "Naked Single" | "Hidden Single";

export type SolvingResult = {
  readonly technique: SolvingTechnique;
  readonly coord: CellCoord;
  readonly digit: Digit;
};
