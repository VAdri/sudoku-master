import { cellsIdentifiers } from "..";

describe("cellsIdentifiers rncn", () => {
  let result: readonly string[];

  it("returns the notation for a single cell", () => {
    result = cellsIdentifiers([[0, 0]]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r1c1");

    result = cellsIdentifiers([0]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r1c1");

    result = cellsIdentifiers([{ houseType: "row", houseIndex: 0, cellIndex: 0 }]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r1c1");

    result = cellsIdentifiers([[4, 1]]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r5c2");

    result = cellsIdentifiers([37]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r5c2");

    result = cellsIdentifiers([{ houseType: "col", houseIndex: 1, cellIndex: 4 }]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r5c2");
  });

  it("returns the notation for multiple cells in one identical line", () => {
    result = cellsIdentifiers([
      [0, 5],
      [0, 7],
    ]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r1c68");

    result = cellsIdentifiers([5, 7]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r1c68");

    result = cellsIdentifiers([
      { houseType: "row", houseIndex: 0, cellIndex: 5 },
      { houseType: "col", houseIndex: 7, cellIndex: 0 },
    ]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r1c68");

    result = cellsIdentifiers([
      [4, 1],
      [4, 2],
      [4, 3],
    ]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r5c234");

    result = cellsIdentifiers([37, 38, 39]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r5c234");

    result = cellsIdentifiers([
      { houseType: "col", houseIndex: 1, cellIndex: 4 },
      { houseType: "col", houseIndex: 2, cellIndex: 4 },
      { houseType: "col", houseIndex: 3, cellIndex: 4 },
    ]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r5c234");
  });

  it("returns the notation for multiple cells in several identical lines", () => {
    result = cellsIdentifiers([
      [0, 0],
      [0, 5],
      [0, 7],
      [3, 0],
      [3, 5],
      [3, 7],
    ]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r14c168");

    result = cellsIdentifiers([0, 5, 7, 27, 32, 34]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r14c168");

    result = cellsIdentifiers([
      { houseType: "box", houseIndex: 0, cellIndex: 0 },
      { houseType: "row", houseIndex: 0, cellIndex: 5 },
      { houseType: "col", houseIndex: 7, cellIndex: 0 },
      { houseType: "box", houseIndex: 3, cellIndex: 0 },
      { houseType: "row", houseIndex: 3, cellIndex: 5 },
      { houseType: "col", houseIndex: 7, cellIndex: 3 },
    ]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r14c168");

    result = cellsIdentifiers([
      [4, 1],
      [4, 2],
      [5, 1],
      [5, 2],
    ]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r56c23");

    result = cellsIdentifiers([37, 38, 46, 47]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r56c23");

    result = cellsIdentifiers([
      { houseType: "col", houseIndex: 1, cellIndex: 4 },
      { houseType: "col", houseIndex: 2, cellIndex: 4 },
      { houseType: "row", houseIndex: 5, cellIndex: 1 },
      { houseType: "row", houseIndex: 5, cellIndex: 2 },
    ]);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("r56c23");
  });

  it("returns the notations for multiple cells in several identical and different lines", () => {
    result = cellsIdentifiers([
      [0, 0],
      [0, 5],
      [0, 7],
      [3, 0],
      [3, 5],
      [3, 7],
      [4, 1],
      [4, 2],
      [5, 1],
      [5, 2],
      [7, 0],
    ]);
    expect(result).toHaveLength(3);
    expect(result).toContain("r14c168");
    expect(result).toContain("r56c23");
    expect(result).toContain("r8c1");

    result = cellsIdentifiers([0, 5, 7, 27, 32, 34, 37, 38, 46, 47, 63]);
    expect(result).toHaveLength(3);
    expect(result).toContain("r14c168");
    expect(result).toContain("r56c23");
    expect(result).toContain("r8c1");

    result = cellsIdentifiers([
      { houseType: "box", houseIndex: 0, cellIndex: 0 },
      { houseType: "row", houseIndex: 0, cellIndex: 5 },
      { houseType: "col", houseIndex: 7, cellIndex: 0 },
      { houseType: "box", houseIndex: 3, cellIndex: 0 },
      { houseType: "row", houseIndex: 3, cellIndex: 5 },
      { houseType: "col", houseIndex: 7, cellIndex: 3 },
      { houseType: "col", houseIndex: 1, cellIndex: 4 },
      { houseType: "col", houseIndex: 2, cellIndex: 4 },
      { houseType: "row", houseIndex: 5, cellIndex: 1 },
      { houseType: "row", houseIndex: 5, cellIndex: 2 },
      { houseType: "row", houseIndex: 7, cellIndex: 0 },
    ]);
    expect(result).toHaveLength(3);
    expect(result).toContain("r14c168");
    expect(result).toContain("r56c23");
    expect(result).toContain("r8c1");
  });
});

describe("cellsIdentifiers k9", () => {
  let result: readonly string[];

  it("returns the notation for a single cell", () => {
    result = cellsIdentifiers([[0, 0]], "k9");
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("a1");

    result = cellsIdentifiers([0], "k9");
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("a1");

    result = cellsIdentifiers([{ houseType: "row", houseIndex: 0, cellIndex: 0 }], "k9");
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("a1");

    result = cellsIdentifiers([[4, 1]], "k9");
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("e2");

    result = cellsIdentifiers([37], "k9");
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("e2");

    result = cellsIdentifiers([{ houseType: "col", houseIndex: 1, cellIndex: 4 }], "k9");
    expect(result).toHaveLength(1);
    expect(result[0]).toBe("e2");
  });

  it("returns the notation for multiple cells in one identical line", () => {
    result = cellsIdentifiers(
      [
        [0, 5],
        [0, 7],
      ],
      "k9",
    );
    expect(result).toHaveLength(2);
    expect(result).toContain("a6");
    expect(result).toContain("a8");

    result = cellsIdentifiers([5, 7], "k9");
    expect(result).toHaveLength(2);
    expect(result).toContain("a6");
    expect(result).toContain("a8");

    result = cellsIdentifiers(
      [
        { houseType: "row", houseIndex: 0, cellIndex: 5 },
        { houseType: "col", houseIndex: 7, cellIndex: 0 },
      ],
      "k9",
    );
    expect(result).toHaveLength(2);
    expect(result).toContain("a6");
    expect(result).toContain("a8");

    result = cellsIdentifiers(
      [
        [4, 1],
        [4, 2],
        [4, 3],
      ],
      "k9",
    );
    expect(result).toHaveLength(3);
    expect(result).toContain("e2");
    expect(result).toContain("e3");
    expect(result).toContain("e4");

    result = cellsIdentifiers([37, 38, 39], "k9");
    expect(result).toHaveLength(3);
    expect(result).toContain("e2");
    expect(result).toContain("e3");
    expect(result).toContain("e4");

    result = cellsIdentifiers(
      [
        { houseType: "col", houseIndex: 1, cellIndex: 4 },
        { houseType: "col", houseIndex: 2, cellIndex: 4 },
        { houseType: "col", houseIndex: 3, cellIndex: 4 },
      ],
      "k9",
    );
    expect(result).toHaveLength(3);
    expect(result).toContain("e2");
    expect(result).toContain("e3");
    expect(result).toContain("e4");
  });

  it("returns the notation for multiple cells in several identical lines", () => {
    result = cellsIdentifiers(
      [
        [0, 0],
        [0, 5],
        [0, 7],
        [3, 0],
        [3, 5],
        [3, 7],
      ],
      "k9",
    );
    expect(result).toHaveLength(6);
    expect(result).toContain("a1");
    expect(result).toContain("a6");
    expect(result).toContain("a8");
    expect(result).toContain("d1");
    expect(result).toContain("d6");
    expect(result).toContain("d8");

    result = cellsIdentifiers([0, 5, 7, 27, 32, 34], "k9");
    expect(result).toHaveLength(6);
    expect(result).toContain("a1");
    expect(result).toContain("a6");
    expect(result).toContain("a8");
    expect(result).toContain("d1");
    expect(result).toContain("d6");
    expect(result).toContain("d8");

    result = cellsIdentifiers(
      [
        { houseType: "box", houseIndex: 0, cellIndex: 0 },
        { houseType: "row", houseIndex: 0, cellIndex: 5 },
        { houseType: "col", houseIndex: 7, cellIndex: 0 },
        { houseType: "box", houseIndex: 3, cellIndex: 0 },
        { houseType: "row", houseIndex: 3, cellIndex: 5 },
        { houseType: "col", houseIndex: 7, cellIndex: 3 },
      ],
      "k9",
    );
    expect(result).toHaveLength(6);
    expect(result).toContain("a1");
    expect(result).toContain("a6");
    expect(result).toContain("a8");
    expect(result).toContain("d1");
    expect(result).toContain("d6");
    expect(result).toContain("d8");

    result = cellsIdentifiers(
      [
        [4, 1],
        [4, 2],
        [5, 1],
        [5, 2],
      ],
      "k9",
    );
    expect(result).toHaveLength(4);
    expect(result).toContain("e2");
    expect(result).toContain("e3");
    expect(result).toContain("f2");
    expect(result).toContain("f3");

    result = cellsIdentifiers([37, 38, 46, 47], "k9");
    expect(result).toHaveLength(4);
    expect(result).toContain("e2");
    expect(result).toContain("e3");
    expect(result).toContain("f2");
    expect(result).toContain("f3");

    result = cellsIdentifiers(
      [
        { houseType: "col", houseIndex: 1, cellIndex: 4 },
        { houseType: "col", houseIndex: 2, cellIndex: 4 },
        { houseType: "row", houseIndex: 5, cellIndex: 1 },
        { houseType: "row", houseIndex: 5, cellIndex: 2 },
      ],
      "k9",
    );
    expect(result).toHaveLength(4);
    expect(result).toContain("e2");
    expect(result).toContain("e3");
    expect(result).toContain("f2");
    expect(result).toContain("f3");
  });

  it("returns the notations for multiple cells in several identical and different lines", () => {
    result = cellsIdentifiers(
      [
        [0, 0],
        [0, 5],
        [0, 7],
        [3, 0],
        [3, 5],
        [3, 7],
        [4, 1],
        [4, 2],
        [5, 1],
        [5, 2],
        [7, 0],
      ],
      "k9",
    );
    expect(result).toHaveLength(11);
    expect(result).toContain("a1");
    expect(result).toContain("a6");
    expect(result).toContain("a8");
    expect(result).toContain("d1");
    expect(result).toContain("d6");
    expect(result).toContain("d8");
    expect(result).toContain("e2");
    expect(result).toContain("e3");
    expect(result).toContain("f2");
    expect(result).toContain("f3");
    expect(result).toContain("h1");

    result = cellsIdentifiers([0, 5, 7, 27, 32, 34, 37, 38, 46, 47, 63], "k9");
    expect(result).toHaveLength(11);
    expect(result).toContain("a1");
    expect(result).toContain("a6");
    expect(result).toContain("a8");
    expect(result).toContain("d1");
    expect(result).toContain("d6");
    expect(result).toContain("d8");
    expect(result).toContain("e2");
    expect(result).toContain("e3");
    expect(result).toContain("f2");
    expect(result).toContain("f3");
    expect(result).toContain("h1");

    result = cellsIdentifiers(
      [
        { houseType: "box", houseIndex: 0, cellIndex: 0 },
        { houseType: "row", houseIndex: 0, cellIndex: 5 },
        { houseType: "col", houseIndex: 7, cellIndex: 0 },
        { houseType: "box", houseIndex: 3, cellIndex: 0 },
        { houseType: "row", houseIndex: 3, cellIndex: 5 },
        { houseType: "col", houseIndex: 7, cellIndex: 3 },
        { houseType: "col", houseIndex: 1, cellIndex: 4 },
        { houseType: "col", houseIndex: 2, cellIndex: 4 },
        { houseType: "row", houseIndex: 5, cellIndex: 1 },
        { houseType: "row", houseIndex: 5, cellIndex: 2 },
        { houseType: "row", houseIndex: 7, cellIndex: 0 },
      ],
      "k9",
    );
    expect(result).toHaveLength(11);
    expect(result).toContain("a1");
    expect(result).toContain("a6");
    expect(result).toContain("a8");
    expect(result).toContain("d1");
    expect(result).toContain("d6");
    expect(result).toContain("d8");
    expect(result).toContain("e2");
    expect(result).toContain("e3");
    expect(result).toContain("f2");
    expect(result).toContain("f3");
    expect(result).toContain("h1");
  });
});
