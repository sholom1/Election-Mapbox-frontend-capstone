import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMapThunk } from '../../../redux/electionmap/electionmap.actions';
import { withRouter } from 'react-router-dom';

// Smart container;
class ElectionmapContainer extends Component {
	componentDidMount() {
		console.log('props', this.props);
		this.props.fetchMap(this.props.match.params.id);
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [this.props.lng, this.props.lat],
			zoom: this.props.zoom,
		});
	}

	render() {
		return (
			<div>
				<div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
			</div>
		);
	}
}

// Map state to props;
const mapStateToProps = (state) => {
	return {
		mapId: state.electionmaps.mapId,
		mapData: state.electionmaps.mapData,
		lng: -73.952319,
		lat: 40.631056,
		zoom: 9.91,
	};
};

// Map dispatch to props;
const mapDispatchToProps = (dispatch) => {
	return {
		fetchMap: (id) => dispatch(fetchMapThunk(id)),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ElectionmapContainer));
