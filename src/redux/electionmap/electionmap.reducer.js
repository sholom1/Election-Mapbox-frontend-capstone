import ElectionmapActionTypes from './electionmap.types';

// const INITIAL_STATE = {

// };

const electionmapReducer = (state = [], action) => {
	console.log('PL', action);
	switch (action.type) {
		case ElectionmapActionTypes.FETCH_AVAILABLE_LAYERS:
			return { ...state, availableLayers: action.payload };
		case ElectionmapActionTypes.FETCH_AVAILABLE_EXCEL_FILES:
			return { ...state, availableExcelFiles: action.payload };
		case ElectionmapActionTypes.FETCH_AVAILABLE_COLOR_FILES:
			return { ...state, availableColorFiles: action.payload };
		case ElectionmapActionTypes.FETCH_AVAILABLE_CATEGORIES:
			return { ...state, availableCategories: action.payload };
		case ElectionmapActionTypes.FETCH_MAP:
			return { ...state, mapData: action.payload };
		case ElectionmapActionTypes.POST_ELECTIONMAP:
			return state;
		case ElectionmapActionTypes.POST_DISTRICT_LAYERS:
			return { ...state, availableLayers: [...state.availableLayers, ...action.payload] };
		case ElectionmapActionTypes.POST_COLOR_FILES:
			return { ...state, availableColorFiles: [...state.availableColorFiles, ...action.payload] };
		case ElectionmapActionTypes.POST_XLSX:
			return { ...state, availableExcelFiles: [...state.availableExcelFiles, ...action.payload] };
		case ElectionmapActionTypes.POST_CATEGORY: 
			return {...state, availableCategories: [...state.availableCategories, action.payload]}
		case ElectionmapActionTypes.FETCH_CATEGORICAL_MAPLINKS:
			return { ...state, categoricalMaplinks: action.payload };
		default:
			return state;
	}
};

export default electionmapReducer;
