import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { postElectionmapThunk } from '../../../redux/electionmap/electionmap.actions';
//import electionmapReducer from '../../../redux/electionmap/electionmap.reducer';
import { AddElectionmapForm } from '../views/index';

// Smart container;
class ElectionmapContainer extends Component {
  componentDidMount() {

  }

  render() {
    return (
        <AddElectionmapForm 
            postElectionmap={ this.props.postElectionmap } 
            availableLayers={ this.props.availableLayers }
            availableExcelFiles={ this.props.availableExcelFiles }
            availableColorFiles={ this.props.availableColorFiles }
        />
    )
    }
}

// Map state to props;
const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    
  };
};

// Map dispatch to props;
const mapDispatchToProps = (dispatch) => {
  return {
    postElectionmap: (electionmap) => dispatch(postElectionmapThunk(electionmap)),
  };
};

// Type check props;
// AllPlayersContainer.propTypes = {
//   allPlayers: PropTypes.array.isRequired,
//   fetchAllPlayers: PropTypes.func.isRequired,
// };

// Export our store-connected container by default;
export default connect(
mapStateToProps,
  mapDispatchToProps
)(ElectionmapContainer);
