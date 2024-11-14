import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GameContext } from '../context/GameContext.jsx';
import Board from '../components/Board.jsx';
import ResetButton from '../components/ResetButton.jsx';
import DifficultySelector from '../components/DifficultySelector.jsx';
import GameOverModal from '../components/GameOverModal.jsx';
import '../styles/gamepage.css';

const GamePage = () => {
  const { difficulty } = useParams();
  const {
    grid,
    handleCellClick,
    handleFlagCell,
    remainingMines,
    gameOver,
    initializeGrid,
    setCurrentDifficulty,
  } = useContext(GameContext);

  useEffect(() => {
    switch (difficulty) {
      case 'easy':
        initializeGrid(8, 8, 10);
        setCurrentDifficulty('easy');
        break;
      case 'medium':
        initializeGrid(16, 16, 40);
        setCurrentDifficulty('medium');
        break;
      case 'hard':
        initializeGrid(30, 16, 99);
        setCurrentDifficulty('hard');
        break;
      default:
        break;
    }
  }, [difficulty, initializeGrid, setCurrentDifficulty]);

  return (
    <div className="gamepage">
      <header>
        <h1>Minesweeper</h1>
        <DifficultySelector />
        <p className="remaining-mines">Remaining Mines: {remainingMines}</p>
        <ResetButton />
      </header>

      <Board />

      <GameOverModal />
    </div>
  );
};

export default GamePage;
