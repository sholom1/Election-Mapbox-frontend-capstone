import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCategoricalMaplinksThunk } from '../../../redux/electionmap/electionmap.actions';
import { CategoricalLinksView } from '../views';

// Smart container;
class CategoricalMaplinksContainer extends Component {

  async componentDidMount() {
    await this.props.fetchCategoricalMaplinks(this.props.match.params.category);
  }

  async componentDidUpdate (prevProps) {
    console.log('update');
    if(this.props.match.params.category !== prevProps.match.params.category) {
      console.log('equal?', this.props.match.params.category !== prevProps.match.params.category)
      console.log('prevProps', prevProps.match.params.category);
      console.log('props',this.props.match.params.category);
      await this.props.fetchCategoricalMaplinks(this.props.match.params.category);
    }
  }

  render() {
    if(this.props.categoricalMaplinks === []){
      return(<h1>Loading</h1>)
    }
     return (
      <CategoricalLinksView categoricalMaplinks={this.props.categoricalMaplinks} />
    );
  }
}

// Map state to props;
const mapStateToProps = (state) => {
  return {
    categoricalMaplinks: state.electionmaps.categoricalMaplinks,
  };
};

// Map dispatch to props;
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoricalMaplinks: (category) => dispatch(fetchCategoricalMaplinksThunk(category)),
  };
};

// Type check props;
// AllPlayersContainer.propTypes = {
//   allPlayers: PropTypes.array.isRequired,
//   fetchAllPlayers: PropTypes.func.isRequired,
// };

// Export our store-connected container by default;
export default withRouter (connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoricalMaplinksContainer));
