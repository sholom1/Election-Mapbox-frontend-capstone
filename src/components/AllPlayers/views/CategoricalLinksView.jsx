import React from 'react';
import { Link } from 'react-router-dom';
import './styles/AllPlayersView.css';
// import PropTypes from 'prop-types';

const CategoricalLinksView = (props) => {
	console.log('CV props', props)

	if(!props.categoricalMaplinks) return <h1>Loading</h1>
  return (
    <div className="links">
      <ul>
      {props.categoricalMaplinks.map((maplink) => (
        <div key={maplink.id}>
          <li><Link to={`/map/${maplink.id}`}>{maplink.name}</Link></li>
        </div>
      ))}
      </ul>
    </div>
  );

};

// AllPlayersView.propTypes = {
//   allPlayers: PropTypes.array.isRequired,
// };

export default CategoricalLinksView;