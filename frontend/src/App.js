import React, { useState, useEffect } from 'react';
import './App.css';
import { GameService } from './services/gameService';
import { supabase } from './utils/supabaseClient';

function App() {
  const [theme, setTheme] = useState('light');
  const [game, setGame] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const startNewGame = async (gameType = 'PVP') => {
    try {
      const newGame = await GameService.createGame(gameType);
      setGame(newGame);
      setError(null);
    } catch (err) {
      setError('Failed to start new game');
      console.error(err);
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        
        <h1>Tic Tac Toe</h1>
        
        {error && <div className="error">{error}</div>}
        
        <div className="game-controls">
          <button onClick={() => startNewGame('PVP')}>
            Start PVP Game
          </button>
          <button onClick={() => startNewGame('AI')}>
            Start AI Game
          </button>
        </div>

        {game && (
          <div className="game-info">
            <p>Game Status: {game.game_status}</p>
            <p>Current Player: {game.current_player}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
