import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
	fetchAvailableLayersThunk,
	fetchAvailableExcelFilesThunk,
	fetchAvailableColorFilesThunk,
	fetchAvailableCategoriesThunk,
	postElectionmapThunk,
	postDistrictLayersThunk,
	postColorFilesThunk,
	postxlsxFileThunk,
	postCategoryThunk,
} from '../../../redux/electionmap/electionmap.actions';
//import electionmapReducer from '../../../redux/electionmap/electionmap.reducer';
import { AddDistrictLayersForm, AddElectionmapForm, AddColorFilesForm, AddxlsxForm, AddCategoryForm } from '../views/index';

// Smart container;
class AddElectionMapContainer extends Component {
	componentDidMount() {
		this.props.fetchAvailableLayers();
		this.props.fetchAvailableExcelFiles();
		this.props.fetchAvailableColorFiles();
		this.props.fetchAvailableCategories();
	}

	render() {
		return (
			<div>
				<AddElectionmapForm
					postElectionmap={this.props.postElectionmap}
					availableCategories={this.props.availableCategories}
					availableExcelFiles={this.props.availableExcelFiles}
					availableLayers={this.props.availableLayers}
					availableColorFiles={this.props.availableColorFiles}
				/>
				<AddCategoryForm postCategory={this.props.postCategory} />
				<AddxlsxForm postxlsxFiles={this.props.postxlsxFiles} />
				<AddDistrictLayersForm postDistrictLayers={this.props.postDistrictLayers} />
				<AddColorFilesForm postColorFiles={this.props.postColorFiles} />
			</div>
		);
	}
}

// Map state to props;
const mapStateToProps = (state) => {
	console.log('state in map', state);
	return {
		availableLayers: state.electionmaps.availableLayers,
		availableExcelFiles: state.electionmaps.availableExcelFiles,
		availableColorFiles: state.electionmaps.availableColorFiles,
		availableCategories: state.electionmaps.availableCategories
	};
};

// Map dispatch to props;
const mapDispatchToProps = (dispatch) => {
	return {
		fetchAvailableLayers: () => dispatch(fetchAvailableLayersThunk()),
		fetchAvailableExcelFiles: () => dispatch(fetchAvailableExcelFilesThunk()),
		fetchAvailableColorFiles: () => dispatch(fetchAvailableColorFilesThunk()),
		fetchAvailableCategories: () => dispatch(fetchAvailableCategoriesThunk()),
		postElectionmap: (electionmap) => dispatch(postElectionmapThunk(electionmap)),
		postDistrictLayers: (layers) => dispatch(postDistrictLayersThunk(layers)),
		postColorFiles: (files) => dispatch(postColorFilesThunk(files)),
		postxlsxFiles: (files) => dispatch(postxlsxFileThunk(files)),
		postCategory: (category) => dispatch(postCategoryThunk(category)),
	};
};

// Type check props;
// AllPlayersContainer.propTypes = {
//   allPlayers: PropTypes.array.isRequired,
//   fetchAllPlayers: PropTypes.func.isRequired,
// };

// Export our store-connected container by default;
export default connect(mapStateToProps, mapDispatchToProps)(AddElectionMapContainer);
