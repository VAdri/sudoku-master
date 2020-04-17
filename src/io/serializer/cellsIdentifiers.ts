import { CellCoord, CellHouse, GridIndex, HouseIndex } from "../../types";
import { map, pipe, sort } from "remeda";
import { getCellCoord } from "../../utils/cell";
import { join } from "ramda";
import { groupByAsArray } from "../../utils/fp/groupByAsArray";

type CellNotationMode = "rncn" | "k9";

/**
 * Identify the given cell or group of cells using the {@link http://sudopedia.enjoysudoku.com/Rncn.html rncn} or
 * {@link http://sudopedia.enjoysudoku.com/K9.html k9} notation.
 *
 * **Note:** The "rncn" mode (by default) can group multiple cells in a single one if they share the same rows and
 * columns.
 *
 * @since 0.0.2
 *
 * @param {ReadonlyArray<(CellCoord | GridIndex | CellHouse)>} cells The cells to identify.
 * @param {CellNotationMode} [mode="rncn"] The type of notation.
 * @returns {readonly string[]} An array containing identifiers for the given cells.
 *
 * @see http://sudopedia.enjoysudoku.com/Diagrams_and_Notations.html#Cell_Reference
 * @see http://sudopedia.enjoysudoku.com/Rncn.html
 * @see http://sudopedia.enjoysudoku.com/K9.html
 *
 * @example
 * cellsIdentifiers([[4, 1]]);
 * // => ["r5c2"]
 * cellsIdentifiers([[4, 1]], "k9");
 * // => ["e2"]
 * cellsIdentifiers([[0, 5], [0, 7]], "rncn");
 * // => ["r1c68"]
 * cellsIdentifiers([
 *   { houseType: "box", houseIndex: 0, cellIndex: 0 },
 *   { houseType: "row", houseIndex: 0, cellIndex: 5 },
 *   { houseType: "col", houseIndex: 7, cellIndex: 0 },
 *   { houseType: "box", houseIndex: 3, cellIndex: 0 },
 *   { houseType: "row", houseIndex: 3, cellIndex: 5 },
 *   { houseType: "col", houseIndex: 7, cellIndex: 3 },
 * ]);
 * // => ["r14c168"]
 * cellsIdentifiers([0, 5, 7, 27, 32, 34, 37, 38, 46, 47, 63]);
 * // => ["r14c168", "r56c23", "r8c1"]
 */
export function cellsIdentifiers(
  cells: readonly (CellCoord | GridIndex | CellHouse)[],
  mode: CellNotationMode = "rncn",
): readonly string[] {
  if (mode === "rncn") {
    return pipe(
      cells,
      map(getCellCoord),
      groupByAsArray((cellCoord) => cellCoord[0]),
      map(
        (entry) =>
          [parseInt(entry[0]) + 1, map(entry[1], (cellCoord) => cellCoord[1] + 1)] as readonly [
            HouseIndex,
            readonly HouseIndex[],
          ],
      ),
      groupByAsArray((entry) => join("", entry[1])),
      map((entry) => {
        return {
          rows: join(
            "",
            map(entry[1], (row) => row[0]),
          ),
          cols: entry[0],
        };
      }),
      map((entry) => `r${entry.rows}c${entry.cols}`),
      sort((string1, string2) => string1.localeCompare(string2)),
    );
  } else {
    return pipe(
      cells,
      map(getCellCoord),
      map((cellCoord) => `${String.fromCharCode(97 + cellCoord[0])}${cellCoord[1] + 1}`),
      sort((string1, string2) => string1.localeCompare(string2)),
    );
  }
}

/**
 * Identify the given cell using the {@link http://sudopedia.enjoysudoku.com/Rncn.html rncn} or
 * {@link http://sudopedia.enjoysudoku.com/K9.html k9} notation.
 *
 * @since 0.0.2
 *
 * @param {CellCoord | GridIndex | CellHouse} cell The cell to identify.
 * @param {CellNotationMode} [mode="rncn"] The type of notation.
 * @returns {string} The identifier for the given cells.
 *
 * @see http://sudopedia.enjoysudoku.com/Diagrams_and_Notations.html#Cell_Reference
 * @see http://sudopedia.enjoysudoku.com/Rncn.html
 * @see http://sudopedia.enjoysudoku.com/K9.html
 *
 * @example
 * cellIdentifier([4, 1]);
 * // => "r5c2"
 * cellIdentifier([4, 1], "k9");
 * // => "e2"
 */
export function cellIdentifier(cell: CellCoord | GridIndex | CellHouse, mode: CellNotationMode = "rncn"): string {
  return cellsIdentifiers([cell], mode)[0];
}
