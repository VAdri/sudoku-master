import { skip } from "../skip";

describe("skip", () => {
  it("skips no item when 0 is provided", () => {
    expect(skip(0)([0, 1, 2, 3, 4, 5])).toStrictEqual([0, 1, 2, 3, 4, 5]);
  });

  it("skips items when a positive number is provided", () => {
    expect(skip(1)([0, 1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
    expect(skip(2)([0, 1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5]);
    expect(skip(3)([0, 1, 2, 3, 4, 5])).toStrictEqual([3, 4, 5]);
    expect(skip(4)([0, 1, 2, 3, 4, 5])).toStrictEqual([4, 5]);
    expect(skip(5)([0, 1, 2, 3, 4, 5])).toStrictEqual([5]);
    expect(skip(6)([0, 1, 2, 3, 4, 5])).toStrictEqual([]);
  });
});
