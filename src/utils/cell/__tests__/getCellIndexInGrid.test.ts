import { getCellIndexInGrid } from "..";

describe("getIndexInGrid", () => {
  test("Indexes for rows", () => {
    // Row 1
    expect(getCellIndexInGrid("row", 0, 0)).toBe(0);
    expect(getCellIndexInGrid("row", 0, 1)).toBe(1);
    expect(getCellIndexInGrid("row", 0, 2)).toBe(2);
    expect(getCellIndexInGrid("row", 0, 3)).toBe(3);
    expect(getCellIndexInGrid("row", 0, 4)).toBe(4);
    expect(getCellIndexInGrid("row", 0, 5)).toBe(5);
    expect(getCellIndexInGrid("row", 0, 6)).toBe(6);
    expect(getCellIndexInGrid("row", 0, 7)).toBe(7);
    expect(getCellIndexInGrid("row", 0, 8)).toBe(8);

    // Row 2
    expect(getCellIndexInGrid("row", 1, 0)).toBe(9);
    expect(getCellIndexInGrid("row", 1, 1)).toBe(10);
    expect(getCellIndexInGrid("row", 1, 2)).toBe(11);
    expect(getCellIndexInGrid("row", 1, 3)).toBe(12);
    expect(getCellIndexInGrid("row", 1, 4)).toBe(13);
    expect(getCellIndexInGrid("row", 1, 5)).toBe(14);
    expect(getCellIndexInGrid("row", 1, 6)).toBe(15);
    expect(getCellIndexInGrid("row", 1, 7)).toBe(16);
    expect(getCellIndexInGrid("row", 1, 8)).toBe(17);

    // Row 3
    expect(getCellIndexInGrid("row", 2, 0)).toBe(18);
    expect(getCellIndexInGrid("row", 2, 1)).toBe(19);
    expect(getCellIndexInGrid("row", 2, 2)).toBe(20);
    expect(getCellIndexInGrid("row", 2, 3)).toBe(21);
    expect(getCellIndexInGrid("row", 2, 4)).toBe(22);
    expect(getCellIndexInGrid("row", 2, 5)).toBe(23);
    expect(getCellIndexInGrid("row", 2, 6)).toBe(24);
    expect(getCellIndexInGrid("row", 2, 7)).toBe(25);
    expect(getCellIndexInGrid("row", 2, 8)).toBe(26);

    // Row 4
    expect(getCellIndexInGrid("row", 3, 0)).toBe(27);
    expect(getCellIndexInGrid("row", 3, 1)).toBe(28);
    expect(getCellIndexInGrid("row", 3, 2)).toBe(29);
    expect(getCellIndexInGrid("row", 3, 3)).toBe(30);
    expect(getCellIndexInGrid("row", 3, 4)).toBe(31);
    expect(getCellIndexInGrid("row", 3, 5)).toBe(32);
    expect(getCellIndexInGrid("row", 3, 6)).toBe(33);
    expect(getCellIndexInGrid("row", 3, 7)).toBe(34);
    expect(getCellIndexInGrid("row", 3, 8)).toBe(35);

    // Row 5
    expect(getCellIndexInGrid("row", 4, 0)).toBe(36);
    expect(getCellIndexInGrid("row", 4, 1)).toBe(37);
    expect(getCellIndexInGrid("row", 4, 2)).toBe(38);
    expect(getCellIndexInGrid("row", 4, 3)).toBe(39);
    expect(getCellIndexInGrid("row", 4, 4)).toBe(40);
    expect(getCellIndexInGrid("row", 4, 5)).toBe(41);
    expect(getCellIndexInGrid("row", 4, 6)).toBe(42);
    expect(getCellIndexInGrid("row", 4, 7)).toBe(43);
    expect(getCellIndexInGrid("row", 4, 8)).toBe(44);

    // Row 6
    expect(getCellIndexInGrid("row", 5, 0)).toBe(45);
    expect(getCellIndexInGrid("row", 5, 1)).toBe(46);
    expect(getCellIndexInGrid("row", 5, 2)).toBe(47);
    expect(getCellIndexInGrid("row", 5, 3)).toBe(48);
    expect(getCellIndexInGrid("row", 5, 4)).toBe(49);
    expect(getCellIndexInGrid("row", 5, 5)).toBe(50);
    expect(getCellIndexInGrid("row", 5, 6)).toBe(51);
    expect(getCellIndexInGrid("row", 5, 7)).toBe(52);
    expect(getCellIndexInGrid("row", 5, 8)).toBe(53);

    // Row 7
    expect(getCellIndexInGrid("row", 6, 0)).toBe(54);
    expect(getCellIndexInGrid("row", 6, 1)).toBe(55);
    expect(getCellIndexInGrid("row", 6, 2)).toBe(56);
    expect(getCellIndexInGrid("row", 6, 3)).toBe(57);
    expect(getCellIndexInGrid("row", 6, 4)).toBe(58);
    expect(getCellIndexInGrid("row", 6, 5)).toBe(59);
    expect(getCellIndexInGrid("row", 6, 6)).toBe(60);
    expect(getCellIndexInGrid("row", 6, 7)).toBe(61);
    expect(getCellIndexInGrid("row", 6, 8)).toBe(62);

    // Row 8
    expect(getCellIndexInGrid("row", 7, 0)).toBe(63);
    expect(getCellIndexInGrid("row", 7, 1)).toBe(64);
    expect(getCellIndexInGrid("row", 7, 2)).toBe(65);
    expect(getCellIndexInGrid("row", 7, 3)).toBe(66);
    expect(getCellIndexInGrid("row", 7, 4)).toBe(67);
    expect(getCellIndexInGrid("row", 7, 5)).toBe(68);
    expect(getCellIndexInGrid("row", 7, 6)).toBe(69);
    expect(getCellIndexInGrid("row", 7, 7)).toBe(70);
    expect(getCellIndexInGrid("row", 7, 8)).toBe(71);

    // Row 9
    expect(getCellIndexInGrid("row", 8, 0)).toBe(72);
    expect(getCellIndexInGrid("row", 8, 1)).toBe(73);
    expect(getCellIndexInGrid("row", 8, 2)).toBe(74);
    expect(getCellIndexInGrid("row", 8, 3)).toBe(75);
    expect(getCellIndexInGrid("row", 8, 4)).toBe(76);
    expect(getCellIndexInGrid("row", 8, 5)).toBe(77);
    expect(getCellIndexInGrid("row", 8, 6)).toBe(78);
    expect(getCellIndexInGrid("row", 8, 7)).toBe(79);
    expect(getCellIndexInGrid("row", 8, 8)).toBe(80);
  });

  test("Indexes for columns", () => {
    // Col 1
    expect(getCellIndexInGrid("col", 0, 0)).toBe(0);
    expect(getCellIndexInGrid("col", 0, 1)).toBe(9);
    expect(getCellIndexInGrid("col", 0, 2)).toBe(18);
    expect(getCellIndexInGrid("col", 0, 3)).toBe(27);
    expect(getCellIndexInGrid("col", 0, 4)).toBe(36);
    expect(getCellIndexInGrid("col", 0, 5)).toBe(45);
    expect(getCellIndexInGrid("col", 0, 6)).toBe(54);
    expect(getCellIndexInGrid("col", 0, 7)).toBe(63);
    expect(getCellIndexInGrid("col", 0, 8)).toBe(72);

    // Col 2
    expect(getCellIndexInGrid("col", 1, 0)).toBe(1);
    expect(getCellIndexInGrid("col", 1, 1)).toBe(10);
    expect(getCellIndexInGrid("col", 1, 2)).toBe(19);
    expect(getCellIndexInGrid("col", 1, 3)).toBe(28);
    expect(getCellIndexInGrid("col", 1, 4)).toBe(37);
    expect(getCellIndexInGrid("col", 1, 5)).toBe(46);
    expect(getCellIndexInGrid("col", 1, 6)).toBe(55);
    expect(getCellIndexInGrid("col", 1, 7)).toBe(64);
    expect(getCellIndexInGrid("col", 1, 8)).toBe(73);

    // Col 3
    expect(getCellIndexInGrid("col", 2, 0)).toBe(2);
    expect(getCellIndexInGrid("col", 2, 1)).toBe(11);
    expect(getCellIndexInGrid("col", 2, 2)).toBe(20);
    expect(getCellIndexInGrid("col", 2, 3)).toBe(29);
    expect(getCellIndexInGrid("col", 2, 4)).toBe(38);
    expect(getCellIndexInGrid("col", 2, 5)).toBe(47);
    expect(getCellIndexInGrid("col", 2, 6)).toBe(56);
    expect(getCellIndexInGrid("col", 2, 7)).toBe(65);
    expect(getCellIndexInGrid("col", 2, 8)).toBe(74);

    // Col 4
    expect(getCellIndexInGrid("col", 3, 0)).toBe(3);
    expect(getCellIndexInGrid("col", 3, 1)).toBe(12);
    expect(getCellIndexInGrid("col", 3, 2)).toBe(21);
    expect(getCellIndexInGrid("col", 3, 3)).toBe(30);
    expect(getCellIndexInGrid("col", 3, 4)).toBe(39);
    expect(getCellIndexInGrid("col", 3, 5)).toBe(48);
    expect(getCellIndexInGrid("col", 3, 6)).toBe(57);
    expect(getCellIndexInGrid("col", 3, 7)).toBe(66);
    expect(getCellIndexInGrid("col", 3, 8)).toBe(75);

    // Col 5
    expect(getCellIndexInGrid("col", 4, 0)).toBe(4);
    expect(getCellIndexInGrid("col", 4, 1)).toBe(13);
    expect(getCellIndexInGrid("col", 4, 2)).toBe(22);
    expect(getCellIndexInGrid("col", 4, 3)).toBe(31);
    expect(getCellIndexInGrid("col", 4, 4)).toBe(40);
    expect(getCellIndexInGrid("col", 4, 5)).toBe(49);
    expect(getCellIndexInGrid("col", 4, 6)).toBe(58);
    expect(getCellIndexInGrid("col", 4, 7)).toBe(67);
    expect(getCellIndexInGrid("col", 4, 8)).toBe(76);

    // Col 6
    expect(getCellIndexInGrid("col", 5, 0)).toBe(5);
    expect(getCellIndexInGrid("col", 5, 1)).toBe(14);
    expect(getCellIndexInGrid("col", 5, 2)).toBe(23);
    expect(getCellIndexInGrid("col", 5, 3)).toBe(32);
    expect(getCellIndexInGrid("col", 5, 4)).toBe(41);
    expect(getCellIndexInGrid("col", 5, 5)).toBe(50);
    expect(getCellIndexInGrid("col", 5, 6)).toBe(59);
    expect(getCellIndexInGrid("col", 5, 7)).toBe(68);
    expect(getCellIndexInGrid("col", 5, 8)).toBe(77);

    // Col 7
    expect(getCellIndexInGrid("col", 6, 0)).toBe(6);
    expect(getCellIndexInGrid("col", 6, 1)).toBe(15);
    expect(getCellIndexInGrid("col", 6, 2)).toBe(24);
    expect(getCellIndexInGrid("col", 6, 3)).toBe(33);
    expect(getCellIndexInGrid("col", 6, 4)).toBe(42);
    expect(getCellIndexInGrid("col", 6, 5)).toBe(51);
    expect(getCellIndexInGrid("col", 6, 6)).toBe(60);
    expect(getCellIndexInGrid("col", 6, 7)).toBe(69);
    expect(getCellIndexInGrid("col", 6, 8)).toBe(78);

    // Col 8
    expect(getCellIndexInGrid("col", 7, 0)).toBe(7);
    expect(getCellIndexInGrid("col", 7, 1)).toBe(16);
    expect(getCellIndexInGrid("col", 7, 2)).toBe(25);
    expect(getCellIndexInGrid("col", 7, 3)).toBe(34);
    expect(getCellIndexInGrid("col", 7, 4)).toBe(43);
    expect(getCellIndexInGrid("col", 7, 5)).toBe(52);
    expect(getCellIndexInGrid("col", 7, 6)).toBe(61);
    expect(getCellIndexInGrid("col", 7, 7)).toBe(70);
    expect(getCellIndexInGrid("col", 7, 8)).toBe(79);

    // Col 9
    expect(getCellIndexInGrid("col", 8, 0)).toBe(8);
    expect(getCellIndexInGrid("col", 8, 1)).toBe(17);
    expect(getCellIndexInGrid("col", 8, 2)).toBe(26);
    expect(getCellIndexInGrid("col", 8, 3)).toBe(35);
    expect(getCellIndexInGrid("col", 8, 4)).toBe(44);
    expect(getCellIndexInGrid("col", 8, 5)).toBe(53);
    expect(getCellIndexInGrid("col", 8, 6)).toBe(62);
    expect(getCellIndexInGrid("col", 8, 7)).toBe(71);
    expect(getCellIndexInGrid("col", 8, 8)).toBe(80);
  });

  test("Indexes for boxes", () => {
    // Box 1
    expect(getCellIndexInGrid("box", 0, 0)).toBe(0);
    expect(getCellIndexInGrid("box", 0, 1)).toBe(1);
    expect(getCellIndexInGrid("box", 0, 2)).toBe(2);
    expect(getCellIndexInGrid("box", 0, 3)).toBe(9);
    expect(getCellIndexInGrid("box", 0, 4)).toBe(10);
    expect(getCellIndexInGrid("box", 0, 5)).toBe(11);
    expect(getCellIndexInGrid("box", 0, 6)).toBe(18);
    expect(getCellIndexInGrid("box", 0, 7)).toBe(19);
    expect(getCellIndexInGrid("box", 0, 8)).toBe(20);

    // Box 2
    expect(getCellIndexInGrid("box", 1, 0)).toBe(3);
    expect(getCellIndexInGrid("box", 1, 1)).toBe(4);
    expect(getCellIndexInGrid("box", 1, 2)).toBe(5);
    expect(getCellIndexInGrid("box", 1, 3)).toBe(12);
    expect(getCellIndexInGrid("box", 1, 4)).toBe(13);
    expect(getCellIndexInGrid("box", 1, 5)).toBe(14);
    expect(getCellIndexInGrid("box", 1, 6)).toBe(21);
    expect(getCellIndexInGrid("box", 1, 7)).toBe(22);
    expect(getCellIndexInGrid("box", 1, 8)).toBe(23);

    // Box 3
    expect(getCellIndexInGrid("box", 2, 0)).toBe(6);
    expect(getCellIndexInGrid("box", 2, 1)).toBe(7);
    expect(getCellIndexInGrid("box", 2, 2)).toBe(8);
    expect(getCellIndexInGrid("box", 2, 3)).toBe(15);
    expect(getCellIndexInGrid("box", 2, 4)).toBe(16);
    expect(getCellIndexInGrid("box", 2, 5)).toBe(17);
    expect(getCellIndexInGrid("box", 2, 6)).toBe(24);
    expect(getCellIndexInGrid("box", 2, 7)).toBe(25);
    expect(getCellIndexInGrid("box", 2, 8)).toBe(26);

    // Box 4
    expect(getCellIndexInGrid("box", 3, 0)).toBe(27);
    expect(getCellIndexInGrid("box", 3, 1)).toBe(28);
    expect(getCellIndexInGrid("box", 3, 2)).toBe(29);
    expect(getCellIndexInGrid("box", 3, 3)).toBe(36);
    expect(getCellIndexInGrid("box", 3, 4)).toBe(37);
    expect(getCellIndexInGrid("box", 3, 5)).toBe(38);
    expect(getCellIndexInGrid("box", 3, 6)).toBe(45);
    expect(getCellIndexInGrid("box", 3, 7)).toBe(46);
    expect(getCellIndexInGrid("box", 3, 8)).toBe(47);

    // Box 5
    expect(getCellIndexInGrid("box", 4, 0)).toBe(30);
    expect(getCellIndexInGrid("box", 4, 1)).toBe(31);
    expect(getCellIndexInGrid("box", 4, 2)).toBe(32);
    expect(getCellIndexInGrid("box", 4, 3)).toBe(39);
    expect(getCellIndexInGrid("box", 4, 4)).toBe(40);
    expect(getCellIndexInGrid("box", 4, 5)).toBe(41);
    expect(getCellIndexInGrid("box", 4, 6)).toBe(48);
    expect(getCellIndexInGrid("box", 4, 7)).toBe(49);
    expect(getCellIndexInGrid("box", 4, 8)).toBe(50);

    // Box 6
    expect(getCellIndexInGrid("box", 5, 0)).toBe(33);
    expect(getCellIndexInGrid("box", 5, 1)).toBe(34);
    expect(getCellIndexInGrid("box", 5, 2)).toBe(35);
    expect(getCellIndexInGrid("box", 5, 3)).toBe(42);
    expect(getCellIndexInGrid("box", 5, 4)).toBe(43);
    expect(getCellIndexInGrid("box", 5, 5)).toBe(44);
    expect(getCellIndexInGrid("box", 5, 6)).toBe(51);
    expect(getCellIndexInGrid("box", 5, 7)).toBe(52);
    expect(getCellIndexInGrid("box", 5, 8)).toBe(53);

    // Box 7
    expect(getCellIndexInGrid("box", 6, 0)).toBe(54);
    expect(getCellIndexInGrid("box", 6, 1)).toBe(55);
    expect(getCellIndexInGrid("box", 6, 2)).toBe(56);
    expect(getCellIndexInGrid("box", 6, 3)).toBe(63);
    expect(getCellIndexInGrid("box", 6, 4)).toBe(64);
    expect(getCellIndexInGrid("box", 6, 5)).toBe(65);
    expect(getCellIndexInGrid("box", 6, 6)).toBe(72);
    expect(getCellIndexInGrid("box", 6, 7)).toBe(73);
    expect(getCellIndexInGrid("box", 6, 8)).toBe(74);

    // Box 8
    expect(getCellIndexInGrid("box", 7, 0)).toBe(57);
    expect(getCellIndexInGrid("box", 7, 1)).toBe(58);
    expect(getCellIndexInGrid("box", 7, 2)).toBe(59);
    expect(getCellIndexInGrid("box", 7, 3)).toBe(66);
    expect(getCellIndexInGrid("box", 7, 4)).toBe(67);
    expect(getCellIndexInGrid("box", 7, 5)).toBe(68);
    expect(getCellIndexInGrid("box", 7, 6)).toBe(75);
    expect(getCellIndexInGrid("box", 7, 7)).toBe(76);
    expect(getCellIndexInGrid("box", 7, 8)).toBe(77);

    // Box 9
    expect(getCellIndexInGrid("box", 8, 0)).toBe(60);
    expect(getCellIndexInGrid("box", 8, 1)).toBe(61);
    expect(getCellIndexInGrid("box", 8, 2)).toBe(62);
    expect(getCellIndexInGrid("box", 8, 3)).toBe(69);
    expect(getCellIndexInGrid("box", 8, 4)).toBe(70);
    expect(getCellIndexInGrid("box", 8, 5)).toBe(71);
    expect(getCellIndexInGrid("box", 8, 6)).toBe(78);
    expect(getCellIndexInGrid("box", 8, 7)).toBe(79);
    expect(getCellIndexInGrid("box", 8, 8)).toBe(80);
  });
});
