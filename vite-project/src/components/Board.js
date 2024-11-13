//子组件Board 接收父组件GamePage传来的 props 并将它们传递给它的子组件 Cell 组件，渲染多个Cell组件，形成网格：

import Cell from './Cell';

const Board = ({ grid, onCellClick, onFlagCell }) => {
  return (
    <div className="board">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            cell={cell}
            row={rowIndex}
            col={colIndex}
            onCellClick={onCellClick}
            onFlagCell={onFlagCell}
          />
        ))
      )}
    </div>
  );
};

