import React from 'react';
import './styles/AllPlayersView.css';
import './styles/Home.css';
// import PropTypes from 'prop-types';

const Home = () => {
	return (
		<div className="home">
			<h1 id='homeHeader'>Use the navigation bar above to view hyperlocal  results for specific elections</h1>
			<h2 id='trending'>Maps from recent elections</h2>
			{/* <img id='homeImg' src='./images/2020-President-General-Election.png' alt='2020 election map' /> */}
			<img id='homeImg' src='https://www.nycelectionmaps.com/wp-content/uploads/2020/12/Pasted-into-2020-President-General-Election.png' alt='2020 election map' />

		</div>
	);
};

export default Home;
