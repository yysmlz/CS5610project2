//监听 context 中的 gameOver 状态，当游戏结束时显示提示信息。
//应该没有问题，我检查过

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

