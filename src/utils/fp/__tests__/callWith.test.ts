import { applyByIndex, groupN } from "..";
import { isNil, multiply } from "ramda";

describe("callWith", () => {
  it("calls the function in the given index of the list", () => {
    const multiplySecond = applyByIndex(1, multiply(2));
    expect(multiplySecond([0, 3, 9])).toBe(6);
    expect(multiplySecond([0, 1, 3])).toBe(2);

    const isString = (item: any) => typeof item === "string";
    const isFirstString = applyByIndex(0, isString);
    expect(isFirstString(["a", 1, true, null])).toBe(true);
    expect(isFirstString([1, "a", , true])).toBe(false);

    const isLastNil = applyByIndex(-1, isNil);
    expect(isLastNil([1, "a", true, null])).toBe(true);
    expect(isNil(true)).toBe(false);
    expect(isLastNil([1, "a", , true])).toBe(false);
  });
});
