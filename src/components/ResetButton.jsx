import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import '../styles/resetbutton.css';

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
