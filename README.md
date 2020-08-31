# Conway's Game of Life

A very famous cellular automaton is the **Game of Life** - devised by the British mathematician John Horton Conway in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die, or multiply during each generation (round).

# Rules

1. Each cell can be 'live' or 'dead'.
2. Each cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, and diagonally touching.
3. Any live cell with two or three live neighbors survives.
4. Any dead cell with three live neighbors becomes a live cell.
5. All other live cells die in the next generation. Similarly, all other dead cells stay dead.
6. Cells that are off the edge of the grid are assumed to be dead.

## Install

Once you have cloned the repo to your local machine, in the project directory, you can run:

### `yarn install`

Installs all the dependencies for the app to run locally.

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
