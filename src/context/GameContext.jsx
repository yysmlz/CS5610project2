import React, { createContext, useState, useCallback } from 'react';
import { generateGrid } from '../utils/generateGrid';
import { calculateAdjacentMines } from '../utils/calculateAdjacentMines';
import { revealSafeCells } from '../utils/revealSafeCells';
import { checkWinCondition } from '../utils/checkWinCondition';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [grid, setGrid] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [remainingMines, setRemainingMines] = useState(0);
  const [isFirstClick, setIsFirstClick] = useState(true); // 标记第一次点击
  const [currentDifficulty, setCurrentDifficulty] = useState('easy');
  const [hoveredCell, setHoveredCell] = useState(null);


  const initializeGrid = useCallback((rows, cols, mines) => {
    const newGrid = generateGrid(rows, cols, mines);
    setGrid(newGrid);
    setRemainingMines(mines);
    setGameOver(false);
    setIsWin(false);
    setIsFirstClick(true); 
  }, []);

  const updateDifficulty = useCallback((difficulty) => {
    setCurrentDifficulty(difficulty);
  }, []);

  const handleCellClick = (row, col) => {
    if (gameOver || grid[row][col].isFlagged || grid[row][col].isSelected) return;

    if (isFirstClick) {
      const rows = grid.length;
      const cols = grid[0].length;
      const totalMines = remainingMines;
      const newGrid = generateGrid(rows, cols, totalMines, { row, col });
      setGrid(newGrid);
      setIsFirstClick(false);
  

      newGrid[row][col].isSelected = true;
      newGrid[row][col].adjacentMines = calculateAdjacentMines(newGrid, row, col);
      setGrid(newGrid);
      return;
    }
  
    const updatedGrid = [...grid];

    if (updatedGrid[row][col].isMine) {
      setGameOver(true);
      updatedGrid[row][col].isSelected = true;
    } else {
      updatedGrid[row][col].isSelected = true;
      updatedGrid[row][col].adjacentMines = calculateAdjacentMines(updatedGrid, row, col);
    }

    setGrid(updatedGrid);

    if (checkWinCondition(updatedGrid)) {
      setIsWin(true);
      setGameOver(true);
    }
  };

  const handleFlagCell = (row, col) => {
    if (gameOver || grid[row][col].isSelected) return;

    const updatedGrid = [...grid];
    updatedGrid[row][col].isFlagged = !updatedGrid[row][col].isFlagged;
    setRemainingMines((prev) => prev + (updatedGrid[row][col].isFlagged ? -1 : 1));
    setGrid(updatedGrid);
  };

  const handleMouseEnter = (row, col) => setHoveredCell({ row, col });
  const handleMouseLeave = () => setHoveredCell(null);

  return (
    <GameContext.Provider
      value={{
        grid,
        gameOver,
        isWin,
        remainingMines,
        currentDifficulty,
        setCurrentDifficulty: updateDifficulty,
        initializeGrid,
        handleCellClick,
        handleFlagCell,
        hoveredCell,
        setGameOver,
        setIsWin,
        handleMouseEnter,
        handleMouseLeave,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
