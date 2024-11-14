export const generateGrid = (rows, cols, totalMines, avoidFirstClick = null) => {
  const grid = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({
      isMine: false,
      isSelected: false,
      isFlagged: false,
      adjacentMines: 0,
    }))
  );

  const availablePositions = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!(avoidFirstClick && row === avoidFirstClick.row && col === avoidFirstClick.col)) {
        availablePositions.push({ row, col });
      }
    }
  }

  for (let i = 0; i < totalMines; i++) {
    const randomIndex = Math.floor(Math.random() * availablePositions.length);
    const { row, col } = availablePositions.splice(randomIndex, 1)[0];
    grid[row][col].isMine = true;
  }

  return grid;
};
