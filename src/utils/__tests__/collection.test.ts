import { toIndexValuePairs, mapFind } from "../collection";

describe("toIndexValuePairs", () => {
  test("The index-value pairs are consistent with the given array", () => {
    const array = ["a", "b", "c"];

    const indexValuePairs = toIndexValuePairs(array);

    expect(indexValuePairs).toHaveLength(3);
    expect(indexValuePairs[0]).toStrictEqual([0, "a"]);
    expect(indexValuePairs[1]).toStrictEqual([1, "b"]);
    expect(indexValuePairs[2]).toStrictEqual([2, "c"]);
  });
});

describe("mapFind", () => {
  it("returns the first truthy element", () => {
    const result = mapFind((value) => (typeof value === "number" ? value * 2 : !value))([
      "a",
      [1, 2, 3],
      12,
      true,
      false,
      undefined,
    ]);
    expect(result).toBeTruthy();
    expect(result).toBe(12 * 2);
  });

  it("returns the first mapped element if the map is always truthy", () => {
    const truthyElements = [1, "ok!", true, []];
    for (const element of truthyElements) {
      const result = mapFind((_) => element)(["a", [1, 2, 3], false, undefined, 12, true]);
      expect(result).toBeTruthy();
      expect(result).toBe(element);
    }
  });

  it("returns nothing if the map is always falsy", () => {
    const falsyElements = [0, "", false, null, undefined];
    for (const element of falsyElements) {
      const result = mapFind((_) => element)(["a", [1, 2, 3], false, undefined, 12, true]);
      expect(result).toBeUndefined();
    }
  });
});
