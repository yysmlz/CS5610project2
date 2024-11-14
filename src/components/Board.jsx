import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import Cell from './Cell';
import '../styles/board.css';

const Board = () => {
  const { grid, currentDifficulty, handleCellClick, handleFlagCell } = useContext(GameContext);

  return (
    <div className={`board ${currentDifficulty}`}>
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            cell={cell}
            row={rowIndex}
            col={colIndex}
            onCellClick={handleCellClick}
            onFlagCell={handleFlagCell}
          />
        ))
      )}
    </div>
  );
};

export default Board;
