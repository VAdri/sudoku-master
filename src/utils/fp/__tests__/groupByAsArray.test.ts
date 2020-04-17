import { groupByAsArray } from "..";

describe("groupByAsArray", () => {
  it("returns a list of tuples with the keys and their values", () => {
    expect(groupByAsArray([0, 1, 2, 3, 4, 5, 6], (i) => i % 2)).toStrictEqual([
      ["0", [0, 2, 4, 6]],
      ["1", [1, 3, 5]],
    ]);
  });
});
