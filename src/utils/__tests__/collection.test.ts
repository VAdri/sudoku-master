import { toIndexValuePairs } from "../collection";

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
