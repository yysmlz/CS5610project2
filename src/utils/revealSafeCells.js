export const revealSafeCells = (grid, row, col) => {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];
  
    const stack = [[row, col]];
  
    while (stack.length > 0) {
      const [currentRow, currentCol] = stack.pop();
      if (grid[currentRow][currentCol].isSelected || grid[currentRow][currentCol].isMine) {
        continue;
      }
  
      grid[currentRow][currentCol].isSelected = true;
  
      if (grid[currentRow][currentCol].adjacentMines === 0) {
        directions.forEach(([dx, dy]) => {
          const newRow = currentRow + dx;
          const newCol = currentCol + dy;
          if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length && !grid[newRow][newCol].isSelected) {
            stack.push([newRow, newCol]);
          }
        });
      }
    }
    return grid;
  };
  