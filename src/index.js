import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import registerServiceWorker from './registerServiceWorker';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import './country.css';

render (
	<Provider store={store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
