//渲染游戏网格和其他相关的 UI 元素（如重置按钮和难度选择）。从 components/ 文件夹导入 Board 和 Cell 组件进行网格显示和交互。
//DifficultySelector：这个组件一直存在于 GamePage 页面顶部，通过点击不同的按钮来更改当前的难度，并通过 navigate() 更新 URL。
//GamePage：这个页面会根据 URL 中的 difficulty 参数来初始化相应的游戏网格。useParams() 获取当前页面的 difficulty，然后 useEffect 钩子根据选择的难度配置网格。

import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GameContext } from '../context/GameContext';
import Board from '../components/Board';
import ResetButton from '../components/ResetButton';
import GameOverModal from '../components/GameOverModal';
import DifficultySelector from '../components/DifficultySelector';

const GamePage = () => {
  const { difficulty } = useParams(); // 获取 URL 中的 difficulty 参数
  const { grid, handleCellClick, handleFlagCell, remainingMines, gameOver, initializeGrid, setCurrentDifficulty } = useContext(GameContext);

  // 根据 difficulty 初始化游戏网格
  useEffect(() => {
    switch (difficulty) {
      case 'easy':
        initializeGrid(8, 8, 10); // easy 难度
        setCurrentDifficulty('easy'); // 更新难度
        break;
      case 'medium':
        initializeGrid(16, 16, 40); // medium 难度
        setCurrentDifficulty('medium'); // 更新难度
        break;
      case 'hard':
        initializeGrid(30, 16, 99); // hard 难度
        setCurrentDifficulty('hard'); // 更新难度
        break;
      default:
        break;
    }
  }, [difficulty, initializeGrid, setCurrentDifficulty]);

  return (
    <div>
      {/* 固定的 header 包括难度选择 */}
      <header>
        <h1>Minesweeper</h1>
        <DifficultySelector /> //
        <p>Remaining Mines: {remainingMines}</p>
        <ResetButton /> 
      </header>

      {gameOver && <p>Game Over! Click reset to play again.</p>}

      <Board
        grid={grid} //将 grid 传递给 Board
        onCellClick={handleCellClick} // 将 handleCellClick 传递给 Board
        onFlagCell={handleFlagCell} // 将 handleFlagCell 传递给 Board
      />
      <GameOverModal />
    </div>
  );
};

export default GamePage;
