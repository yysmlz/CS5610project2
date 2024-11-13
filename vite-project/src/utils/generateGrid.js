
export const generateGrid = (rows, cols, totalMines, avoidFirstClick = null) => {
    const grid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        isMine: false,
        isSelected: false,
        isFlagged: false,
        adjacentMines: 0,
      }))
    );//初始化网格属性值
  
    let placedMines = 0;
    while (placedMines < totalMines) {
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol = Math.floor(Math.random() * cols);
  
      // 确保首次点击的这个格子不含地雷：randow为首次点击位置时直接跳过放置地雷循环
      if (avoidFirstClick && randomRow === avoidFirstClick.row && randomCol === avoidFirstClick.col) {
        continue;
      }
  
      if (!grid[randomRow][randomCol].isMine) {
        grid[randomRow][randomCol].isMine = true;
        placedMines++;
      }
    }
  
    return grid;
  };
  