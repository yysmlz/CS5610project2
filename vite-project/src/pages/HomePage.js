import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

const HomePage = () => (
  <div className="homepage">
    <h1>Welcome to Minesweeper</h1>
    <p>Navigate to start a new game or read the rules!</p>
    <nav>
      <Link to="/rules" className="homepage-link">View Rules</Link>
      <Link to="/game/easy" className="homepage-link">Start Game</Link>
    </nav>
  </div>
);

export default HomePage;
