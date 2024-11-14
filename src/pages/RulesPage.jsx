import React from 'react';
import '../styles/rulespage.css';

const RulesPage = () => (
  <div className="rules-page">
    <h1>Game Rules</h1>
    <section>
      <h2>Objective</h2>
      <p>
        The goal of Minesweeper is to reveal all the safe squares on the grid without clicking on any mines. Use logic and strategy to determine where the mines are placed.
      </p>
    </section>

    <section>
      <h2>Game Board</h2>
      <p>
        The game board is a grid with three difficulty levels:
      </p>
      <ul>
        <li><strong>Easy:</strong> 8x8 grid with 10 mines</li>
        <li><strong>Medium:</strong> 16x16 grid with 40 mines</li>
        <li><strong>Hard:</strong> 30x16 grid with 99 mines</li>
      </ul>
    </section>

    <section>
      <h2>How to Play</h2>
      <p>
        Click on a cell to reveal what is underneath. Each cell can reveal:
      </p>
      <ul>
        <li>
          <strong>A Number:</strong> Indicates the number of mines adjacent to the cell. Use this information to deduce the location of surrounding mines.
        </li>
        <li>
          <strong>A Mine:</strong> If you click on a mine, the game is over, and you lose.
        </li>
      </ul>
      <p>
        You win the game by uncovering all safe cells without clicking on a mine. If you uncover all safe cells, a message saying "Game over! You Won!" will be displayed.
      </p>
    </section>

    <section>
      <h2>Controls</h2>
      <ul>
        <li><strong>Left Click:</strong> Reveal the contents of a cell.</li>
        <li><strong>Right Click (or Shift + Click):</strong> Place a flag on a cell to mark it as a suspected mine. Flags are just visual aids and do not affect gameplay.</li>
        <li><strong>Reset Button:</strong> Starts a new game with a freshly randomized board.</li>
      </ul>
    </section>

    <section>
      <h2>Additional Rules</h2>
      <ul>
        <li>The first cell you click is always safe, containing no mines.</li>
        <li>Flagged cells do not influence the game's win/lose conditions and are only for your reference.</li>
        <li>If you reveal a cell with no adjacent mines, it may automatically reveal nearby cells for convenience.</li>
      </ul>
    </section>
  </div>
);

export default RulesPage;
