//Navbar 负责导航，不涉及具体的游戏逻辑或难度选择。
//DifficultySelector 负责根据用户选择的难度更新 URL 并触发 GamePage 渲染。
//我现在设置的是navbar每个页面都有但是 difficultyselector header只有gamepage有

import React from 'react';
import { Link } from 'react-router-dom';

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
