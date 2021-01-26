import ElectionmapActionTypes from './electionmap.types';

const INITIAL_STATE = {
  
};

const electionmapReducer = (state = INITIAL_STATE, action) => {
  console.log('PL', action);
  switch (action.type) {
    case ElectionmapActionTypes.POST_ELECTIONMAP:
      return state;
    default:
      return state;
  }
};

export default electionmapReducer;
