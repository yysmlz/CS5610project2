import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext.jsx';
import HomePage from './pages/HomePage.jsx';
import GamePage from './pages/GamePage.jsx';
import RulesPage from './pages/RulesPage.jsx';
import NavBar from './components/NavBar.jsx'; 

function App() {
  return (
    <GameProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/:difficulty" element={<GamePage />} />
          <Route path="/rules" element={<RulesPage />} />
        </Routes>
    </GameProvider>
  );
}

export default App;

