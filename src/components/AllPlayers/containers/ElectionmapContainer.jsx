import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
	fetchAvailableLayersThunk,
	fetchAvailableExcelFilesThunk,
	fetchAvailableColorFilesThunk,
	postElectionmapThunk,
	postDistrictLayersThunk,
	postColorFilesThunk,
	postxlsxFileThunk,
} from '../../../redux/electionmap/electionmap.actions';
//import electionmapReducer from '../../../redux/electionmap/electionmap.reducer';
import { AddDistrictLayersForm, AddElectionmapForm, AddColorFilesForm, AddxlsxForm } from '../views/index';

// Smart container;
class ElectionmapContainer extends Component {
	componentDidMount() {
		console.log('props', this.props);
		this.props.fetchAvailableLayers();
		this.props.fetchAvailableExcelFiles();
		this.props.fetchAvailableColorFiles();
	}

	render() {
		return (
			<div>
				<AddElectionmapForm
					postElectionmap={this.props.postElectionmap}
					availableLayers={this.props.availableLayers}
					availableExcelFiles={this.props.availableExcelFiles}
					availableColorFiles={this.props.availableColorFiles}
				/>
				<AddDistrictLayersForm postDistrictLayers={this.props.postDistrictLayers} />
				<AddColorFilesForm postColorFiles={ this.props.postColorFiles } />
				<AddxlsxForm postxlsxFiles={ this.props.postxlsxFiles } />
			</div>
		);
	}
}

// Map state to props;
const mapStateToProps = (state) => {
	return {
		availableLayers: state.electionmaps.availableLayers,
		availableExcelFiles: state.electionmaps.availableExcelFiles,
		availableColorFiles: state.electionmaps.availableColorFiles,
	};
};

// Map dispatch to props;
const mapDispatchToProps = (dispatch) => {
	return {
		fetchAvailableLayers: () => dispatch(fetchAvailableLayersThunk()),
		fetchAvailableExcelFiles: () => dispatch(fetchAvailableExcelFilesThunk()),
		fetchAvailableColorFiles: () => dispatch(fetchAvailableColorFilesThunk()),
		postElectionmap: (electionmap) => dispatch(postElectionmapThunk(electionmap)),
		postDistrictLayers: (layers) => dispatch(postDistrictLayersThunk(layers)),
		postColorFiles: (files) => dispatch(postColorFilesThunk(files)),
		postxlsxFiles: (files) => dispatch(postxlsxFileThunk(files)),
	};
};

// Type check props;
// AllPlayersContainer.propTypes = {
//   allPlayers: PropTypes.array.isRequired,
//   fetchAllPlayers: PropTypes.func.isRequired,
// };

// Export our store-connected container by default;
export default connect(mapStateToProps, mapDispatchToProps)(ElectionmapContainer);
