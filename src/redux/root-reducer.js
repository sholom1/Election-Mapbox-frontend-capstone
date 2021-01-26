import { combineReducers } from 'redux';

// Reducers
import playerReducer from './player/player.reducer';
import electionmapReducer from './electionmap/electionmap.reducer';

const rootReducer = combineReducers({
  players: playerReducer,
  electionmaps: electionmapReducer,
});

export default rootReducer;
