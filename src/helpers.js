// Returns an array of objects
// Each object represents a cell that is 'alive'
// and holds it's x, y grid index
export const getLiveCells = (rows, cols, grid) => {
  let cells = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x]) {
        cells.push({ x, y });
      }
    }
  }
  return cells;
};

export const getGridOffset = (gridRef) => {
  // gridRef.current is a reference to our Grid on the DOM
  // .getBoundingClientRect() returns an object with the following properties:
  // top: distance from the top of the viewport
  // right: "" right of the viewport
  // bottom: "" bottom of the viewport
  // left: "" left of the viewport
  // width: width of the grid
  // height: height of the grid
  // x: == to this.left
  // y: == to this.top
  const rect = gridRef.current.getBoundingClientRect();

  return {
    // Grid's distance from the left of the viewport
    x: rect.left,
    // Grid's distance from the top of the viewport
    y: rect.top,
  };
};

export const getNeighborCount = (grid, x, y, cols, rows) => {
  let count = 0;
  // directions for neighbor cells relative to the current cell
  // eg.  [-1, -1] is the top left neighbor
  //      [ 1,  1] is the bottom right neighbor, etc.
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ];

  for (let i = 0; i < directions.length; i++) {
    // x and y coordinates relative to the current cell
    const direction = directions[i];

    // Neighbor's x and y coordinates on the Grid
    const y1 = y + direction[0];
    const x1 = x + direction[1];

    if (x1 >= 0 && x1 < cols && y1 >= 0 && y1 < rows && grid[y1][x1]) {
      count++;
    }
  }

  return count;
};

// Returns an array filled with (rows-1) nested arrays
// Each nested array will have (cols-1) falses
export const makeEmptyGrid = (rows, cols) => {
  let grid = [];
  for (let y = 0; y < rows; y++) {
    grid[y] = [];
    for (let x = 0; x < cols; x++) {
      grid[y][x] = false;
    }
  }

  return grid;
};

export const makeRandomGrid = (rows, cols) => {
  let grid = [];
  for (let y = 0; y < rows; y++) {
    grid[y] = [];
    for (let x = 0; x < cols; x++) {
      const random = Math.random();
      if (random < 0.5) {
        grid[y][x] = false;
      } else {
        grid[y][x] = true;
      }
    }
  }

  return grid;
};

const presetOffsets = {
  glider: [
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 0, y: 1 },
    { x: -1, y: 1 },
  ],
  exploder: [
    { x: -2, y: -2 },
    { x: -2, y: -1 },
    { x: -2, y: 0 },
    { x: -2, y: 1 },
    { x: -2, y: 2 },
    { x: 0, y: -2 },
    { x: 0, y: 2 },
    { x: 2, y: -2 },
    { x: 2, y: -1 },
    { x: 2, y: 0 },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
  ],
  tumbler: [
    { x: -3, y: 1 },
    { x: -3, y: 2 },
    { x: -3, y: 3 },
    { x: -2, y: 3 },
    { x: -2, y: -2 },
    { x: -1, y: -2 },
    { x: -2, y: -1 },
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: -1, y: 1 },
    { x: -1, y: 2 },
    { x: 1, y: -2 },
    { x: 2, y: -2 },
    { x: 2, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 2 },
    { x: 3, y: 1 },
  ],
};

export const makePresetGrid = (rows, cols, midPoint, preset) => {
  const grid = makeEmptyGrid(rows, cols);

  presetOffsets[preset].forEach((offset) => {
    // y comes first because it represents the row
    // x represents the column
    // The empty grid is initialized in the same manner
    grid[midPoint.y + offset.y][midPoint.x + offset.x] = true;
  });

  return grid;
};