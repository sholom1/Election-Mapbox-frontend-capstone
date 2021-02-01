import React from 'react';
import './styles/AllPlayersView.css';
import './styles/Home.css';
// import PropTypes from 'prop-types';

const Home = () => {
	return (
		<div className="home">
			<h1 id='homeHeader'>Use the navigation bar above to view hyperlocal  results for specific elections</h1>
			<img id='homeImg' src='./images/bigPic2.jpeg' alt='map of NYC' />
		</div>
	);
};

export default Home;
