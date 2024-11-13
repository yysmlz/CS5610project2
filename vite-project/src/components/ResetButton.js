//提供一个reset按钮来调用 initializeGrid 函数，以重置游戏网格。此组件通过 GameContext 调用 initializeGrid 来重置状态。

import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const ResetButton = () => {
  const { currentDifficulty, initializeGrid } = useContext(GameContext);

  const handleReset = () => {
    switch (currentDifficulty) {
      case 'easy':
        initializeGrid(8, 8, 10);
        break;
      case 'medium':
        initializeGrid(16, 16, 40);
        break;
      case 'hard':
        initializeGrid(30, 16, 99);
        break;
      default:
        break;
    }
  };

  return <button onClick={handleReset}>Reset Game</button>;
};

export default ResetButton;
