# Supabase Configuration for Tic Tac Toe

## Database Structure

### Games Table
- `id` (uuid, primary key)
- `created_at` (timestamp)
- `updated_at` (timestamp)
- `board` (jsonb) - Array of 9 elements representing the game board
- `current_player` (text) - Current player's turn (X or O)
- `game_status` (text) - Game status (IN_PROGRESS, COMPLETED)
- `winner` (text, nullable) - Winner of the game (X, O, or null for draw)
- `game_type` (text) - Type of game (PVP or AI)

## Row Level Security (RLS)
- Read access enabled for all authenticated users
- Insert access enabled for authenticated users
- Update access enabled for authenticated users

## Environment Variables Required
- REACT_APP_SUPABASE_URL: Your Supabase project URL
- REACT_APP_SUPABASE_KEY: Your Supabase public anon key

## Integration Steps
1. Set up environment variables in .env file
2. Install @supabase/supabase-js package
3. Initialize Supabase client using supabaseClient.js
4. Use GameService for database operations

## Usage Example
```javascript
import { GameService } from '../services/gameService';

// Create new game
const newGame = await GameService.createGame('PVP');

// Update game
await GameService.updateGame(gameId, {
  board: newBoard,
  current_player: 'O',
  game_status: 'IN_PROGRESS'
});

// Get game
const game = await GameService.getGame(gameId);
```
