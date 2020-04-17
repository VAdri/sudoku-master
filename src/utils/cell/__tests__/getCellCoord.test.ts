import { VALID_HOUSE_INDEXES } from "../../../types";
import { getCellCoord } from "..";

describe("getCellCoord", () => {
  it("returns the same coordinates when CellCoord is passed", () => {
    for (const row of VALID_HOUSE_INDEXES) {
      for (const col of VALID_HOUSE_INDEXES) {
        expect(getCellCoord([row, col])).toStrictEqual([row, col]);
      }
    }
  });

  it("returns the correct coordinates when GridIndex is passed", () => {
    expect(getCellCoord(0)).toStrictEqual([0, 0]);
    expect(getCellCoord(80)).toStrictEqual([8, 8]);
  });

  it("returns the correct coordinates when CellHouse is passed", () => {
    expect(getCellCoord({ houseType: "row", houseIndex: 0, cellIndex: 0 })).toStrictEqual([0, 0]);
    expect(getCellCoord({ houseType: "col", houseIndex: 0, cellIndex: 0 })).toStrictEqual([0, 0]);
    expect(getCellCoord({ houseType: "box", houseIndex: 0, cellIndex: 0 })).toStrictEqual([0, 0]);
    expect(getCellCoord({ houseType: "row", houseIndex: 8, cellIndex: 8 })).toStrictEqual([8, 8]);
    expect(getCellCoord({ houseType: "col", houseIndex: 8, cellIndex: 8 })).toStrictEqual([8, 8]);
    expect(getCellCoord({ houseType: "box", houseIndex: 8, cellIndex: 8 })).toStrictEqual([8, 8]);
  });
});
