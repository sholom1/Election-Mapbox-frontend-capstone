import axios from 'axios';
import ElectionmapActionTypes from './electionmap.types';
import xlsx from 'xlsx';
/*
TO CONNECT THIS FRONTEND TO LOCAL BACKEND, ALL LINKS IN THIS FILE MUST BEGIN WITH:
${process.env.REACT_APP_BACKEND_URL}/
TO CONNECT THIS FRONTEND TO HEROKU BACKEND, ALL LINKS IN THIS FILE MUST BEGIN WITH:
https://electionmapbox.herokuapp.com/
*/

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

// fetch available categories
const fetchAvailableCategories = (categories) => {
	return {
		type: ElectionmapActionTypes.FETCH_AVAILABLE_CATEGORIES,
		payload: categories,
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

// post new color files
export const postColorFiles = (colorFiles) => {
	return {
		type: ElectionmapActionTypes.POST_COLOR_FILES,
		payload: colorFiles,
	};
};

// post new xlsx files
export const postxlsxFiles = (xlsxFiles) => {
	return {
		type: ElectionmapActionTypes.POST_XLSX,
		payload: xlsxFiles,
	};
};

// post new category
export const postCategory = (category) => {
	return {
		type: ElectionmapActionTypes.POST_CATEGORY,
		payload: category,
	};
};

// fetch map
export const fetchElectionMap = (mapData) => {
	return {
		type: ElectionmapActionTypes.FETCH_MAP,
		payload: mapData,
	};
};

// fetch categorical maps
export const fetchCategoricalMaplinks = (maplinks) => {
	return {
		type: ElectionmapActionTypes.FETCH_CATEGORICAL_MAPLINKS,
		payload: maplinks,
	};
};

//THUNKS

// fetch available layers thunk
export const fetchAvailableLayersThunk = () => (dispatch) => {
	return axios
		.get(`${process.env.REACT_APP_BACKEND_URL}/api/districtlayer/`)
		.then((res) => res.data)
		.then((layers) => dispatch(fetchAvailableLayers(layers)))
		.catch((err) => console.log(err));
};

// fetch available excel files thunk
export const fetchAvailableExcelFilesThunk = () => (dispatch) => {
	return axios
		.get(`${process.env.REACT_APP_BACKEND_URL}/api/electiondata/`)
		.then((res) => res.data)
		.then((files) => dispatch(fetchAvailableExcelFiles(files)))
		.catch((err) => console.log(err));
};

// fetch available color files thunk
export const fetchAvailableColorFilesThunk = () => (dispatch) => {
	return axios
		.get(`${process.env.REACT_APP_BACKEND_URL}/api/colordata/`)
		.then((res) => res.data)
		.then((colors) => dispatch(fetchAvailableColorFiles(colors)))
		.catch((err) => console.log(err));
};

// fetch available categories thunk
export const fetchAvailableCategoriesThunk = () => (dispatch) => {
	return axios
		.get(`${process.env.REACT_APP_BACKEND_URL}/api/electionmap/categories/`)
		.then((res) => res.data)
		.then((categories) => dispatch(fetchAvailableCategories(categories)))
		.catch((err) => console.log(err));
};

export const postCategoryThunk = (body) => (dispatch) => {
	console.log('body in thunk', body);
	return axios
		.post(`${process.env.REACT_APP_BACKEND_URL}/api/electionmap/categories/`, body)
		.then((res) => res.data)
		.then((category) => dispatch(postCategory(category)))
		.catch((err) => console.log(err));
};

// fetch map thunk
export const fetchMapThunk = (id) => (dispatch) => {
	return axios
		.get(`${process.env.REACT_APP_BACKEND_URL}/api/electionmap/${id}`)
		.then((res) => {
			console.log(res);
			return res.data;
		})
		.then((retrievedMap) => dispatch(fetchElectionMap(retrievedMap)))
		.catch((err) => console.log(err));
};

// post electionmap thunk
export const postElectionmapThunk = (body) => (dispatch) => {
	return axios
		.post(`${process.env.REACT_APP_BACKEND_URL}/api/electionmap/`, body)
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
			.post(`${process.env.REACT_APP_BACKEND_URL}/api/districtlayer/`, body)
			.then((res) => res.data)
			.then((layers) => dispatch(postDistrictLayers(layers)))
			.catch((err) => console.log(err));
	});
};

// post xlsx thunk
export const postxlsxFileThunk = (body) => (dispatch) => {
	let promises = [];
	console.log(body);
	for (let xlsx of body.xlsxFiles) {
		console.log('xlsx', xlsx);
		promises.push(readUploadedFileAsXLSX(xlsx));
	}
	return Promise.all(promises).then((values) => {
		console.log('values', values);
		body = { ...body, xlsxFiles: values };
		console.log('body', body);
		axios
			.post(`${process.env.REACT_APP_BACKEND_URL}/api/electiondata/`, body)
			.then((res) => {
				console.log('res', res);
				console.log('res.data', res.data);
				return res.data;
			})
			.then((xlsx) => {
				console.log('xlsx', xlsx);
				dispatch(postxlsxFiles(xlsx));
			})
			.catch((err) => console.log(err));
	});
};

// post color files thunk
export const postColorFilesThunk = (body) => (dispatch) => {
	let promises = [];
	for (let color of body.colorFiles) {
		console.log('color', color);
		promises.push(readUploadedFileAsJSON(color));
	}
	return Promise.all(promises).then((values) => {
		console.log('values', values);
		body = { ...body, colorFiles: values };
		console.log('body', body);
		axios
			.post(`${process.env.REACT_APP_BACKEND_URL}/api/colordata/`, body)
			.then((res) => {
				console.log('res', res);
				console.log('res.data', res.data);
				return res.data;
			})
			.then((colors) => {
				console.log('colors', colors);
				dispatch(postColorFiles(colors));
			})
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
			resolve({ name: inputFile.name, data: JSON.parse(temporaryFileReader.result) });
		};
		temporaryFileReader.readAsText(inputFile);
	});
};

const readUploadedFileAsXLSX = (inputFile) => {
	const temporaryFileReader = new FileReader();

	return new Promise((resolve, reject) => {
		temporaryFileReader.onerror = () => {
			temporaryFileReader.abort();
			reject(new DOMException('Problem parsing input file.'));
		};

		temporaryFileReader.onload = (e) => {
			let data = e.target.result;
			let workbook = xlsx.read(data, { type: 'binary' });
			let worksheet = workbook.Sheets[workbook.SheetNames[0]];
			resolve({ name: inputFile.name, data: worksheet });
		};
		temporaryFileReader.readAsBinaryString(inputFile);
	});
};

// fetch categorical maplinks thunk
export const fetchCategoricalMaplinksThunk = (category) => async (dispatch) => {
	// return axios
	// 	.get(`${process.env.REACT_APP_BACKEND_URL}/api/electionmap/${category}`)
	// 	.then((res) => {
	// 		console.log('in thunk', res);
	// 		return res.data;
	// 	})
	// 	.then((retrievedMaplinks) => dispatch(fetchCategoricalMaplinks(retrievedMaplinks)))
	// 	.catch((err) => console.log(err));
	try {
		const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/electionmap/categories/${category}`);
		dispatch(fetchCategoricalMaplinks(data));
	} catch (error) {
		console.log(error);
	}
};
