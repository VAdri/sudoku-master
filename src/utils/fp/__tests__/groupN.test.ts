import { groupN } from "../groupN";

describe("groupN", () => {
  it("groups the given list into sublists of N items", () => {
    expect(groupN(3)([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });

  it("keeps the last group with less than N elements", () => {
    expect(groupN(3)([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toStrictEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]]);
  });
});
