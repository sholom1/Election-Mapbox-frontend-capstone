import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { Login, Signup, ElectionmapContainer, AddElectionMapContainer } from '../containers';
import { Home, CitywideLinksView, CityCouncilLinksView, CongressionalLinksView } from '../views';

const RoutesView = (props) => {
	const { isLoggedIn } = props;

	return (
		<Switch>
			{/* Routes placed within this section are available to all visitors */}
			<Route exact path="/" component={Home} />
			<Route exact path="/citywide" component={CitywideLinksView} />
			<Route exact path="/citycouncil" component={CityCouncilLinksView} />
			<Route exact path="/congressional" component={CongressionalLinksView} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={Signup} />
			<Route exact path="/map/:id" component={ElectionmapContainer} />

			{isLoggedIn && (
				<Switch>
					{/* Routes placed within this section are only available after
          logging in */}
					<Route exact path="/upload" component={AddElectionMapContainer} />
				</Switch>
			)}

			{/* Displays our Login component as a fallback */}
			<Route component={Login} />
		</Switch>
	);
};

export default RoutesView;
