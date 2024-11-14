import React from 'react';
import '../styles/cell.css';

const Cell = ({ cell, row, col, onCellClick, onFlagCell }) => {
  const handleLeftClick = () => {
    if (onCellClick) {
      onCellClick(row, col);
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    if (onFlagCell) {
      onFlagCell(row, col);
    }
  };

  const getCellDisplay = () => {
    if (cell.isFlagged) {
      return '🚩';
    }
    if (cell.isSelected) {
      return cell.isMine ? '💣' : cell.adjacentMines !== undefined ? cell.adjacentMines : '';
    }
    return '';
  };

  return (
    <div
      className={`cell ${cell.isSelected ? 'selected' : 'unselected'}`}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      {getCellDisplay()}
    </div>
  );
};

export default Cell;

  