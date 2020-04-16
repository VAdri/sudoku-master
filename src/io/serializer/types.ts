import { Brackets, EmptyCellSymbol } from "../types";

export const SERIALIZER_STYLES = ["singleLine", "multiLines", "grid", "sudopedia"] as const;
export type SerializerStyle = typeof SERIALIZER_STYLES[number];

type SerializerOptionsWithPencilmarks = {
  readonly style?: SerializerStyle;
  readonly pencilmarks: true;
  readonly brackets?: Brackets;
};

export type SerializerOptionsWithoutPencilmarks = {
  readonly style?: Exclude<SerializerStyle, "sudopedia">;
  readonly pencilmarks?: false;
  readonly emptyCellSymbol?: EmptyCellSymbol;
};

export type SerializerOptions = SerializerOptionsWithPencilmarks | SerializerOptionsWithoutPencilmarks;
