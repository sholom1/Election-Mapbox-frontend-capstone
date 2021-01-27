import axios from 'axios';
import ElectionmapActionTypes from './electionmap.types';

//ACTION CREATORS

// fetch available layers
const fetchAvailableLayers = (layers) => {
	return {
		type: ElectionmapActionTypes.FETCH_AVAILABLE_LAYERS,
		payload: layers,
	};
};

// fetch available excel files
const fetchAvailableExcelFiles = (files) => {
	return {
		type: ElectionmapActionTypes.FETCH_AVAILABLE_EXCEL_FILES,
		payload: files,
	};
};

// fetch available color files
const fetchAvailableColorFiles = (colors) => {
	return {
		type: ElectionmapActionTypes.FETCH_AVAILABLE_COLOR_FILES,
		payload: colors,
	};
};

// post new district layer
export const postDistrictLayers = (layers) => {
	return {
		type: ElectionmapActionTypes.POST_DISTRICT_LAYERS,
		payload: layers,
	};
};

// post new electionmap
export const postElectionmap = (electionmap) => {
	return {
		type: ElectionmapActionTypes.POST_ELECTIONMAP,
		payload: electionmap,
	};
};

//THUNKS

// fetch available layers thunk
export const fetchAvailableLayersThunk = () => (dispatch) => {
	return axios
		.get('http://localhost:8080/api/districtlayer/')
		.then((res) => res.data)
		.then((layers) => dispatch(fetchAvailableLayers(layers)))
		.catch((err) => console.log(err));
};

// fetch available excel files thunk
export const fetchAvailableExcelFilesThunk = () => (dispatch) => {
	return axios
		.get('http://localhost:8080/api/electiondata/')
		.then((res) => res.data)
		.then((files) => dispatch(fetchAvailableExcelFiles(files)))
		.catch((err) => console.log(err));
};

// fetch available color files thunk
export const fetchAvailableColorFilesThunk = () => (dispatch) => {
	return axios
		.get('http://localhost:8080/api/colordata/')
		.then((res) => res.data)
		.then((colors) => dispatch(fetchAvailableColorFiles(colors)))
		.catch((err) => console.log(err));
};

// post electionmap thunk
export const postElectionmapThunk = (body) => (dispatch) => {
	return axios
		.post('http://localhost:8080/api/electionmap/', body)
		.then((res) => res.data)
		.then((electionmap) => dispatch(postElectionmap(electionmap)))
		.catch((err) => console.log(err));
};

// post districtLayers thunk
export const postDistrictLayersThunk = (body) => (dispatch) => {
	let promises = [];
	for (let layer of body.districtLayers) {
		//data.append('file', this.state.districtLayers[i]);
		promises.push(readUploadedFileAsJSON(layer));
	}
	return Promise.all(promises).then((values) => {
		console.log(values);
		body = { ...body, districtLayers: values };
		axios
			.post('http://localhost:8080/api/districtlayer/', body)
			.then((res) => res.data)
			.then((layers) => dispatch(postDistrictLayers(layers)))
			.catch((err) => console.log(err));
	});
};

const readUploadedFileAsJSON = (inputFile) => {
	const temporaryFileReader = new FileReader();

	return new Promise((resolve, reject) => {
		temporaryFileReader.onerror = () => {
			temporaryFileReader.abort();
			reject(new DOMException('Problem parsing input file.'));
		};

		temporaryFileReader.onload = () => {
			resolve(JSON.parse(temporaryFileReader.result));
		};
		temporaryFileReader.readAsText(inputFile);
	});
};
