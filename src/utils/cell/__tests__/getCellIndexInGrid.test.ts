import { getCellIndexInGrid } from "..";

describe("getIndexInGrid", () => {
  test("Indexes for rows", () => {
    // Row 1
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 0, cellIndex: 0 })).toBe(0);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 0, cellIndex: 1 })).toBe(1);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 0, cellIndex: 2 })).toBe(2);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 0, cellIndex: 3 })).toBe(3);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 0, cellIndex: 4 })).toBe(4);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 0, cellIndex: 5 })).toBe(5);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 0, cellIndex: 6 })).toBe(6);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 0, cellIndex: 7 })).toBe(7);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 0, cellIndex: 8 })).toBe(8);

    // Row 2
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 1, cellIndex: 0 })).toBe(9);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 1, cellIndex: 1 })).toBe(10);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 1, cellIndex: 2 })).toBe(11);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 1, cellIndex: 3 })).toBe(12);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 1, cellIndex: 4 })).toBe(13);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 1, cellIndex: 5 })).toBe(14);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 1, cellIndex: 6 })).toBe(15);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 1, cellIndex: 7 })).toBe(16);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 1, cellIndex: 8 })).toBe(17);

    // Row 3
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 2, cellIndex: 0 })).toBe(18);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 2, cellIndex: 1 })).toBe(19);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 2, cellIndex: 2 })).toBe(20);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 2, cellIndex: 3 })).toBe(21);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 2, cellIndex: 4 })).toBe(22);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 2, cellIndex: 5 })).toBe(23);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 2, cellIndex: 6 })).toBe(24);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 2, cellIndex: 7 })).toBe(25);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 2, cellIndex: 8 })).toBe(26);

    // Row 4
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 3, cellIndex: 0 })).toBe(27);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 3, cellIndex: 1 })).toBe(28);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 3, cellIndex: 2 })).toBe(29);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 3, cellIndex: 3 })).toBe(30);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 3, cellIndex: 4 })).toBe(31);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 3, cellIndex: 5 })).toBe(32);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 3, cellIndex: 6 })).toBe(33);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 3, cellIndex: 7 })).toBe(34);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 3, cellIndex: 8 })).toBe(35);

    // Row 5
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 4, cellIndex: 0 })).toBe(36);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 4, cellIndex: 1 })).toBe(37);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 4, cellIndex: 2 })).toBe(38);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 4, cellIndex: 3 })).toBe(39);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 4, cellIndex: 4 })).toBe(40);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 4, cellIndex: 5 })).toBe(41);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 4, cellIndex: 6 })).toBe(42);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 4, cellIndex: 7 })).toBe(43);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 4, cellIndex: 8 })).toBe(44);

    // Row 6
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 5, cellIndex: 0 })).toBe(45);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 5, cellIndex: 1 })).toBe(46);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 5, cellIndex: 2 })).toBe(47);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 5, cellIndex: 3 })).toBe(48);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 5, cellIndex: 4 })).toBe(49);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 5, cellIndex: 5 })).toBe(50);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 5, cellIndex: 6 })).toBe(51);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 5, cellIndex: 7 })).toBe(52);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 5, cellIndex: 8 })).toBe(53);

    // Row 7
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 6, cellIndex: 0 })).toBe(54);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 6, cellIndex: 1 })).toBe(55);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 6, cellIndex: 2 })).toBe(56);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 6, cellIndex: 3 })).toBe(57);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 6, cellIndex: 4 })).toBe(58);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 6, cellIndex: 5 })).toBe(59);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 6, cellIndex: 6 })).toBe(60);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 6, cellIndex: 7 })).toBe(61);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 6, cellIndex: 8 })).toBe(62);

    // Row 8
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 7, cellIndex: 0 })).toBe(63);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 7, cellIndex: 1 })).toBe(64);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 7, cellIndex: 2 })).toBe(65);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 7, cellIndex: 3 })).toBe(66);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 7, cellIndex: 4 })).toBe(67);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 7, cellIndex: 5 })).toBe(68);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 7, cellIndex: 6 })).toBe(69);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 7, cellIndex: 7 })).toBe(70);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 7, cellIndex: 8 })).toBe(71);

    // Row 9
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 8, cellIndex: 0 })).toBe(72);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 8, cellIndex: 1 })).toBe(73);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 8, cellIndex: 2 })).toBe(74);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 8, cellIndex: 3 })).toBe(75);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 8, cellIndex: 4 })).toBe(76);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 8, cellIndex: 5 })).toBe(77);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 8, cellIndex: 6 })).toBe(78);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 8, cellIndex: 7 })).toBe(79);
    expect(getCellIndexInGrid({ houseType: "row", houseIndex: 8, cellIndex: 8 })).toBe(80);
  });

  test("Indexes for columns", () => {
    // Col 1
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 0, cellIndex: 0 })).toBe(0);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 0, cellIndex: 1 })).toBe(9);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 0, cellIndex: 2 })).toBe(18);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 0, cellIndex: 3 })).toBe(27);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 0, cellIndex: 4 })).toBe(36);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 0, cellIndex: 5 })).toBe(45);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 0, cellIndex: 6 })).toBe(54);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 0, cellIndex: 7 })).toBe(63);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 0, cellIndex: 8 })).toBe(72);

    // Col 2
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 1, cellIndex: 0 })).toBe(1);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 1, cellIndex: 1 })).toBe(10);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 1, cellIndex: 2 })).toBe(19);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 1, cellIndex: 3 })).toBe(28);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 1, cellIndex: 4 })).toBe(37);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 1, cellIndex: 5 })).toBe(46);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 1, cellIndex: 6 })).toBe(55);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 1, cellIndex: 7 })).toBe(64);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 1, cellIndex: 8 })).toBe(73);

    // Col 3
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 2, cellIndex: 0 })).toBe(2);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 2, cellIndex: 1 })).toBe(11);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 2, cellIndex: 2 })).toBe(20);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 2, cellIndex: 3 })).toBe(29);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 2, cellIndex: 4 })).toBe(38);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 2, cellIndex: 5 })).toBe(47);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 2, cellIndex: 6 })).toBe(56);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 2, cellIndex: 7 })).toBe(65);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 2, cellIndex: 8 })).toBe(74);

    // Col 4
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 3, cellIndex: 0 })).toBe(3);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 3, cellIndex: 1 })).toBe(12);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 3, cellIndex: 2 })).toBe(21);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 3, cellIndex: 3 })).toBe(30);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 3, cellIndex: 4 })).toBe(39);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 3, cellIndex: 5 })).toBe(48);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 3, cellIndex: 6 })).toBe(57);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 3, cellIndex: 7 })).toBe(66);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 3, cellIndex: 8 })).toBe(75);

    // Col 5
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 4, cellIndex: 0 })).toBe(4);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 4, cellIndex: 1 })).toBe(13);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 4, cellIndex: 2 })).toBe(22);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 4, cellIndex: 3 })).toBe(31);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 4, cellIndex: 4 })).toBe(40);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 4, cellIndex: 5 })).toBe(49);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 4, cellIndex: 6 })).toBe(58);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 4, cellIndex: 7 })).toBe(67);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 4, cellIndex: 8 })).toBe(76);

    // Col 6
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 5, cellIndex: 0 })).toBe(5);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 5, cellIndex: 1 })).toBe(14);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 5, cellIndex: 2 })).toBe(23);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 5, cellIndex: 3 })).toBe(32);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 5, cellIndex: 4 })).toBe(41);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 5, cellIndex: 5 })).toBe(50);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 5, cellIndex: 6 })).toBe(59);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 5, cellIndex: 7 })).toBe(68);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 5, cellIndex: 8 })).toBe(77);

    // Col 7
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 6, cellIndex: 0 })).toBe(6);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 6, cellIndex: 1 })).toBe(15);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 6, cellIndex: 2 })).toBe(24);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 6, cellIndex: 3 })).toBe(33);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 6, cellIndex: 4 })).toBe(42);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 6, cellIndex: 5 })).toBe(51);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 6, cellIndex: 6 })).toBe(60);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 6, cellIndex: 7 })).toBe(69);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 6, cellIndex: 8 })).toBe(78);

    // Col 8
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 7, cellIndex: 0 })).toBe(7);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 7, cellIndex: 1 })).toBe(16);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 7, cellIndex: 2 })).toBe(25);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 7, cellIndex: 3 })).toBe(34);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 7, cellIndex: 4 })).toBe(43);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 7, cellIndex: 5 })).toBe(52);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 7, cellIndex: 6 })).toBe(61);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 7, cellIndex: 7 })).toBe(70);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 7, cellIndex: 8 })).toBe(79);

    // Col 9
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 8, cellIndex: 0 })).toBe(8);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 8, cellIndex: 1 })).toBe(17);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 8, cellIndex: 2 })).toBe(26);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 8, cellIndex: 3 })).toBe(35);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 8, cellIndex: 4 })).toBe(44);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 8, cellIndex: 5 })).toBe(53);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 8, cellIndex: 6 })).toBe(62);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 8, cellIndex: 7 })).toBe(71);
    expect(getCellIndexInGrid({ houseType: "col", houseIndex: 8, cellIndex: 8 })).toBe(80);
  });

  test("Indexes for boxes", () => {
    // Box 1
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 0, cellIndex: 0 })).toBe(0);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 0, cellIndex: 1 })).toBe(1);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 0, cellIndex: 2 })).toBe(2);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 0, cellIndex: 3 })).toBe(9);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 0, cellIndex: 4 })).toBe(10);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 0, cellIndex: 5 })).toBe(11);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 0, cellIndex: 6 })).toBe(18);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 0, cellIndex: 7 })).toBe(19);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 0, cellIndex: 8 })).toBe(20);

    // Box 2
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 1, cellIndex: 0 })).toBe(3);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 1, cellIndex: 1 })).toBe(4);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 1, cellIndex: 2 })).toBe(5);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 1, cellIndex: 3 })).toBe(12);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 1, cellIndex: 4 })).toBe(13);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 1, cellIndex: 5 })).toBe(14);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 1, cellIndex: 6 })).toBe(21);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 1, cellIndex: 7 })).toBe(22);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 1, cellIndex: 8 })).toBe(23);

    // Box 3
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 2, cellIndex: 0 })).toBe(6);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 2, cellIndex: 1 })).toBe(7);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 2, cellIndex: 2 })).toBe(8);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 2, cellIndex: 3 })).toBe(15);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 2, cellIndex: 4 })).toBe(16);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 2, cellIndex: 5 })).toBe(17);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 2, cellIndex: 6 })).toBe(24);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 2, cellIndex: 7 })).toBe(25);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 2, cellIndex: 8 })).toBe(26);

    // Box 4
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 3, cellIndex: 0 })).toBe(27);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 3, cellIndex: 1 })).toBe(28);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 3, cellIndex: 2 })).toBe(29);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 3, cellIndex: 3 })).toBe(36);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 3, cellIndex: 4 })).toBe(37);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 3, cellIndex: 5 })).toBe(38);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 3, cellIndex: 6 })).toBe(45);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 3, cellIndex: 7 })).toBe(46);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 3, cellIndex: 8 })).toBe(47);

    // Box 5
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 4, cellIndex: 0 })).toBe(30);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 4, cellIndex: 1 })).toBe(31);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 4, cellIndex: 2 })).toBe(32);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 4, cellIndex: 3 })).toBe(39);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 4, cellIndex: 4 })).toBe(40);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 4, cellIndex: 5 })).toBe(41);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 4, cellIndex: 6 })).toBe(48);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 4, cellIndex: 7 })).toBe(49);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 4, cellIndex: 8 })).toBe(50);

    // Box 6
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 5, cellIndex: 0 })).toBe(33);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 5, cellIndex: 1 })).toBe(34);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 5, cellIndex: 2 })).toBe(35);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 5, cellIndex: 3 })).toBe(42);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 5, cellIndex: 4 })).toBe(43);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 5, cellIndex: 5 })).toBe(44);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 5, cellIndex: 6 })).toBe(51);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 5, cellIndex: 7 })).toBe(52);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 5, cellIndex: 8 })).toBe(53);

    // Box 7
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 6, cellIndex: 0 })).toBe(54);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 6, cellIndex: 1 })).toBe(55);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 6, cellIndex: 2 })).toBe(56);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 6, cellIndex: 3 })).toBe(63);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 6, cellIndex: 4 })).toBe(64);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 6, cellIndex: 5 })).toBe(65);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 6, cellIndex: 6 })).toBe(72);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 6, cellIndex: 7 })).toBe(73);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 6, cellIndex: 8 })).toBe(74);

    // Box 8
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 7, cellIndex: 0 })).toBe(57);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 7, cellIndex: 1 })).toBe(58);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 7, cellIndex: 2 })).toBe(59);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 7, cellIndex: 3 })).toBe(66);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 7, cellIndex: 4 })).toBe(67);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 7, cellIndex: 5 })).toBe(68);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 7, cellIndex: 6 })).toBe(75);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 7, cellIndex: 7 })).toBe(76);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 7, cellIndex: 8 })).toBe(77);

    // Box 9
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 8, cellIndex: 0 })).toBe(60);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 8, cellIndex: 1 })).toBe(61);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 8, cellIndex: 2 })).toBe(62);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 8, cellIndex: 3 })).toBe(69);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 8, cellIndex: 4 })).toBe(70);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 8, cellIndex: 5 })).toBe(71);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 8, cellIndex: 6 })).toBe(78);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 8, cellIndex: 7 })).toBe(79);
    expect(getCellIndexInGrid({ houseType: "box", houseIndex: 8, cellIndex: 8 })).toBe(80);
  });
});
