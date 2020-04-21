import { findSubsets } from "..";

describe("Find subsets", () => {
  test("Lookup containing a subset should return it", () => {
    /**
     * That lookup should return a subset.
     * ```
     * · 1 2 3 4 5 6 7 8 9
     * 0 | · · · | · · | ·
     * 1-|-------X-----X--
     * 2 | · · · | · · | ·
     * 3 | · · · | · · | ·
     * 4-X-----X-X-----X--
     * 5 | X · X | · · | ·
     * 6 | · · · | · · | ·
     * 7-X-------X-----|--
     * 8 | · X X | · · | ·
     * ```
     */
    const lookup = [
      [0, []],
      [1, [5, 8]], // Here there is a 5 and an 8 on the Y-axis
      [2, []],
      [3, []],
      [4, [1, 4, 5, 8]], // Here there is a 1, 5 and 8 on the Y-axis
      [5, [2, 4]],
      [6, []],
      [7, [1, 5]], // Here there is a 1 and an 5 on the Y-axis
      [8, [3, 4]],
    ] as [number, number[]][];

    const results = findSubsets(new Map(lookup), 3);
    expect(results).toHaveLength(1);
    expect(results[0].subsetIndexes).toHaveLength(3);
    expect(results[0].subsetIndexes).toContain(1);
    expect(results[0].subsetIndexes).toContain(4);
    expect(results[0].subsetIndexes).toContain(7);
    expect(results[0].subsetValues).toHaveLength(3);
    expect(results[0].subsetValues).toContain(1);
    expect(results[0].subsetValues).toContain(5);
    expect(results[0].subsetValues).toContain(8);
  });

  test("Lookup where a Y-axis has only one value is not a valid subset", () => {
    /**
     * That lookup should not return a false positive (because the Y-axis 8 has only
     * one occurence).
     * ```
     * · 1 2 3 4 5 6 7 8 9
     * 0 | · · · | · · | ·
     * 1-|-------X-----X--
     * 2 | · · · | · · | ·
     * 3 | · · · | · · | ·
     * 4-X-----X-X-----O-- <-- There should be a value here
     * 5 | X · X | · · | ·
     * 6 | · · · | · · | ·
     * 7-X-------X-----|--
     * 8 | · X X | · · | ·
     * ```
     */
    const lookup = [
      [0, []],
      [1, [5, 8]], // Here there is an 8 on the Y-axis
      [2, []],
      [3, []],
      [4, [1, 4, 5]], // Here there is an 8 MISSING on the Y-axis
      [5, [2, 4]],
      [6, []],
      [7, [1, 5]],
      [8, [3, 4]],
    ] as [number, number[]][];

    const results = findSubsets(new Map(lookup), 3);
    expect(results).toHaveLength(0);
  });

  test("Lookup where a Y-axis has a misplaced value is not a valid subset", () => {
    /**
     * That lookup should not return a false positive (because the Y-axis 8 has one
     * misplaced occurence).
     * ```
     * · 1 2 3 4 5 6 7 8 9
     * 0 | · · · | · · | ·
     * 1-|-------X-----X--
     * 2 | · · · | · · | ·
     * 3 | · · · | · · | ·
     * 4-X-----X-X-----O-- <-- There should be a value here
     * 5 | X · X | · · X · <-- but not here
     * 6 | · · · | · · | ·
     * 7-X-------X-----|--
     * 8 | · X X | · · | ·
     * ```
     */
    const lookup = [
      [0, []],
      [1, [5, 8]], // Here there is an 8 on the Y-axis
      [2, []],
      [3, []],
      [4, [1, 4, 5]], // Here there is an 8 MISSING on the Y-axis
      [5, [2, 4, 8]], // Here is an 8 that is EXCESSIVE on the Y-axis
      [6, []],
      [7, [1, 5]],
      [8, [3, 4]],
    ] as [number, number[]][];

    const results = findSubsets(new Map(lookup), 3);
    expect(results).toHaveLength(0);
  });

  test("Lookup where a Y-axis has an extra value is not a valid subset", () => {
    /**
     * That lookup should not return a false positive (because the Y-axis 8 has one
     * misplaced occurence).
     * ```
     * · 1 2 3 4 5 6 7 8 9
     * 0 | · · · | · · | ·
     * 1-|-------X-----X--
     * 2 | · · · | · · | ·
     * 3 | · · · | · · | ·
     * 4-X-----X-X-----X--
     * 5 | X · X | · · X · <-- There should not be a value here
     * 6 | · · · | · · | ·
     * 7-X-------X-----|--
     * 8 | · X X | · · | ·
     * ```
     */
    const lookup = [
      [0, []],
      [1, [5, 8]],
      [2, []],
      [3, []],
      [4, [1, 4, 5, 8]],
      [5, [2, 4, 8]], // Here is an 8 that is EXCESSIVE on the Y-axis
      [6, []],
      [7, [1, 5]],
      [8, [3, 4]],
    ] as [number, number[]][];

    const results = findSubsets(new Map(lookup), 3);
    expect(results).toHaveLength(0);
  });

  test("Lookup where a X-axis has a missing value is not a valid subset", () => {
    /**
     * That lookup should not return a false positive (because the Y-axis 8 has one
     * misplaced occurence).
     * ```
     * · 0 1 2 3 4 5 6 7 8 9
     * 0 · | · · · | · · | ·
     * 1---O-------X-----O-- <-- There should be another value here
     * 2 · | · · · | · · | ·
     * 3 · | · · · | · · | ·
     * 4---X-----X-X-----X--
     * 5 · | X · X | · · | ·
     * 6 · | · · · | · · | ·
     * 7---X-------X-----X--
     * 8 X | · X X | · · | ·
     * ```
     */
    const lookup = [
      [0, []],
      [1, [5]], // Here is a 1 or 8 that is MISSING on the X-axis
      [2, []],
      [3, []],
      [4, [1, 4, 5, 8]],
      [5, [2, 4, 8]],
      [6, []],
      [7, [1, 5, 8]],
      [8, [3, 4]],
    ] as [number, number[]][];

    const results = findSubsets(new Map(lookup), 3);
    expect(results).toHaveLength(0);
  });
});

// describe("Find subsets with leftovers", () => {
//   test("Lookup with no leftovers is not a valid subset", () => {
//     /**
//      * That lookup should not return an subset because there is no leftover
//      * ```
//      * · 0 1 2 3 4 5 6 7 8
//      * 0 · | · · · | · · |
//      * 1---|-------X-----X
//      * 2 · | · · · | · · |
//      * 3 · | · · · | · · |
//      * 4---X-----X-X-----X
//      * 5 · | X · X | · · |
//      * 6 · | · · · | · · |
//      * 7---X-------X-----|
//      * 8 X | · · X | · · |
//      * ```
//      */
//     const lookup = [
//       [0, []],
//       [1, [5, 8]],
//       [2, []],
//       [3, []],
//       [4, [1, 4, 5, 8]],
//       [5, [2, 4]],
//       [6, []],
//       [7, [1, 5]],
//       [8, [0, 4]],
//     ] as [number, number[]][];

//     const results = [...findSubsets(new Map(lookup), 3, { hasLeftovers: true })];
//     expect(results).toHaveLength(0);
//   });

//   test("Lookup where a Y-axis has an extra value on an adjacent house is a valid subset", () => {
//     /**
//      * That lookup should return an subset because there is one leftover
//      * ```
//      * · 0 1 2 3 4 5 6 7 8
//      * 0 · | · · · | · · |
//      * 1---|-------X-----X
//      * 2 · | · · · | · · |
//      * 3 · | · · · | · · |
//      * 4---X-----X-X-----X
//      * 5 · | X · X | · · X <-- This is the leftover
//      * 6 · | · · · | · · |
//      * 7---X-------X-----|
//      * 8 X | · · X | · · |
//      * ```
//      */
//     const lookup = [
//       [0, []],
//       [1, [5, 8]],
//       [2, []],
//       [3, []],
//       [4, [1, 4, 5, 8]],
//       [5, [2, 4, 8]], // Here is an 8 that is LEFTOVER on the Y-axis
//       [6, []],
//       [7, [1, 5]],
//       [8, [0, 4]],
//     ] as [number, number[]][];

//     const results = [...findSubsets(new Map(lookup), 3, { hasLeftovers: true })];
//     expect(results).toHaveLength(1);
//     expect([...results[0][0]].sort()).toStrictEqual([1, 4, 7]);
//     expect([...results[0][1]].sort()).toStrictEqual([1, 5, 8]);
//     expect([...results[0][2]].sort()).toStrictEqual([5]);
//     expect(results[0][3]).toBe(8);
//   });

//   test("Lookup where a Y-axis has two extra values on the same adjacent house is a valid subset", () => {
//     /**
//      * That lookup should return an subset because there is two leftovers on the same adjacent house
//      * ```
//      * · 0 1 2 3 4 5 6 7 8
//      * 0 · | · · · | · · |
//      * 1---|-------X-----X
//      * 2 · | · · · | · · |
//      * 3 · | · · · | · · X <-- This is a leftover
//      * 4---X-----X-X-----X
//      * 5 · | X · X | · · X <-- This is another leftover
//      * 6 · | · · · | · · |
//      * 7---X-------X-----|
//      * 8 X | · · X | · · |
//      * ```
//      */
//     const lookup = [
//       [0, []],
//       [1, [5, 8]],
//       [2, []],
//       [3, [8]], // Here is an 8 that is LEFTOVER on the Y-axis
//       [4, [1, 4, 5, 8]],
//       [5, [2, 4, 8]], // Here is an 8 that is LEFTOVER on the Y-axis
//       [6, []],
//       [7, [1, 5]],
//       [8, [0, 4]],
//     ] as [number, number[]][];

//     const results = [...findSubsets(new Map(lookup), 3, { hasLeftovers: true })];
//     expect(results).toHaveLength(1);
//     expect([...results[0][0]].sort()).toStrictEqual([1, 4, 7]);
//     expect([...results[0][1]].sort()).toStrictEqual([1, 5, 8]);
//     expect([...results[0][2]].sort()).toStrictEqual([3, 5]);
//     expect(results[0][3]).toBe(8);
//   });

//   test("Lookup where a Y-axis has two extra values with only one on the same adjacent house is not a valid subset", () => {
//     /**
//      * That lookup should return an subset because one of the leftovers is not on the same adjacent house
//      * ```
//      * · 0 1 2 3 4 5 6 7 8
//      * 0 · | · · · | · · |
//      * 1---|-------X-----X
//      * 2 · | · · · | · · |
//      * 3 · | · · · | · · X <-- This is a leftover
//      * 4---X-----X-X-----X
//      * 5 · | X · X | · · |
//      * 6 · | · · · | · · X <-- This is an invalid leftover
//      * 7---X-------X-----|
//      * 8 X | · · X | · · |
//      * ```
//      */
//     const lookup = [
//       [0, []],
//       [1, [5, 8]],
//       [2, []],
//       [3, [8]], // Here is an 8 that is LEFTOVER on the Y-axis
//       [4, [1, 4, 5, 8]],
//       [5, [2, 4]],
//       [6, [8]], // Here is an 8 that is an INVALID leftover on the Y-axis (because not on the same adjacent house)
//       [7, [1, 5]],
//       [8, [0, 4]],
//     ] as [number, number[]][];

//     const results = [...findSubsets(new Map(lookup), 3, { hasLeftovers: true })];
//     expect(results).toHaveLength(0);
//   });

//   test("Lookup where a Y-axis has an extra value on another adjacent house is not a valid subset", () => {
//     /**
//      * That lookup should not return an subset because the leftover is not on the same adjacent house
//      * ```
//      * · 0 1 2 3 4 5 6 7 8
//      * 0 · | · · · | · · |
//      * 1---|-------X-----X
//      * 2 · | · · · | · · |
//      * 3 · | · · · | · · |
//      * 4---X-----X-X-----X
//      * 5 · | X · X | · · |
//      * 6 · | · · · | · · X <-- This is an invalid leftover
//      * 7---X-------X-----|
//      * 8 X | · · X | · · |
//      * ```
//      */
//     const lookup = [
//       [0, []],
//       [1, [5, 8]],
//       [2, []],
//       [3, []],
//       [4, [1, 4, 5, 8]],
//       [5, [2, 4]],
//       [6, [8]], // Here is an 8 that is an INVALID leftover on the Y-axis (because not on the same adjacent house)
//       [7, [1, 5]],
//       [8, [0, 4]],
//     ] as [number, number[]][];

//     const results = [...findSubsets(new Map(lookup), 3, { hasLeftovers: true })];
//     expect(results).toHaveLength(0);
//   });

//   test("Lookup where two Y-axes have an extra value on the same adjacent house is not a valid subset", () => {
//     /**
//      * That lookup should not return an subset because the leftovers are not on the same Y-axis
//      * ```
//      * · 0 1 2 3 4 5 6 7 8
//      * 0 · | · · · | · · |
//      * 1---|-------X-----X
//      * 2 · | · · · | · · |
//      * 3 · | · · · | · · X <-- Here is a leftover on the Y-axis 8
//      * 4---X-----X-X-----X
//      * 5 · | X · X X · · | <-- The leftover is not on the same Y-axis
//      * 6 · | · · · | · · |
//      * 7---X-------X-----|
//      * 8 X | · · X | · · |
//      * ```
//      */
//     const lookup = [
//       [0, []],
//       [1, [5, 8]],
//       [2, []],
//       [3, [8]], // Here is the first leftover
//       [4, [1, 4, 5, 8]],
//       [5, [2, 4]],
//       [6, [5]], // Here is another leftover but not with the same value
//       [7, [1, 5]],
//       [8, [0, 4]],
//     ] as [number, number[]][];

//     const results = [...findSubsets(new Map(lookup), 3, { hasLeftovers: true })];
//     expect(results).toHaveLength(0);
//   });
// });

// describe("Find incomplete subsets with leftovers", () => {
//   test("Lookup with an incomplete subset and with leftovers is a valid subset", () => {
//     /**
//      * That lookup should return because even though it is incomplete it has a
//      * leftover that completes it
//      * ```
//      * · 0 1 2 3 4 5 6 7 8
//      * 0 · | · · · | · · |
//      * 1---|-------X-----X
//      * 2 · | · · · | · · |
//      * 3 · | · · · | · · |
//      * 4---X-----X-X-----O <-- There should be a value here
//      * 5 · | X · X | · · X <-- This is a leftover that completes the subset
//      * 6 · | · · · | · · |
//      * 7---X-------X-----|
//      * 8 X | · · X | · · |
//      * ```
//      */
//     const lookup = [
//       [0, []],
//       [1, [5, 8]], // Here there is an 8 on the Y-axis
//       [2, []],
//       [3, []],
//       [4, [1, 4, 5]], // Here there is an 8 MISSING on the Y-axis
//       [5, [2, 4, 8]], // Here there is an 8 leftover that COMPLETES the subset
//       [6, []],
//       [7, [1, 5]],
//       [8, [0, 4]],
//     ] as [number, number[]][];

//     /*
//      * · 0 1 2 3 4 5 6 7 8
//      * 0 · · · · | | · · |
//      * 1---------|-X-----X
//      * 2 · · · · | | · · |
//      * 3 · · · · | | · · |
//      * 4---X-----X-X-----|
//      * 5-----X---X-|-----X
//      * 6 · · · · | | · · |
//      * 7 · X · · | X · · |
//      * 8 X · · · X | · · |
//      */

//     const results = [
//       ...findSubsets({
//         lookup,
//         level: 3,
//         hasLeftovers: true,
//         isIncomplete: true
//       })
//     ];
//     expect(results).toHaveLength(1);
//     expect([...results[0][0]].sort()).toStrictEqual([1, 4, 7]);
//     expect([...results[0][1]].sort()).toStrictEqual([1, 5, 8]);
//     expect([...results[0][2]].sort()).toStrictEqual([5]);
//     expect(results[0][3]).toBe(8);
//   });

//   test("Lookup with an incomplete subset of level 4 and with leftovers is a valid subset", () => {
//     /**
//      * That lookup should return because even though it is incomplete it has a
//      * leftover that completes it
//      * ```
//      * · 0 1 2 3 4 5 6 7 8
//      * 0---|---X-----X---X
//      * 1 ✕ | ✕ | ✕ · | · |
//      * 2---X---X---✕-X---|
//      * 3---|---|-----X---X
//      * 4 · | ✕ | ✕ ✕ | · |
//      * 5 ✕ | ✕ | ✕ ✕ | · |
//      * 6 · | · | · · | · |
//      * 7---X---|-✕-✕-|---|
//      * 8 ✕ | · X · ✕ | · |
//      * ```
//      */
//     const lookup = [
//       [0, [3, 6, 8]],
//       [1, [0, 2, 4]],
//       [2, [1, 3, 5, 6]],
//       [3, [6, 8]],
//       [4, [2, 4, 5]],
//       [5, [0, 2, 4, 5]],
//       [6, []],
//       [7, [1, 4, 5]], // Here a value (3, 6 or 8) is MISSING in order to have a valid COMPLETE subset
//       [8, [0, 3, 5]], // Here the 3 is a leftover that makes the subset a valid INCOMPLETE subset
//     ] as [number, number[]][];

//     const results = [
//       ...findSubsets({
//         lookup,
//         level: 4,
//         hasLeftovers: true,
//         isIncomplete: true
//       })
//     ];
//     expect(results).toHaveLength(1);
//     expect([...results[0][0]].sort()).toStrictEqual([0, 2, 3, 7]);
//     expect([...results[0][1]].sort()).toStrictEqual([1, 3, 6, 8]);
//     expect([...results[0][2]].sort()).toStrictEqual([8]);
//     expect(results[0][3]).toBe(3);
//   });

//   test("Lookup with an incomplete subset but no leftovers is not a valid subset", () => {
//     /**
//      * That lookup should not return because it is incomplete and no leftover completes it
//      * ```
//      * · 0 1 2 3 4 5 6 7 8
//      * 0 · | · · · | · · |
//      * 1---|-------X-----X
//      * 2 · | · · · | · · |
//      * 3 · | · · · | · · |
//      * 4---X-----X-X-----O <-- There should be a value here
//      * 5 · | X · X | · · | <-- There should be a leftover here for instance
//      * 6 · | · · · | · · |
//      * 7---X-------X-----|
//      * 8 X | · · X | · · |
//      * ```
//      */
//     const lookup = [
//       [0, []],
//       [1, [5, 8]], // Here there is an 8 on the Y-axis
//       [2, []],
//       [3, []],
//       [4, [1, 4, 5]], // Here there is an 8 MISSING on the Y-axis
//       [5, [2, 4]], // There should be a leftover here for instance
//       [6, []],
//       [7, [1, 5]],
//       [8, [0, 4]],
//     ] as [number, number[]][];

//     const results = [
//       ...findSubsets({
//         lookup,
//         level: 3,
//         hasLeftovers: true,
//         isIncomplete: true
//       })
//     ];
//     expect(results).toHaveLength(0);
//   });
// });
