import { Digit, GridIndex, House, Pencilmarks, VALID_DIGITS, VALID_GRID_INDEXES } from "../types";
import { getCellHouses } from "./house";
import { difference, filter, flatMap, map, pipe } from "remeda";
import { values } from "ramda";

/**
 * Resolve the list of candidates that can be placed in a cell according to the digits that have been placed in the same
 * houses.
 *
 * @since 0.0.1
 *
 * @param {ReadonlyMap<GridIndex, Digit>} digits The list of all the digits placed in the grid.
 * @param {GridIndex} index The index of the cell in the grid.
 * @returns {Pencilmarks | undefined} The list of candidates that can be placed in the cell; otherwise, if the cell
 * already has a digit placed, `undefined`.
 *
 * @example
 * const grid = parseGrid(`
 *   .23......
 *   456......
 *   789......
 *   .........
 *   .........
 *   .........
 *   .........
 *   .........
 *   .........
 * `);
 *
 * getCandidatesForCell(grid.digits, 0);
 * // => [1]
 * getCandidatesForCell(grid.digits, 1);
 * // => undefined
 * getCandidatesForCell(grid.digits, 3);
 * // => [1, 4, 5, 6, 7, 8, 9]
 * getCandidatesForCell(grid.digits, 80);
 * // => [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
export function getCandidatesForCell(digits: ReadonlyMap<GridIndex, Digit>, index: GridIndex): Pencilmarks | undefined {
  if (digits.has(index)) {
    return;
  } else {
    const candidates = pipe(
      getCellHouses(index),
      flatMap((house: House) => map(values(house.cells), (cell: GridIndex) => digits.get(cell))),
      filter((digit: Digit | undefined) => digit !== undefined),
    ) as Pencilmarks;

    return difference(VALID_DIGITS, candidates);
  }
}

/**
 * Determine all the candidates that can be placed in the empty cells of a grid.
 *
 * @since 0.0.1
 *
 * @param {ReadonlyMap<GridIndex, Digit>} digits The list of all the digits placed in the grid.
 * @returns {Pencilmarks | undefined} A list containing all the candidates that can be placed in the empty cells of the
 * grid.
 *
 * @example
 * const grid = parseGrid(`
 *   +---+---+---+
 *   |.71|263|584|
 *   |345|798|126|
 *   |268|.45|937|
 *   +---+---+---+
 *   |437|519|862|
 *   |156|824|793|
 *   |892|376|451|
 *   +---+---+---+
 *   |713|952|648|
 *   |584|631|279|
 *   |629|487|315|
 *   +---+---+---+`);
 *
 * getCandidates(grid.digits);
 * // => [[0, 9], [21, 1]]
 */
export function getCandidates(digits: ReadonlyMap<GridIndex, Digit>): ReadonlyMap<GridIndex, Pencilmarks> {
  return new Map<GridIndex, Pencilmarks>(
    pipe(
      VALID_GRID_INDEXES,
      filter((index: GridIndex) => !digits.has(index)),
      map((index: GridIndex) => [index, getCandidatesForCell(digits, index)] as readonly [GridIndex, Pencilmarks]),
    ),
  );
}
