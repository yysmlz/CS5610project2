export const checkWinCondition = (grid) => {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        if (!grid[row][col].isMine && !grid[row][col].isSelected) {
          return false;
        }
      }
    }
    return true;
  };