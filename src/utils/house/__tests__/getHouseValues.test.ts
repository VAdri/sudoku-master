import { parseGrid } from "../../../io/parser";
import { getHouseValues } from "..";
import { HOUSES_LIST } from "../constants";
import { House } from "../../../types";

describe("getHouseValues", () => {
  it("returns no values for an empty row", () => {
    const grid = parseGrid(`
      +---+---+---+
      |-23|4--|8--|
      |6--|--7|---|
      |---|53-|62-|
      +---+---+---+
      |--5|---|---|
      |84-|---|-36|
      |---|---|---|
      +---+---+---+
      |-52|-96|---|
      |---|1--|--7|
      |--8|--5|21-|
      +---+---+---+`);
    expect(grid).not.toBeNull();
    if (grid) {
      const houseValues = getHouseValues(
        HOUSES_LIST.find((house) => house.type === "row" && house.index === 5) as House,
        grid.digits,
      );
      expect(houseValues.house.type).toBe("row");
      expect(houseValues.house.index).toBe(5);
      expect(houseValues.values.size).toBe(0);
    }
  });

  it("returns undefined values for an empty column", () => {
    const grid = parseGrid(`
      +---+---+---+
      |-23|4--|8--|
      |6--|--7|---|
      |---|53-|62-|
      +---+---+---+
      |--5|---|---|
      |84-|---|-3-|
      |---|---|1--|
      +---+---+---+
      |-52|-96|---|
      |---|1--|---|
      |--8|--5|21-|
      +---+---+---+`);
    expect(grid).not.toBeNull();
    if (grid) {
      const houseValues = getHouseValues(
        HOUSES_LIST.find((house) => house.type === "col" && house.index === 8) as House,
        grid.digits,
      );
      expect(houseValues.house.type).toBe("col");
      expect(houseValues.house.index).toBe(8);
      expect(houseValues.values.size).toBe(0);
    }
  });

  it("returns undefined values for an empty box", () => {
    const grid = parseGrid(`
      +---+---+---+
      |---|4--|8--|
      |---|--7|---|
      |---|53-|62-|
      +---+---+---+
      |--5|---|---|
      |84-|---|-36|
      |---|---|1--|
      +---+---+---+
      |-52|-96|---|
      |---|1--|--7|
      |--8|--5|21-|
      +---+---+---+`);
    expect(grid).not.toBeNull();
    if (grid) {
      const houseValues = getHouseValues(
        HOUSES_LIST.find((house) => house.type === "box" && house.index === 0) as House,
        grid.digits,
      );
      expect(houseValues.house.type).toBe("box");
      expect(houseValues.house.index).toBe(0);
      expect(houseValues.values.size).toBe(0);
    }
  });

  it("returns values of a row", () => {
    const grid = parseGrid(`
      +---+---+---+
      |-23|4--|8--|
      |6--|--7|---|
      |---|53-|62-|
      +---+---+---+
      |--5|---|---|
      |84-|---|-36|
      |---|---|---|
      +---+---+---+
      |-52|-96|---|
      |---|1--|--7|
      |--8|--5|21-|
      +---+---+---+`);
    expect(grid).not.toBeNull();
    if (grid) {
      const houseValues = getHouseValues(
        HOUSES_LIST.find((house) => house.type === "row" && house.index === 4) as House,
        grid.digits,
      );
      expect(houseValues.house.type).toBe("row");
      expect(houseValues.house.index).toBe(4);
      expect(houseValues.values.size).toBe(4);
      expect(houseValues.values.get(0)).toBe(8);
      expect(houseValues.values.get(1)).toBe(4);
      expect(houseValues.values.get(2)).toBeUndefined();
      expect(houseValues.values.get(3)).toBeUndefined();
      expect(houseValues.values.get(4)).toBeUndefined();
      expect(houseValues.values.get(5)).toBeUndefined();
      expect(houseValues.values.get(6)).toBeUndefined();
      expect(houseValues.values.get(7)).toBe(3);
      expect(houseValues.values.get(8)).toBe(6);
    }
  });

  it("returns values of a column", () => {
    const grid = parseGrid(`
      +---+---+---+
      |-23|4--|8--|
      |6--|--7|---|
      |---|53-|62-|
      +---+---+---+
      |--5|---|---|
      |84-|---|-3-|
      |---|---|1--|
      +---+---+---+
      |-52|-96|---|
      |---|1--|---|
      |--8|--5|21-|
      +---+---+---+`);
    expect(grid).not.toBeNull();
    if (grid) {
      const houseValues = getHouseValues(
        HOUSES_LIST.find((house) => house.type === "col" && house.index === 2) as House,
        grid.digits,
      );
      expect(houseValues.house.type).toBe("col");
      expect(houseValues.house.index).toBe(2);
      expect(houseValues.values.size).toBe(4);
      expect(houseValues.values.get(0)).toBe(3);
      expect(houseValues.values.get(1)).toBeUndefined();
      expect(houseValues.values.get(2)).toBeUndefined();
      expect(houseValues.values.get(3)).toBe(5);
      expect(houseValues.values.get(4)).toBeUndefined();
      expect(houseValues.values.get(5)).toBeUndefined();
      expect(houseValues.values.get(6)).toBe(2);
      expect(houseValues.values.get(7)).toBeUndefined();
      expect(houseValues.values.get(8)).toBe(8);
    }
  });

  it("returns values of a box", () => {
    const grid = parseGrid(`
      +---+---+---+
      |---|4--|8--|
      |---|--7|---|
      |---|53-|62-|
      +---+---+---+
      |--5|---|---|
      |84-|---|-36|
      |---|---|1--|
      +---+---+---+
      |-52|-96|---|
      |---|1--|--7|
      |--8|--5|21-|
      +---+---+---+`);
    expect(grid).not.toBeNull();
    if (grid) {
      const houseValues = getHouseValues(
        HOUSES_LIST.find((house) => house.type === "box" && house.index === 3) as House,
        grid.digits,
      );
      expect(houseValues.house.type).toBe("box");
      expect(houseValues.house.index).toBe(3);
      expect(houseValues.values.size).toBe(3);
      expect(houseValues.values.get(0)).toBeUndefined();
      expect(houseValues.values.get(1)).toBeUndefined();
      expect(houseValues.values.get(2)).toBe(5);
      expect(houseValues.values.get(3)).toBe(8);
      expect(houseValues.values.get(4)).toBe(4);
      expect(houseValues.values.get(5)).toBeUndefined();
      expect(houseValues.values.get(6)).toBeUndefined();
      expect(houseValues.values.get(7)).toBeUndefined();
      expect(houseValues.values.get(8)).toBeUndefined();
    }
  });
});
