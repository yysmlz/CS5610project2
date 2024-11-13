
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import RulesPage from './pages/RulesPage';
import NavBar from './components/NavBar'; 

function App() {
  return (
    <GameProvider>
      <Router>
        <NavBar /> {/* Navbar 在每个页面都显示 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/:difficulty" element={<GamePage />} />
          <Route path="/rules" element={<RulesPage />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;

