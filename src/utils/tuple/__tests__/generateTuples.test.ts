import { generateTuples } from "..";

describe("Get all the possible tuples", () => {
  test("With n = 2", () => {
    const results = generateTuples({ size: 2, validValues: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] });

    expect(results).toHaveLength(100);

    expect(results[0]).toStrictEqual([0, 0]);
    expect(results[1]).toStrictEqual([0, 1]);
    expect(results[2]).toStrictEqual([0, 2]);
    expect(results[3]).toStrictEqual([0, 3]);
    expect(results[4]).toStrictEqual([0, 4]);
    expect(results[5]).toStrictEqual([0, 5]);
    expect(results[6]).toStrictEqual([0, 6]);
    expect(results[7]).toStrictEqual([0, 7]);
    expect(results[8]).toStrictEqual([0, 8]);
    expect(results[9]).toStrictEqual([0, 9]);

    expect(results[10]).toStrictEqual([1, 0]);
    expect(results[11]).toStrictEqual([1, 1]);
    expect(results[12]).toStrictEqual([1, 2]);
    expect(results[13]).toStrictEqual([1, 3]);
    expect(results[14]).toStrictEqual([1, 4]);
    expect(results[15]).toStrictEqual([1, 5]);
    expect(results[16]).toStrictEqual([1, 6]);
    expect(results[17]).toStrictEqual([1, 7]);
    expect(results[18]).toStrictEqual([1, 8]);
    expect(results[19]).toStrictEqual([1, 9]);

    expect(results[20]).toStrictEqual([2, 0]);
    expect(results[21]).toStrictEqual([2, 1]);
    expect(results[22]).toStrictEqual([2, 2]);
    expect(results[23]).toStrictEqual([2, 3]);
    expect(results[24]).toStrictEqual([2, 4]);
    expect(results[25]).toStrictEqual([2, 5]);
    expect(results[26]).toStrictEqual([2, 6]);
    expect(results[27]).toStrictEqual([2, 7]);
    expect(results[28]).toStrictEqual([2, 8]);
    expect(results[29]).toStrictEqual([2, 9]);

    expect(results[30]).toStrictEqual([3, 0]);
    expect(results[31]).toStrictEqual([3, 1]);
    expect(results[32]).toStrictEqual([3, 2]);
    expect(results[33]).toStrictEqual([3, 3]);
    expect(results[34]).toStrictEqual([3, 4]);
    expect(results[35]).toStrictEqual([3, 5]);
    expect(results[36]).toStrictEqual([3, 6]);
    expect(results[37]).toStrictEqual([3, 7]);
    expect(results[38]).toStrictEqual([3, 8]);
    expect(results[39]).toStrictEqual([3, 9]);

    expect(results[40]).toStrictEqual([4, 0]);
    expect(results[41]).toStrictEqual([4, 1]);
    expect(results[42]).toStrictEqual([4, 2]);
    expect(results[43]).toStrictEqual([4, 3]);
    expect(results[44]).toStrictEqual([4, 4]);
    expect(results[45]).toStrictEqual([4, 5]);
    expect(results[46]).toStrictEqual([4, 6]);
    expect(results[47]).toStrictEqual([4, 7]);
    expect(results[48]).toStrictEqual([4, 8]);
    expect(results[49]).toStrictEqual([4, 9]);

    expect(results[50]).toStrictEqual([5, 0]);
    expect(results[51]).toStrictEqual([5, 1]);
    expect(results[52]).toStrictEqual([5, 2]);
    expect(results[53]).toStrictEqual([5, 3]);
    expect(results[54]).toStrictEqual([5, 4]);
    expect(results[55]).toStrictEqual([5, 5]);
    expect(results[56]).toStrictEqual([5, 6]);
    expect(results[57]).toStrictEqual([5, 7]);
    expect(results[58]).toStrictEqual([5, 8]);
    expect(results[59]).toStrictEqual([5, 9]);

    expect(results[60]).toStrictEqual([6, 0]);
    expect(results[61]).toStrictEqual([6, 1]);
    expect(results[62]).toStrictEqual([6, 2]);
    expect(results[63]).toStrictEqual([6, 3]);
    expect(results[64]).toStrictEqual([6, 4]);
    expect(results[65]).toStrictEqual([6, 5]);
    expect(results[66]).toStrictEqual([6, 6]);
    expect(results[67]).toStrictEqual([6, 7]);
    expect(results[68]).toStrictEqual([6, 8]);
    expect(results[69]).toStrictEqual([6, 9]);

    expect(results[70]).toStrictEqual([7, 0]);
    expect(results[71]).toStrictEqual([7, 1]);
    expect(results[72]).toStrictEqual([7, 2]);
    expect(results[73]).toStrictEqual([7, 3]);
    expect(results[74]).toStrictEqual([7, 4]);
    expect(results[75]).toStrictEqual([7, 5]);
    expect(results[76]).toStrictEqual([7, 6]);
    expect(results[77]).toStrictEqual([7, 7]);
    expect(results[78]).toStrictEqual([7, 8]);
    expect(results[79]).toStrictEqual([7, 9]);

    expect(results[80]).toStrictEqual([8, 0]);
    expect(results[81]).toStrictEqual([8, 1]);
    expect(results[82]).toStrictEqual([8, 2]);
    expect(results[83]).toStrictEqual([8, 3]);
    expect(results[84]).toStrictEqual([8, 4]);
    expect(results[85]).toStrictEqual([8, 5]);
    expect(results[86]).toStrictEqual([8, 6]);
    expect(results[87]).toStrictEqual([8, 7]);
    expect(results[88]).toStrictEqual([8, 8]);
    expect(results[89]).toStrictEqual([8, 9]);

    expect(results[90]).toStrictEqual([9, 0]);
    expect(results[91]).toStrictEqual([9, 1]);
    expect(results[92]).toStrictEqual([9, 2]);
    expect(results[93]).toStrictEqual([9, 3]);
    expect(results[94]).toStrictEqual([9, 4]);
    expect(results[95]).toStrictEqual([9, 5]);
    expect(results[96]).toStrictEqual([9, 6]);
    expect(results[97]).toStrictEqual([9, 7]);
    expect(results[98]).toStrictEqual([9, 8]);
    expect(results[99]).toStrictEqual([9, 9]);
  });

  test("With n = 3", () => {
    const results = generateTuples({ size: 3, validValues: [0, 1, 2, 3] });

    expect(results).toHaveLength(64);

    expect(results[0]).toStrictEqual([0, 0, 0]);
    expect(results[1]).toStrictEqual([0, 0, 1]);
    expect(results[2]).toStrictEqual([0, 0, 2]);
    expect(results[3]).toStrictEqual([0, 0, 3]);
    expect(results[4]).toStrictEqual([0, 1, 0]);
    expect(results[5]).toStrictEqual([0, 1, 1]);
    expect(results[6]).toStrictEqual([0, 1, 2]);
    expect(results[7]).toStrictEqual([0, 1, 3]);
    expect(results[8]).toStrictEqual([0, 2, 0]);
    expect(results[9]).toStrictEqual([0, 2, 1]);
    expect(results[10]).toStrictEqual([0, 2, 2]);
    expect(results[11]).toStrictEqual([0, 2, 3]);
    expect(results[12]).toStrictEqual([0, 3, 0]);
    expect(results[13]).toStrictEqual([0, 3, 1]);
    expect(results[14]).toStrictEqual([0, 3, 2]);
    expect(results[15]).toStrictEqual([0, 3, 3]);

    expect(results[16]).toStrictEqual([1, 0, 0]);
    expect(results[17]).toStrictEqual([1, 0, 1]);
    expect(results[18]).toStrictEqual([1, 0, 2]);
    expect(results[19]).toStrictEqual([1, 0, 3]);
    expect(results[20]).toStrictEqual([1, 1, 0]);
    expect(results[21]).toStrictEqual([1, 1, 1]);
    expect(results[22]).toStrictEqual([1, 1, 2]);
    expect(results[23]).toStrictEqual([1, 1, 3]);
    expect(results[24]).toStrictEqual([1, 2, 0]);
    expect(results[25]).toStrictEqual([1, 2, 1]);
    expect(results[26]).toStrictEqual([1, 2, 2]);
    expect(results[27]).toStrictEqual([1, 2, 3]);
    expect(results[28]).toStrictEqual([1, 3, 0]);
    expect(results[29]).toStrictEqual([1, 3, 1]);
    expect(results[30]).toStrictEqual([1, 3, 2]);
    expect(results[31]).toStrictEqual([1, 3, 3]);

    expect(results[32]).toStrictEqual([2, 0, 0]);
    expect(results[33]).toStrictEqual([2, 0, 1]);
    expect(results[34]).toStrictEqual([2, 0, 2]);
    expect(results[35]).toStrictEqual([2, 0, 3]);
    expect(results[36]).toStrictEqual([2, 1, 0]);
    expect(results[37]).toStrictEqual([2, 1, 1]);
    expect(results[38]).toStrictEqual([2, 1, 2]);
    expect(results[39]).toStrictEqual([2, 1, 3]);
    expect(results[40]).toStrictEqual([2, 2, 0]);
    expect(results[41]).toStrictEqual([2, 2, 1]);
    expect(results[42]).toStrictEqual([2, 2, 2]);
    expect(results[43]).toStrictEqual([2, 2, 3]);
    expect(results[44]).toStrictEqual([2, 3, 0]);
    expect(results[45]).toStrictEqual([2, 3, 1]);
    expect(results[46]).toStrictEqual([2, 3, 2]);
    expect(results[47]).toStrictEqual([2, 3, 3]);

    expect(results[48]).toStrictEqual([3, 0, 0]);
    expect(results[49]).toStrictEqual([3, 0, 1]);
    expect(results[50]).toStrictEqual([3, 0, 2]);
    expect(results[51]).toStrictEqual([3, 0, 3]);
    expect(results[52]).toStrictEqual([3, 1, 0]);
    expect(results[53]).toStrictEqual([3, 1, 1]);
    expect(results[54]).toStrictEqual([3, 1, 2]);
    expect(results[55]).toStrictEqual([3, 1, 3]);
    expect(results[56]).toStrictEqual([3, 2, 0]);
    expect(results[57]).toStrictEqual([3, 2, 1]);
    expect(results[58]).toStrictEqual([3, 2, 2]);
    expect(results[59]).toStrictEqual([3, 2, 3]);
    expect(results[60]).toStrictEqual([3, 3, 0]);
    expect(results[61]).toStrictEqual([3, 3, 1]);
    expect(results[62]).toStrictEqual([3, 3, 2]);
    expect(results[63]).toStrictEqual([3, 3, 3]);
  });

  test("With n = 4", () => {
    const results = generateTuples({ size: 4, validValues: [0, 1] });

    expect(results).toHaveLength(16);

    expect(results[0]).toStrictEqual([0, 0, 0, 0]);
    expect(results[1]).toStrictEqual([0, 0, 0, 1]);
    expect(results[2]).toStrictEqual([0, 0, 1, 0]);
    expect(results[3]).toStrictEqual([0, 0, 1, 1]);
    expect(results[4]).toStrictEqual([0, 1, 0, 0]);
    expect(results[5]).toStrictEqual([0, 1, 0, 1]);
    expect(results[6]).toStrictEqual([0, 1, 1, 0]);
    expect(results[7]).toStrictEqual([0, 1, 1, 1]);

    expect(results[8]).toStrictEqual([1, 0, 0, 0]);
    expect(results[9]).toStrictEqual([1, 0, 0, 1]);
    expect(results[10]).toStrictEqual([1, 0, 1, 0]);
    expect(results[11]).toStrictEqual([1, 0, 1, 1]);
    expect(results[12]).toStrictEqual([1, 1, 0, 0]);
    expect(results[13]).toStrictEqual([1, 1, 0, 1]);
    expect(results[14]).toStrictEqual([1, 1, 1, 0]);
    expect(results[15]).toStrictEqual([1, 1, 1, 1]);
  });
});

describe("Get all the possible tuples without same values", () => {
  test("With n = 2", () => {
    const results = generateTuples({ size: 2, validValues: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], getSameValues: false });

    expect(results).toHaveLength(90);

    // expect(results[]).toStrictEqual([0, 0]);
    expect(results[0]).toStrictEqual([0, 1]);
    expect(results[1]).toStrictEqual([0, 2]);
    expect(results[2]).toStrictEqual([0, 3]);
    expect(results[3]).toStrictEqual([0, 4]);
    expect(results[4]).toStrictEqual([0, 5]);
    expect(results[5]).toStrictEqual([0, 6]);
    expect(results[6]).toStrictEqual([0, 7]);
    expect(results[7]).toStrictEqual([0, 8]);
    expect(results[8]).toStrictEqual([0, 9]);

    expect(results[9]).toStrictEqual([1, 0]);
    // expect(results[]).toStrictEqual([1, 1]);
    expect(results[10]).toStrictEqual([1, 2]);
    expect(results[11]).toStrictEqual([1, 3]);
    expect(results[12]).toStrictEqual([1, 4]);
    expect(results[13]).toStrictEqual([1, 5]);
    expect(results[14]).toStrictEqual([1, 6]);
    expect(results[15]).toStrictEqual([1, 7]);
    expect(results[16]).toStrictEqual([1, 8]);
    expect(results[17]).toStrictEqual([1, 9]);

    expect(results[18]).toStrictEqual([2, 0]);
    expect(results[19]).toStrictEqual([2, 1]);
    // expect(results[]).toStrictEqual([2, 2]);
    expect(results[20]).toStrictEqual([2, 3]);
    expect(results[21]).toStrictEqual([2, 4]);
    expect(results[22]).toStrictEqual([2, 5]);
    expect(results[23]).toStrictEqual([2, 6]);
    expect(results[24]).toStrictEqual([2, 7]);
    expect(results[25]).toStrictEqual([2, 8]);
    expect(results[26]).toStrictEqual([2, 9]);

    expect(results[27]).toStrictEqual([3, 0]);
    expect(results[28]).toStrictEqual([3, 1]);
    expect(results[29]).toStrictEqual([3, 2]);
    // expect(results[]).toStrictEqual([3, 3]);
    expect(results[30]).toStrictEqual([3, 4]);
    expect(results[31]).toStrictEqual([3, 5]);
    expect(results[32]).toStrictEqual([3, 6]);
    expect(results[33]).toStrictEqual([3, 7]);
    expect(results[34]).toStrictEqual([3, 8]);
    expect(results[35]).toStrictEqual([3, 9]);

    expect(results[36]).toStrictEqual([4, 0]);
    expect(results[37]).toStrictEqual([4, 1]);
    expect(results[38]).toStrictEqual([4, 2]);
    expect(results[39]).toStrictEqual([4, 3]);
    // expect(results[]).toStrictEqual([4, 4]);
    expect(results[40]).toStrictEqual([4, 5]);
    expect(results[41]).toStrictEqual([4, 6]);
    expect(results[42]).toStrictEqual([4, 7]);
    expect(results[43]).toStrictEqual([4, 8]);
    expect(results[44]).toStrictEqual([4, 9]);

    expect(results[45]).toStrictEqual([5, 0]);
    expect(results[46]).toStrictEqual([5, 1]);
    expect(results[47]).toStrictEqual([5, 2]);
    expect(results[48]).toStrictEqual([5, 3]);
    expect(results[49]).toStrictEqual([5, 4]);
    // expect(results[]).toStrictEqual([5, 5]);
    expect(results[50]).toStrictEqual([5, 6]);
    expect(results[51]).toStrictEqual([5, 7]);
    expect(results[52]).toStrictEqual([5, 8]);
    expect(results[53]).toStrictEqual([5, 9]);

    expect(results[54]).toStrictEqual([6, 0]);
    expect(results[55]).toStrictEqual([6, 1]);
    expect(results[56]).toStrictEqual([6, 2]);
    expect(results[57]).toStrictEqual([6, 3]);
    expect(results[58]).toStrictEqual([6, 4]);
    expect(results[59]).toStrictEqual([6, 5]);
    // expect(results[]).toStrictEqual([6, 6]);
    expect(results[60]).toStrictEqual([6, 7]);
    expect(results[61]).toStrictEqual([6, 8]);
    expect(results[62]).toStrictEqual([6, 9]);

    expect(results[63]).toStrictEqual([7, 0]);
    expect(results[64]).toStrictEqual([7, 1]);
    expect(results[65]).toStrictEqual([7, 2]);
    expect(results[66]).toStrictEqual([7, 3]);
    expect(results[67]).toStrictEqual([7, 4]);
    expect(results[68]).toStrictEqual([7, 5]);
    expect(results[69]).toStrictEqual([7, 6]);
    // expect(results[]).toStrictEqual([7, 7]);
    expect(results[70]).toStrictEqual([7, 8]);
    expect(results[71]).toStrictEqual([7, 9]);

    expect(results[72]).toStrictEqual([8, 0]);
    expect(results[73]).toStrictEqual([8, 1]);
    expect(results[74]).toStrictEqual([8, 2]);
    expect(results[75]).toStrictEqual([8, 3]);
    expect(results[76]).toStrictEqual([8, 4]);
    expect(results[77]).toStrictEqual([8, 5]);
    expect(results[78]).toStrictEqual([8, 6]);
    expect(results[79]).toStrictEqual([8, 7]);
    // expect(results[]).toStrictEqual([8, 8]);
    expect(results[80]).toStrictEqual([8, 9]);

    expect(results[81]).toStrictEqual([9, 0]);
    expect(results[82]).toStrictEqual([9, 1]);
    expect(results[83]).toStrictEqual([9, 2]);
    expect(results[84]).toStrictEqual([9, 3]);
    expect(results[85]).toStrictEqual([9, 4]);
    expect(results[86]).toStrictEqual([9, 5]);
    expect(results[87]).toStrictEqual([9, 6]);
    expect(results[88]).toStrictEqual([9, 7]);
    expect(results[89]).toStrictEqual([9, 8]);
    // expect(results[]).toStrictEqual([9, 9]);
  });

  test("With n = 3", () => {
    const results = generateTuples({ size: 3, validValues: [0, 1, 2, 3], getSameValues: false });

    expect(results).toHaveLength(24);

    // expect(results[]).toStrictEqual([0, 0, 0]);
    // expect(results[]).toStrictEqual([0, 0, 1]);
    // expect(results[]).toStrictEqual([0, 0, 2]);
    // expect(results[]).toStrictEqual([0, 0, 3]);
    // expect(results[]).toStrictEqual([0, 1, 0]);
    // expect(results[]).toStrictEqual([0, 1, 1]);
    expect(results[0]).toStrictEqual([0, 1, 2]);
    expect(results[1]).toStrictEqual([0, 1, 3]);
    // expect(results[]).toStrictEqual([0, 2, 0]);
    expect(results[2]).toStrictEqual([0, 2, 1]);
    // expect(results[]).toStrictEqual([0, 2, 2]);
    expect(results[3]).toStrictEqual([0, 2, 3]);
    // expect(results[]).toStrictEqual([0, 3, 0]);
    expect(results[4]).toStrictEqual([0, 3, 1]);
    expect(results[5]).toStrictEqual([0, 3, 2]);
    // expect(results[]).toStrictEqual([0, 3, 3]);

    // expect(results[]).toStrictEqual([1, 0, 0]);
    // expect(results[]).toStrictEqual([1, 0, 1]);
    expect(results[6]).toStrictEqual([1, 0, 2]);
    expect(results[7]).toStrictEqual([1, 0, 3]);
    // expect(results[]).toStrictEqual([1, 1, 0]);
    // expect(results[]).toStrictEqual([1, 1, 1]);
    // expect(results[]).toStrictEqual([1, 1, 2]);
    // expect(results[]).toStrictEqual([1, 1, 3]);
    expect(results[8]).toStrictEqual([1, 2, 0]);
    // expect(results[]).toStrictEqual([1, 2, 1]);
    // expect(results[]).toStrictEqual([1, 2, 2]);
    expect(results[9]).toStrictEqual([1, 2, 3]);
    expect(results[10]).toStrictEqual([1, 3, 0]);
    // expect(results[]).toStrictEqual([1, 3, 1]);
    expect(results[11]).toStrictEqual([1, 3, 2]);
    // expect(results[]).toStrictEqual([1, 3, 3]);

    // expect(results[]).toStrictEqual([2, 0, 0]);
    expect(results[12]).toStrictEqual([2, 0, 1]);
    // expect(results[]).toStrictEqual([2, 0, 2]);
    expect(results[13]).toStrictEqual([2, 0, 3]);
    expect(results[14]).toStrictEqual([2, 1, 0]);
    // expect(results[]).toStrictEqual([2, 1, 1]);
    // expect(results[]).toStrictEqual([2, 1, 2]);
    expect(results[15]).toStrictEqual([2, 1, 3]);
    // expect(results[]).toStrictEqual([2, 2, 0]);
    // expect(results[]).toStrictEqual([2, 2, 1]);
    // expect(results[]).toStrictEqual([2, 2, 2]);
    // expect(results[]).toStrictEqual([2, 2, 3]);
    expect(results[16]).toStrictEqual([2, 3, 0]);
    expect(results[17]).toStrictEqual([2, 3, 1]);
    // expect(results[]).toStrictEqual([2, 3, 2]);
    // expect(results[]).toStrictEqual([2, 3, 3]);

    // expect(results[]).toStrictEqual([3, 0, 0]);
    expect(results[18]).toStrictEqual([3, 0, 1]);
    expect(results[19]).toStrictEqual([3, 0, 2]);
    // expect(results[]).toStrictEqual([3, 0, 3]);
    expect(results[20]).toStrictEqual([3, 1, 0]);
    // expect(results[]).toStrictEqual([3, 1, 1]);
    expect(results[21]).toStrictEqual([3, 1, 2]);
    // expect(results[]).toStrictEqual([3, 1, 3]);
    expect(results[22]).toStrictEqual([3, 2, 0]);
    expect(results[23]).toStrictEqual([3, 2, 1]);
    // expect(results[]).toStrictEqual([3, 2, 2]);
    // expect(results[]).toStrictEqual([3, 2, 3]);
    // expect(results[]).toStrictEqual([3, 3, 0]);
    // expect(results[]).toStrictEqual([3, 3, 1]);
    // expect(results[]).toStrictEqual([3, 3, 2]);
    // expect(results[]).toStrictEqual([3, 3, 3]);
  });

  test("With n = 4", () => {
    const results = generateTuples({ size: 4, validValues: [0, 1], getSameValues: false });

    expect(results).toHaveLength(0);

    // expect(results[]).toStrictEqual([0, 0, 0, 0]);
    // expect(results[]).toStrictEqual([0, 0, 0, 1]);
    // expect(results[]).toStrictEqual([0, 0, 1, 0]);
    // expect(results[]).toStrictEqual([0, 0, 1, 1]);
    // expect(results[]).toStrictEqual([0, 1, 0, 0]);
    // expect(results[]).toStrictEqual([0, 1, 0, 1]);
    // expect(results[]).toStrictEqual([0, 1, 1, 0]);
    // expect(results[]).toStrictEqual([0, 1, 1, 1]);

    // expect(results[]).toStrictEqual([1, 0, 0, 0]);
    // expect(results[]).toStrictEqual([1, 0, 0, 1]);
    // expect(results[]).toStrictEqual([1, 0, 1, 0]);
    // expect(results[]).toStrictEqual([1, 0, 1, 1]);
    // expect(results[]).toStrictEqual([1, 1, 0, 0]);
    // expect(results[]).toStrictEqual([1, 1, 0, 1]);
    // expect(results[]).toStrictEqual([1, 1, 1, 0]);
    // expect(results[]).toStrictEqual([1, 1, 1, 1]);
  });
});

describe("Get all the possible tuples without duplicates", () => {
  test("With n = 2", () => {
    const results = generateTuples({ size: 2, validValues: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], getDuplicates: false });

    expect(results).toHaveLength(55);

    expect(results[0]).toStrictEqual([0, 0]);
    // expect(results[]).toStrictEqual([0, 1]);
    // expect(results[]).toStrictEqual([0, 2]);
    // expect(results[]).toStrictEqual([0, 3]);
    // expect(results[]).toStrictEqual([0, 4]);
    // expect(results[]).toStrictEqual([0, 5]);
    // expect(results[]).toStrictEqual([0, 6]);
    // expect(results[]).toStrictEqual([0, 7]);
    // expect(results[]).toStrictEqual([0, 8]);
    // expect(results[]).toStrictEqual([0, 9]);

    expect(results[1]).toStrictEqual([1, 0]);
    expect(results[2]).toStrictEqual([1, 1]);
    // expect(results[]).toStrictEqual([1, 2]);
    // expect(results[]).toStrictEqual([1, 3]);
    // expect(results[]).toStrictEqual([1, 4]);
    // expect(results[]).toStrictEqual([1, 5]);
    // expect(results[]).toStrictEqual([1, 6]);
    // expect(results[]).toStrictEqual([1, 7]);
    // expect(results[]).toStrictEqual([1, 8]);
    // expect(results[]).toStrictEqual([1, 9]);

    expect(results[3]).toStrictEqual([2, 0]);
    expect(results[4]).toStrictEqual([2, 1]);
    expect(results[5]).toStrictEqual([2, 2]);
    // expect(results[]).toStrictEqual([2, 3]);
    // expect(results[]).toStrictEqual([2, 4]);
    // expect(results[]).toStrictEqual([2, 5]);
    // expect(results[]).toStrictEqual([2, 6]);
    // expect(results[]).toStrictEqual([2, 7]);
    // expect(results[]).toStrictEqual([2, 8]);
    // expect(results[]).toStrictEqual([2, 9]);

    expect(results[6]).toStrictEqual([3, 0]);
    expect(results[7]).toStrictEqual([3, 1]);
    expect(results[8]).toStrictEqual([3, 2]);
    expect(results[9]).toStrictEqual([3, 3]);
    // expect(results[]).toStrictEqual([3, 4]);
    // expect(results[]).toStrictEqual([3, 5]);
    // expect(results[]).toStrictEqual([3, 6]);
    // expect(results[]).toStrictEqual([3, 7]);
    // expect(results[]).toStrictEqual([3, 8]);
    // expect(results[]).toStrictEqual([3, 9]);

    expect(results[10]).toStrictEqual([4, 0]);
    expect(results[11]).toStrictEqual([4, 1]);
    expect(results[12]).toStrictEqual([4, 2]);
    expect(results[13]).toStrictEqual([4, 3]);
    expect(results[14]).toStrictEqual([4, 4]);
    // expect(results[]).toStrictEqual([4, 5]);
    // expect(results[]).toStrictEqual([4, 6]);
    // expect(results[]).toStrictEqual([4, 7]);
    // expect(results[]).toStrictEqual([4, 8]);
    // expect(results[]).toStrictEqual([4, 9]);

    expect(results[15]).toStrictEqual([5, 0]);
    expect(results[16]).toStrictEqual([5, 1]);
    expect(results[17]).toStrictEqual([5, 2]);
    expect(results[18]).toStrictEqual([5, 3]);
    expect(results[19]).toStrictEqual([5, 4]);
    expect(results[20]).toStrictEqual([5, 5]);
    // expect(results[]).toStrictEqual([5, 6]);
    // expect(results[]).toStrictEqual([5, 7]);
    // expect(results[]).toStrictEqual([5, 8]);
    // expect(results[]).toStrictEqual([5, 9]);

    expect(results[21]).toStrictEqual([6, 0]);
    expect(results[22]).toStrictEqual([6, 1]);
    expect(results[23]).toStrictEqual([6, 2]);
    expect(results[24]).toStrictEqual([6, 3]);
    expect(results[25]).toStrictEqual([6, 4]);
    expect(results[26]).toStrictEqual([6, 5]);
    expect(results[27]).toStrictEqual([6, 6]);
    // expect(results[]).toStrictEqual([6, 7]);
    // expect(results[]).toStrictEqual([6, 8]);
    // expect(results[]).toStrictEqual([6, 9]);

    expect(results[28]).toStrictEqual([7, 0]);
    expect(results[29]).toStrictEqual([7, 1]);
    expect(results[30]).toStrictEqual([7, 2]);
    expect(results[31]).toStrictEqual([7, 3]);
    expect(results[32]).toStrictEqual([7, 4]);
    expect(results[33]).toStrictEqual([7, 5]);
    expect(results[34]).toStrictEqual([7, 6]);
    expect(results[35]).toStrictEqual([7, 7]);
    // expect(results[]).toStrictEqual([7, 8]);
    // expect(results[]).toStrictEqual([7, 9]);

    expect(results[36]).toStrictEqual([8, 0]);
    expect(results[37]).toStrictEqual([8, 1]);
    expect(results[38]).toStrictEqual([8, 2]);
    expect(results[39]).toStrictEqual([8, 3]);
    expect(results[40]).toStrictEqual([8, 4]);
    expect(results[41]).toStrictEqual([8, 5]);
    expect(results[42]).toStrictEqual([8, 6]);
    expect(results[43]).toStrictEqual([8, 7]);
    expect(results[44]).toStrictEqual([8, 8]);
    // expect(results[]).toStrictEqual([8, 9]);

    expect(results[45]).toStrictEqual([9, 0]);
    expect(results[46]).toStrictEqual([9, 1]);
    expect(results[47]).toStrictEqual([9, 2]);
    expect(results[48]).toStrictEqual([9, 3]);
    expect(results[49]).toStrictEqual([9, 4]);
    expect(results[50]).toStrictEqual([9, 5]);
    expect(results[51]).toStrictEqual([9, 6]);
    expect(results[52]).toStrictEqual([9, 7]);
    expect(results[53]).toStrictEqual([9, 8]);
    expect(results[54]).toStrictEqual([9, 9]);
  });

  test("With n = 3", () => {
    const results = generateTuples({ size: 3, validValues: [0, 1, 2, 3], getDuplicates: false });

    expect(results).toHaveLength(20);

    expect(results[0]).toStrictEqual([0, 0, 0]);
    // expect(results[]).toStrictEqual([0, 0, 1]);
    // expect(results[]).toStrictEqual([0, 0, 2]);
    // expect(results[]).toStrictEqual([0, 0, 3]);
    // expect(results[]).toStrictEqual([0, 1, 0]);
    // expect(results[]).toStrictEqual([0, 1, 1]);
    // expect(results[]).toStrictEqual([0, 1, 2]);
    // expect(results[]).toStrictEqual([0, 1, 3]);
    // expect(results[]).toStrictEqual([0, 2, 0]);
    // expect(results[]).toStrictEqual([0, 2, 1]);
    // expect(results[]).toStrictEqual([0, 2, 2]);
    // expect(results[]).toStrictEqual([0, 2, 3]);
    // expect(results[]).toStrictEqual([0, 3, 0]);
    // expect(results[]).toStrictEqual([0, 3, 1]);
    // expect(results[]).toStrictEqual([0, 3, 2]);
    // expect(results[]).toStrictEqual([0, 3, 3]);

    expect(results[1]).toStrictEqual([1, 0, 0]);
    // expect(results[]).toStrictEqual([1, 0, 1]);
    // expect(results[]).toStrictEqual([1, 0, 2]);
    // expect(results[]).toStrictEqual([1, 0, 3]);
    expect(results[2]).toStrictEqual([1, 1, 0]);
    expect(results[3]).toStrictEqual([1, 1, 1]);
    // expect(results[]).toStrictEqual([1, 1, 2]);
    // expect(results[]).toStrictEqual([1, 1, 3]);
    // expect(results[]).toStrictEqual([1, 2, 0]);
    // expect(results[]).toStrictEqual([1, 2, 1]);
    // expect(results[]).toStrictEqual([1, 2, 2]);
    // expect(results[]).toStrictEqual([1, 2, 3]);
    // expect(results[]).toStrictEqual([1, 3, 0]);
    // expect(results[]).toStrictEqual([1, 3, 1]);
    // expect(results[]).toStrictEqual([1, 3, 2]);
    // expect(results[]).toStrictEqual([1, 3, 3]);

    expect(results[4]).toStrictEqual([2, 0, 0]);
    // expect(results[]).toStrictEqual([2, 0, 1]);
    // expect(results[]).toStrictEqual([2, 0, 2]);
    // expect(results[]).toStrictEqual([2, 0, 3]);
    expect(results[5]).toStrictEqual([2, 1, 0]);
    expect(results[6]).toStrictEqual([2, 1, 1]);
    // expect(results[]).toStrictEqual([2, 1, 2]);
    // expect(results[]).toStrictEqual([2, 1, 3]);
    expect(results[7]).toStrictEqual([2, 2, 0]);
    expect(results[8]).toStrictEqual([2, 2, 1]);
    expect(results[9]).toStrictEqual([2, 2, 2]);
    // expect(results[]).toStrictEqual([2, 2, 3]);
    // expect(results[]).toStrictEqual([2, 3, 0]);
    // expect(results[]).toStrictEqual([2, 3, 1]);
    // expect(results[]).toStrictEqual([2, 3, 2]);
    // expect(results[]).toStrictEqual([2, 3, 3]);

    expect(results[10]).toStrictEqual([3, 0, 0]);
    // expect(results[]).toStrictEqual([3, 0, 1]);
    // expect(results[]).toStrictEqual([3, 0, 2]);
    // expect(results[]).toStrictEqual([3, 0, 3]);
    expect(results[11]).toStrictEqual([3, 1, 0]);
    expect(results[12]).toStrictEqual([3, 1, 1]);
    // expect(results[]).toStrictEqual([3, 1, 2]);
    // expect(results[]).toStrictEqual([3, 1, 3]);
    expect(results[13]).toStrictEqual([3, 2, 0]);
    expect(results[14]).toStrictEqual([3, 2, 1]);
    expect(results[15]).toStrictEqual([3, 2, 2]);
    // expect(results[]).toStrictEqual([3, 2, 3]);
    expect(results[16]).toStrictEqual([3, 3, 0]);
    expect(results[17]).toStrictEqual([3, 3, 1]);
    expect(results[18]).toStrictEqual([3, 3, 2]);
    expect(results[19]).toStrictEqual([3, 3, 3]);
  });

  test("With n = 4", () => {
    const results = generateTuples({ size: 4, validValues: [0, 1], getDuplicates: false });

    expect(results).toHaveLength(5);

    expect(results[0]).toStrictEqual([0, 0, 0, 0]);
    // expect(results[]).toStrictEqual([0, 0, 0, 1]);
    // expect(results[]).toStrictEqual([0, 0, 1, 0]);
    // expect(results[]).toStrictEqual([0, 0, 1, 1]);
    // expect(results[]).toStrictEqual([0, 1, 0, 0]);
    // expect(results[]).toStrictEqual([0, 1, 0, 1]);
    // expect(results[]).toStrictEqual([0, 1, 1, 0]);
    // expect(results[]).toStrictEqual([0, 1, 1, 1]);

    expect(results[1]).toStrictEqual([1, 0, 0, 0]);
    // expect(results[]).toStrictEqual([1, 0, 0, 1]);
    // expect(results[]).toStrictEqual([1, 0, 1, 0]);
    // expect(results[]).toStrictEqual([1, 0, 1, 1]);
    expect(results[2]).toStrictEqual([1, 1, 0, 0]);
    // expect(results[]).toStrictEqual([1, 1, 0, 1]);
    expect(results[3]).toStrictEqual([1, 1, 1, 0]);
    expect(results[4]).toStrictEqual([1, 1, 1, 1]);
  });
});

describe("Get all the possible tuples without duplicates nor same values", () => {
  test("With n = 2", () => {
    const results = generateTuples({
      size: 2,
      validValues: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      getDuplicates: false,
      getSameValues: false,
    });

    expect(results).toHaveLength(45);

    // expect(results[]).toStrictEqual([0, 0]);
    // expect(results[]).toStrictEqual([0, 1]);
    // expect(results[]).toStrictEqual([0, 2]);
    // expect(results[]).toStrictEqual([0, 3]);
    // expect(results[]).toStrictEqual([0, 4]);
    // expect(results[]).toStrictEqual([0, 5]);
    // expect(results[]).toStrictEqual([0, 6]);
    // expect(results[]).toStrictEqual([0, 7]);
    // expect(results[]).toStrictEqual([0, 8]);
    // expect(results[]).toStrictEqual([0, 9]);

    expect(results[0]).toStrictEqual([1, 0]);
    // expect(results[]).toStrictEqual([1, 1]);
    // expect(results[]).toStrictEqual([1, 2]);
    // expect(results[]).toStrictEqual([1, 3]);
    // expect(results[]).toStrictEqual([1, 4]);
    // expect(results[]).toStrictEqual([1, 5]);
    // expect(results[]).toStrictEqual([1, 6]);
    // expect(results[]).toStrictEqual([1, 7]);
    // expect(results[]).toStrictEqual([1, 8]);
    // expect(results[]).toStrictEqual([1, 9]);

    expect(results[1]).toStrictEqual([2, 0]);
    expect(results[2]).toStrictEqual([2, 1]);
    // expect(results[]).toStrictEqual([2, 2]);
    // expect(results[]).toStrictEqual([2, 3]);
    // expect(results[]).toStrictEqual([2, 4]);
    // expect(results[]).toStrictEqual([2, 5]);
    // expect(results[]).toStrictEqual([2, 6]);
    // expect(results[]).toStrictEqual([2, 7]);
    // expect(results[]).toStrictEqual([2, 8]);
    // expect(results[]).toStrictEqual([2, 9]);

    expect(results[3]).toStrictEqual([3, 0]);
    expect(results[4]).toStrictEqual([3, 1]);
    expect(results[5]).toStrictEqual([3, 2]);
    // expect(results[]).toStrictEqual([3, 3]);
    // expect(results[]).toStrictEqual([3, 4]);
    // expect(results[]).toStrictEqual([3, 5]);
    // expect(results[]).toStrictEqual([3, 6]);
    // expect(results[]).toStrictEqual([3, 7]);
    // expect(results[]).toStrictEqual([3, 8]);
    // expect(results[]).toStrictEqual([3, 9]);

    expect(results[6]).toStrictEqual([4, 0]);
    expect(results[7]).toStrictEqual([4, 1]);
    expect(results[8]).toStrictEqual([4, 2]);
    expect(results[9]).toStrictEqual([4, 3]);
    // expect(results[]).toStrictEqual([4, 4]);
    // expect(results[]).toStrictEqual([4, 5]);
    // expect(results[]).toStrictEqual([4, 6]);
    // expect(results[]).toStrictEqual([4, 7]);
    // expect(results[]).toStrictEqual([4, 8]);
    // expect(results[]).toStrictEqual([4, 9]);

    expect(results[10]).toStrictEqual([5, 0]);
    expect(results[11]).toStrictEqual([5, 1]);
    expect(results[12]).toStrictEqual([5, 2]);
    expect(results[13]).toStrictEqual([5, 3]);
    expect(results[14]).toStrictEqual([5, 4]);
    // expect(results[]).toStrictEqual([5, 5]);
    // expect(results[]).toStrictEqual([5, 6]);
    // expect(results[]).toStrictEqual([5, 7]);
    // expect(results[]).toStrictEqual([5, 8]);
    // expect(results[]).toStrictEqual([5, 9]);

    expect(results[15]).toStrictEqual([6, 0]);
    expect(results[16]).toStrictEqual([6, 1]);
    expect(results[17]).toStrictEqual([6, 2]);
    expect(results[18]).toStrictEqual([6, 3]);
    expect(results[19]).toStrictEqual([6, 4]);
    expect(results[20]).toStrictEqual([6, 5]);
    // expect(results[]).toStrictEqual([6, 6]);
    // expect(results[]).toStrictEqual([6, 7]);
    // expect(results[]).toStrictEqual([6, 8]);
    // expect(results[]).toStrictEqual([6, 9]);

    expect(results[21]).toStrictEqual([7, 0]);
    expect(results[22]).toStrictEqual([7, 1]);
    expect(results[23]).toStrictEqual([7, 2]);
    expect(results[24]).toStrictEqual([7, 3]);
    expect(results[25]).toStrictEqual([7, 4]);
    expect(results[26]).toStrictEqual([7, 5]);
    expect(results[27]).toStrictEqual([7, 6]);
    // expect(results[]).toStrictEqual([7, 7]);
    // expect(results[]).toStrictEqual([7, 8]);
    // expect(results[]).toStrictEqual([7, 9]);

    expect(results[28]).toStrictEqual([8, 0]);
    expect(results[29]).toStrictEqual([8, 1]);
    expect(results[30]).toStrictEqual([8, 2]);
    expect(results[31]).toStrictEqual([8, 3]);
    expect(results[32]).toStrictEqual([8, 4]);
    expect(results[33]).toStrictEqual([8, 5]);
    expect(results[34]).toStrictEqual([8, 6]);
    expect(results[35]).toStrictEqual([8, 7]);
    // expect(results[]).toStrictEqual([8, 8]);
    // expect(results[]).toStrictEqual([8, 9]);

    expect(results[36]).toStrictEqual([9, 0]);
    expect(results[37]).toStrictEqual([9, 1]);
    expect(results[38]).toStrictEqual([9, 2]);
    expect(results[39]).toStrictEqual([9, 3]);
    expect(results[40]).toStrictEqual([9, 4]);
    expect(results[41]).toStrictEqual([9, 5]);
    expect(results[42]).toStrictEqual([9, 6]);
    expect(results[43]).toStrictEqual([9, 7]);
    expect(results[44]).toStrictEqual([9, 8]);
    // expect(results[]).toStrictEqual([9, 9]);
  });

  test("With n = 3", () => {
    const results = generateTuples({ size: 3, validValues: [0, 1, 2, 3], getDuplicates: false, getSameValues: false });

    expect(results).toHaveLength(4);

    // expect(results[]).toStrictEqual([0, 0, 0]);
    // expect(results[]).toStrictEqual([0, 0, 1]);
    // expect(results[]).toStrictEqual([0, 0, 2]);
    // expect(results[]).toStrictEqual([0, 0, 3]);
    // expect(results[]).toStrictEqual([0, 1, 0]);
    // expect(results[]).toStrictEqual([0, 1, 1]);
    // expect(results[]).toStrictEqual([0, 1, 2]);
    // expect(results[]).toStrictEqual([0, 1, 3]);
    // expect(results[]).toStrictEqual([0, 2, 0]);
    // expect(results[]).toStrictEqual([0, 2, 1]);
    // expect(results[]).toStrictEqual([0, 2, 2]);
    // expect(results[]).toStrictEqual([0, 2, 3]);
    // expect(results[]).toStrictEqual([0, 3, 0]);
    // expect(results[]).toStrictEqual([0, 3, 1]);
    // expect(results[]).toStrictEqual([0, 3, 2]);
    // expect(results[]).toStrictEqual([0, 3, 3]);

    // expect(results[]).toStrictEqual([1, 0, 0]);
    // expect(results[]).toStrictEqual([1, 0, 1]);
    // expect(results[]).toStrictEqual([1, 0, 2]);
    // expect(results[]).toStrictEqual([1, 0, 3]);
    // expect(results[]).toStrictEqual([1, 1, 0]);
    // expect(results[]).toStrictEqual([1, 1, 1]);
    // expect(results[]).toStrictEqual([1, 1, 2]);
    // expect(results[]).toStrictEqual([1, 1, 3]);
    // expect(results[]).toStrictEqual([1, 2, 0]);
    // expect(results[]).toStrictEqual([1, 2, 1]);
    // expect(results[]).toStrictEqual([1, 2, 2]);
    // expect(results[]).toStrictEqual([1, 2, 3]);
    // expect(results[]).toStrictEqual([1, 3, 0]);
    // expect(results[]).toStrictEqual([1, 3, 1]);
    // expect(results[]).toStrictEqual([1, 3, 2]);
    // expect(results[]).toStrictEqual([1, 3, 3]);

    // expect(results[]).toStrictEqual([2, 0, 0]);
    // expect(results[]).toStrictEqual([2, 0, 1]);
    // expect(results[]).toStrictEqual([2, 0, 2]);
    // expect(results[]).toStrictEqual([2, 0, 3]);
    expect(results[0]).toStrictEqual([2, 1, 0]);
    // expect(results[]).toStrictEqual([2, 1, 1]);
    // expect(results[]).toStrictEqual([2, 1, 2]);
    // expect(results[]).toStrictEqual([2, 1, 3]);
    // expect(results[]).toStrictEqual([2, 2, 0]);
    // expect(results[]).toStrictEqual([2, 2, 1]);
    // expect(results[]).toStrictEqual([2, 2, 2]);
    // expect(results[]).toStrictEqual([2, 2, 3]);
    // expect(results[]).toStrictEqual([2, 3, 0]);
    // expect(results[]).toStrictEqual([2, 3, 1]);
    // expect(results[]).toStrictEqual([2, 3, 2]);
    // expect(results[]).toStrictEqual([2, 3, 3]);

    // expect(results[]).toStrictEqual([3, 0, 0]);
    // expect(results[]).toStrictEqual([3, 0, 1]);
    // expect(results[]).toStrictEqual([3, 0, 2]);
    // expect(results[]).toStrictEqual([3, 0, 3]);
    expect(results[1]).toStrictEqual([3, 1, 0]);
    // expect(results[]).toStrictEqual([3, 1, 1]);
    // expect(results[]).toStrictEqual([3, 1, 2]);
    // expect(results[]).toStrictEqual([3, 1, 3]);
    expect(results[2]).toStrictEqual([3, 2, 0]);
    expect(results[3]).toStrictEqual([3, 2, 1]);
    // expect(results[]).toStrictEqual([3, 2, 2]);
    // expect(results[]).toStrictEqual([3, 2, 3]);
    // expect(results[]).toStrictEqual([3, 3, 0]);
    // expect(results[]).toStrictEqual([3, 3, 1]);
    // expect(results[]).toStrictEqual([3, 3, 2]);
    // expect(results[]).toStrictEqual([3, 3, 3]);
  });

  test("With n = 4", () => {
    const results = generateTuples({ size: 4, validValues: [0, 1], getDuplicates: false, getSameValues: false });

    expect(results).toHaveLength(0);

    // expect(results[]).toStrictEqual([0, 0, 0, 0]);
    // expect(results[]).toStrictEqual([0, 0, 0, 1]);
    // expect(results[]).toStrictEqual([0, 0, 1, 0]);
    // expect(results[]).toStrictEqual([0, 0, 1, 1]);
    // expect(results[]).toStrictEqual([0, 1, 0, 0]);
    // expect(results[]).toStrictEqual([0, 1, 0, 1]);
    // expect(results[]).toStrictEqual([0, 1, 1, 0]);
    // expect(results[]).toStrictEqual([0, 1, 1, 1]);

    // expect(results[]).toStrictEqual([1, 0, 0, 0]);
    // expect(results[]).toStrictEqual([1, 0, 0, 1]);
    // expect(results[]).toStrictEqual([1, 0, 1, 0]);
    // expect(results[]).toStrictEqual([1, 0, 1, 1]);
    // expect(results[]).toStrictEqual([1, 1, 0, 0]);
    // expect(results[]).toStrictEqual([1, 1, 0, 1]);
    // expect(results[]).toStrictEqual([1, 1, 1, 0]);
    // expect(results[]).toStrictEqual([1, 1, 1, 1]);
  });
});
