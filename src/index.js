import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import mapboxgl from 'mapbox-gl';
import './index.css';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// React-Router
import { BrowserRouter } from 'react-router-dom';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hvbG9tMSIsImEiOiJjazdtNXkxb2UwZXAzM2tvbTlzempjcGV1In0.zAVBsEkEYNpTAfw20fw2GA';
console.log(process.env.REACT_APP_KEY);
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
