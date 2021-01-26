import ElectionmapActionTypes from './electionmap.types';

// const INITIAL_STATE = {
  
// };

const electionmapReducer = (state = [], action) => {
  console.log('PL', action);
  switch (action.type) {
    case ElectionmapActionTypes.FETCH_AVAILABLE_LAYERS:
      return action.payload;
    case ElectionmapActionTypes.FETCH_AVAILABLE_EXCEL_FILES:
      return action.payload;
    case ElectionmapActionTypes.FETCH_AVAILABLE_COLOR_FILES:
      return action.payload;
    case ElectionmapActionTypes.POST_ELECTIONMAP:
      let newState = [action.payload, ...state];
      return newState;
    case ElectionmapActionTypes.POST_DISTRICT_LAYERS:
      newState = [action.payload, ...state];
      return newState;
    default:
      return state;
  }
};

export default electionmapReducer;
