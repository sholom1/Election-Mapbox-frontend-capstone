import ElectionmapActionTypes from './electionmap.types';

// const INITIAL_STATE = {

// };

const electionmapReducer = (state = [], action) => {
	console.log('PL', action);
	switch (action.type) {
		case ElectionmapActionTypes.FETCH_AVAILABLE_LAYERS:
			console.log('payload in reducer', action.payload);
			return { ...state, availableLayers: action.payload };
		case ElectionmapActionTypes.FETCH_AVAILABLE_EXCEL_FILES:
			return { ...state, availableExcelFiles: action.payload };
		case ElectionmapActionTypes.FETCH_AVAILABLE_COLOR_FILES:
			return { ...state, availableColorFiles: action.payload };
		case ElectionmapActionTypes.POST_ELECTIONMAP:
			return { ...state, availableLayers: action.payload };
		case ElectionmapActionTypes.POST_DISTRICT_LAYERS:
			return { ...state, availableLayers: [...state.availableLayers, action.payload] };
		default:
			return state;
	}
};

export default electionmapReducer;
