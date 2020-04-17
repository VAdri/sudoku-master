import { isTypeOf } from "..";

describe("isTypeOf", () => {
  it("returns true if the given type is the proper one.", () => {
    expect(isTypeOf(false, "boolean")).toBe(true);
    expect(isTypeOf({}, "object")).toBe(true);
    expect(isTypeOf(null, "object")).toBe(true);
    expect(isTypeOf("", "string")).toBe(true);
    expect(isTypeOf(undefined, "undefined")).toBe(true);
  });

  it("returns false if the given type is not the proper one.", () => {
    expect(isTypeOf(false, "object")).toBe(false);
    expect(isTypeOf({}, "boolean")).toBe(false);
    expect(isTypeOf(null, "string")).toBe(false);
    expect(isTypeOf("", "undefined")).toBe(false);
    expect(isTypeOf(undefined, "object")).toBe(false);
  });
});
