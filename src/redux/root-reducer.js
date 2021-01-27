import { combineReducers } from 'redux';

// Reducers
import playerReducer from './player/player.reducer';
import electionmapReducer from './electionmap/electionmap.reducer';
import userReducer from './user/user.reducer'

const rootReducer = combineReducers({
  players: playerReducer,
  electionmaps: electionmapReducer,
  users: userReducer,
});

export default rootReducer;
