import { supabase } from '../utils/supabaseClient';

export const GameService = {
  async createGame(gameType = 'PVP') {
    const emptyBoard = Array(9).fill(null);
    
    const { data, error } = await supabase
      .from('games')
      .insert([
        {
          board: emptyBoard,
          current_player: 'X',
          game_status: 'IN_PROGRESS',
          game_type: gameType
        }
      ])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateGame(gameId, updates) {
    const { data, error } = await supabase
      .from('games')
      .update(updates)
      .eq('id', gameId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getGame(gameId) {
    const { data, error } = await supabase
      .from('games')
      .select('*')
      .eq('id', gameId)
      .single();

    if (error) throw error;
    return data;
  }
};
