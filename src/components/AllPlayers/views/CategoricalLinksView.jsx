import React from 'react';
import { Link } from 'react-router-dom';
import './styles/AllPlayersView.css';
import './styles/CategoricalLinksView.css'
// import PropTypes from 'prop-types';

const CategoricalLinksView = (props) => {
	console.log('CV props', props)

	if(!props.categoricalMaplinks) return <h1>Loading</h1>
  return (
    <div className="links">
      <div className='innerLinksContainer'>
        {props.categoricalMaplinks.map((maplink) => (
          <div className= 'linksContainer' key={maplink.id}>
            <p><Link className='categoricalLink' to={`/map/${maplink.id}`}>{maplink.name}</Link></p>
          </div>
        ))}
      </div>
    </div>
  );

};

// AllPlayersView.propTypes = {
//   allPlayers: PropTypes.array.isRequired,
// };

export default CategoricalLinksView;