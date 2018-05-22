
const grid = [
    [0, 1, 'B', 2, 'B'],
    [0, 1, 1, 2, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 'B', 1, 0, 0]
];

const covers = [
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true]
];

function click(grid, covers, x, y) {
    const areValidCoordinates = x >= 0 && x <= 4 && y >= 0 && y <= 4;
    if (!areValidCoordinates) { return; }

    // Check for the flag.
    // Check for the bomb.

    // Only if the cell is covered.
    if (covers[x][y]) {
        covers[x][y] = false;

        // If the cell has no bomb in its vincinity
        if (grid[x][y] === 0) {
            click(grid, covers, x - 1, y - 1);
            click(grid, covers, x - 1, y);
            click(grid, covers, x - 1, y + 1);

            click(grid, covers, x, y - 1);
            // click(grid, covers, x, y);
            click(grid, covers, x, y + 1);

            click(grid, covers, x + 1, y - 1);
            click(grid, covers, x + 1, y);
            click(grid, covers, x + 1, y + 1);
        }
    }
}

function displayGrid(grid, covers) {
    let displayGrid = [];

    for (let x = 0; x < grid.length; x++) {
        const row = grid[x];
        for (let y = 0; y < row.length; y++) {
            const cell = row[y];
            if (covers[x][y]) {
                displayGrid.push('X');
            } else {
                // 
                displayGrid.push(cell === 0 ? '.' : cell);

                if (cell === 0) {
                    displayGrid.push('.');
                } else {
                    displayGrid.push(cell);
                }
            }
        }
        displayGrid.push('\n');
    }

    console.log(displayGrid.join(''));
}

displayGrid(grid, covers);
click(grid, covers, 4, 4);
displayGrid(grid, covers);
