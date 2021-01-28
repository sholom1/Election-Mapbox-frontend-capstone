import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMapThunk } from '../../../redux/electionmap/electionmap.actions';

// Smart container;
class ElectionmapContainer extends Component {
	componentDidMount() {
		console.log('props', this.props);
		this.props.fetchMap(this.props.mapId);
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
		lng: 5,
		lat: 34,
		zoom: 2,
	};
};

// Map dispatch to props;
const mapDispatchToProps = (dispatch) => {
	return {
		fetchMap: (id) => dispatch(fetchMapThunk(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ElectionmapContainer);
