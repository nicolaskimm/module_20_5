import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component';
import DevTools from './DevTools';
import Home from './presentational/home.component';
import Contact from './presentational/contact.components';
import NotFound from './presentational/not-found.component';


export default (
	<Route path='/' component={Navigation}>
		<IndexRoute component={Home} />
		<Route path='contact' component={Contact} />
		<DevTools />
		<Route path='*' component={NotFound} />
	</Route>
);