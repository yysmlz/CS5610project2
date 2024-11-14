import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/rules">Rules</Link></li>
      <li><Link to="/game/easy">Easy</Link></li>
      <li><Link to="/game/medium">Medium</Link></li>
      <li><Link to="/game/hard">Hard</Link></li>
    </ul>
  </nav>
);

export default NavBar;
