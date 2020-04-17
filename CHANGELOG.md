# Changelog

## <sub>v0.0.2</sub>

#### _Apr. 17, 2020_ — [Diff](https://github.com/VAdri/sudoku-master/compare/0.0.1-master...0.0.1-master) — [Docs](https://github.com/VAdri/sudoku-master/blob/0.0.2/doc/API.md)

##### Solver

- Added [`solveFullHouse`](https://github.com/VAdri/sudoku-master/blob/0.0.2/doc/README.md#solveFullHouse).
- Added [`solveLastDigit`](https://github.com/VAdri/sudoku-master/blob/0.0.2/doc/README.md#solveLastDigit).
- Added [`solveNakedSingle`](https://github.com/VAdri/sudoku-master/blob/0.0.2/doc/README.md#solveNakedSingle).
- Added [`solveHiddenSingle`](https://github.com/VAdri/sudoku-master/blob/0.0.2/doc/README.md#solveHiddenSingle).

##### IO
- Added [`cellIdentifier`](https://github.com/VAdri/sudoku-master/blob/0.0.2/doc/API.md#cellIdentifier)
  and [`cellsIdentifiers`](https://github.com/VAdri/sudoku-master/blob/0.0.2/doc/API.md#cellsIdentifiers).
- Added [`solvingDescription`](https://github.com/VAdri/sudoku-master/blob/0.0.2/doc/API.md#solvingDescription).

## <sub>v0.0.1</sub>

#### _Apr. 14, 2020_ — [Docs](https://github.com/VAdri/sudoku-master/blob/0.0.1/doc/API.md)

##### General

- Initial release.

##### IO

- Added [`parseGrid`](https://github.com/VAdri/sudoku-master/blob/0.0.1/doc/API.md#parsegrid).
- Added [`serializeGrid`](https://github.com/VAdri/sudoku-master/blob/0.0.1/doc/API.md#serializeGrid).

##### Solver

- Added the brute-force solver [`solveWithBacktracking`](https://github.com/VAdri/sudoku-master/blob/0.0.1/doc/API.md#serializeGrid) using the DFS algorithm.
