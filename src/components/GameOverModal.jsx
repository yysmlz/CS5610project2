import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const GameOverModal = () => {
  const { gameOver, isWin } = useContext(GameContext);

  if (!gameOver) return null;

  return (
    <div className="gameover">
      <h1>{isWin ? 'Game over! You Won!' : 'Game over! You lost!'}</h1>
    </div>
  );
};

export default GameOverModal;

