import React, { Component } from 'react';
import RoutesView from './RoutesView';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { me } from '../../../redux/user/user.actions';
import Navbar from '../navigation/Navbar';

class RoutesContainer extends Component {
	componentDidMount() {
		this.props.loadInitialData();
	}
	render() {
		return (
			<div>
				<Navbar />
				<RoutesView isLoggedIn={this.props.isLoggedIn} />
			</div>
		);
	}
}

const mapState = (state) => {
	// console.log('state', state);
	return {
		// isLoggedIn: state.user !== undefined ? !!state.user.id : false
		isLoggedIn: !!state.user.id,
	};
};

const mapDispatch = (dispatch) => {
	return {
		loadInitialData: () => dispatch(me()),
	};
};

export default withRouter(connect(mapState, mapDispatch)(RoutesContainer));
