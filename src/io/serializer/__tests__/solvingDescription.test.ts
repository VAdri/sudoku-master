import { solvingDescription } from "../solvingDescription";

describe("solvingDescription", () => {
  it("returns the description of a solving result", () => {
    expect(solvingDescription({ technique: "Full House", coord: [5, 7], digit: 4 })).toBe("Full House: r6c8=4");
  });
});
