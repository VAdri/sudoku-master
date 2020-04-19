import { count } from "../count";

describe("count", () => {
  it("returns each element with the number of times it is seen on the list", () => {
    const counts = count([1, 1, 1, 2, 2, 4]);
    expect(counts).toHaveLength(3);
    expect(counts).toContainEqual({ value: 1, count: 3 });
    expect(counts).toContainEqual({ value: 2, count: 2 });
    expect(counts).toContainEqual({ value: 4, count: 1 });
  });
});
