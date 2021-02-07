import React from 'react';
import { Link } from 'react-router-dom';
import './styles/AllPlayersView.css';
import './styles/CategoricalLinksView.css'
// import PropTypes from 'prop-types';

const CategoricalLinksView = (props) => {
	// console.log('CV props', props)

	if(!props.categoricalMaplinks) return <h1>Loading</h1>
  return (
    <div className='outerContainer'>
      <div className="outerLinksContainer">
        <h2>Available Maps</h2>
        <ul>
            {props.categoricalMaplinks.map((maplink) => (
              <div className= 'innerLinksContainer' key={maplink.id}>
                <li><Link className='categoricalLink' to={`/map/${maplink.id}`}>{maplink.name}</Link></li>
              </div>
            ))}
          </ul>
      </div>
    </div>
  );

};

// AllPlayersView.propTypes = {
//   allPlayers: PropTypes.array.isRequired,
// };

export default CategoricalLinksView;