//context 负责存储和管理全局状态（如网格状态、游戏状态等），并提供必要的方法来改变状态。
//components 负责渲染 UI，并在用户交互时触发相应的逻辑（如点击、标记、悬停等），通常通过调用 context 提供的方法来更新状态。
//除了载入功能外别的逻辑都检查过，这个localstorage是我后面加的，载入有问题就删了把，4分额外分不要了，
//如果你在浏览器中测试时，发现 localStorage 的载入或保存存在问题，可以调试 console.log 每次的保存和载入过程。

import React, { createContext, useState } from 'react';
import { generateGrid, calculateAdjacentMines, revealSafeCells, checkWinCondition } from '../utils/generateGrid';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  // 状态定义
  const [grid, setGrid] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [remainingMines, setRemainingMines] = useState(0);
  const [hasSafeFirstClick, setHasSafeFirstClick] = useState(true);
  const [currentDifficulty, setCurrentDifficulty] = useState('easy'); // 管理当前难度
  const [hoveredCell, setHoveredCell] = useState(null);

  //这个载入和记录功能是我最后加的，不确定是否会有问题或者漏记录的值，需要看你是否还要加需要的状态
  //使用 useEffect 来从 localStorage 载入和保存游戏状态的功能
  useEffect(() => {
    const savedGrid = JSON.parse(localStorage.getItem('grid'));
    const savedGameOver = JSON.parse(localStorage.getItem('gameOver'));
    const savedIsWin = JSON.parse(localStorage.getItem('isWin'));
    const savedRemainingMines = JSON.parse(localStorage.getItem('remainingMines'));
    const savedHasSafeFirstClick = JSON.parse(localStorage.getItem('hasSafeFirstClick'));
    const savedCurrentDifficulty = localStorage.getItem('currentDifficulty');

    if (savedGrid) {
      setGrid(savedGrid);
      setGameOver(savedGameOver);
      setIsWin(savedIsWin);
      setRemainingMines(savedRemainingMines);
      setHasSafeFirstClick(savedHasSafeFirstClick);
      if (savedCurrentDifficulty) {
        setCurrentDifficulty(savedCurrentDifficulty);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('grid', JSON.stringify(grid));
    localStorage.setItem('gameOver', JSON.stringify(gameOver));
    localStorage.setItem('isWin', JSON.stringify(isWin));
    localStorage.setItem('remainingMines', JSON.stringify(remainingMines));
    localStorage.setItem('hasSafeFirstClick', JSON.stringify(hasSafeFirstClick));
    localStorage.setItem('currentDifficulty', currentDifficulty);
  }, [grid, gameOver, isWin, remainingMines, hasSafeFirstClick, currentDifficulty]);

  //后面我都检查过，包括它们运用的utils函数
  const initializeGrid = (rows, cols, mines) => {
    const newGrid = generateGrid(rows, cols, 0); // 初始不放置地雷数量为0，不放地雷只初始化
    setGrid(newGrid);
    setRemainingMines(mines);
    setGameOver(false);
    setIsWin(false);
    setHasSafeFirstClick(true);
  };

  // 处理用户点击的函数
  const handleCellClick = (row, col) => {
    if (gameOver) return;

    let updatedGrid = [...grid];
    const cell = updatedGrid[row][col];

    //首次点击逻辑：1.generategrid初始化grid还有防止地雷已经保证了首次安全逻辑 2.首次点击中计算储存grid的AdjacentMines
    if (hasSafeFirstClick) {
      updatedGrid = generateGrid(grid.length, grid[0].length, remainingMines, { row, col }); //首次点击坐标
      updatedGrid = calculateAdjacentMines(updatedGrid); //初始化后计算储存每个格子的周围地雷数量
      setHasSafeFirstClick(false); //首次安全点击的设置已经结束
    }

    // 已选择的格子不能重复操作
    if (cell.isSelected || cell.isFlagged) return;

    // 选择格子
    cell.isSelected = true;

    //如果click cell.ismine这里连接了
    if (cell.isMine) {
      setIsWin(false);
      setGameOver(true); 
    } else { //本次点击不是地雷，需要判断目前是否所有安全格isselected
      updatedGrid = revealSafeCells(updatedGrid, row, col); //改变iselected状态+bfs递归揭开格子
      if (checkWinCondition(updatedGrid)) { //所有安全格子全部揭开了触发了gameover
        setIsWin(true);
        setGameOver(true);
      }
    }
    setGrid(updatedGrid);
  };

  // 处理红旗标记逻辑
  const handleFlagCell = (row, col) => {
    if (gameOver) return;

    const cell = grid[row][col];
    if (!cell.isSelected) {
      cell.isFlagged = !cell.isFlagged;
      setGrid([...grid]);
      setRemainingMines(remainingMines + (cell.isFlagged ? -1 : 1));
    }
  };

  // 处理鼠标悬停状态
  const handleMouseEnter = (row, col) => {
    if (!grid[row][col].isSelected) {
      setHoveredCell({ row, col });
    }
  };

  const handleMouseLeave = () => {
    setHoveredCell(null);
  };

  return (
    <GameContext.Provider
      value={{
        grid,
        gameOver,
        isWin,
        remainingMines,
        currentDifficulty,
        setCurrentDifficulty,
        initializeGrid,
        handleCellClick,
        handleFlagCell,
        handleMouseEnter,
        handleMouseLeave,
        hoveredCell,
        setGameOver,
        setIsWin,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};


