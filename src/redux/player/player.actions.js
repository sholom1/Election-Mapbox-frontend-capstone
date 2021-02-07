import axios from 'axios';
import PlayerActionTypes from './player.types';

//ACTION CREATORS
export const fetchAllPlayers = (payload) => ({
  type: PlayerActionTypes.FETCH_ALL_PLAYERS,
  payload,
});

//THUNKS

export const fetchAllPlayersThunk = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('https://electionmapbox.herokuapp.com/api/players');
      // console.log('data', data);
      dispatch(fetchAllPlayers(data));
    } catch (error) {
      console.error(error);
    }
  };
};

