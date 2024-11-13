//DifficultySelector 组件负责控制难度的选择，并根据选择的难度更新全局难度状态和URL。
//难度的选择和页面跳转是通过 DifficultySelector 完成的，GamePage 只负责根据 URL 获取难度参数并渲染游戏内容。

import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { useNavigate } from 'react-router-dom';

const DifficultySelector = () => {
  const { setCurrentDifficulty } = useContext(GameContext);
  const navigate = useNavigate();

  const handleSelect = (difficulty) => {
    setCurrentDifficulty(difficulty); // 更新当前难度（更新在context全局状态中）
    navigate(`/game/${difficulty}`); // 更新 URL，触发 GamePage 渲染
  };

  return (
    <div>
      <button onClick={() => handleSelect('easy')}>Easy</button>
      <button onClick={() => handleSelect('medium')}>Medium</button>
      <button onClick={() => handleSelect('hard')}>Hard</button>
    </div>
  );
};

export default DifficultySelector;
