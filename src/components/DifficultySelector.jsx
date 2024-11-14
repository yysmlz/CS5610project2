import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { useNavigate } from 'react-router-dom';

const DifficultySelector = () => {
  const { setCurrentDifficulty } = useContext(GameContext);
  const navigate = useNavigate();

  const handleSelect = (difficulty) => {
    setCurrentDifficulty(difficulty); 
    navigate(`/game/${difficulty}`); 
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
