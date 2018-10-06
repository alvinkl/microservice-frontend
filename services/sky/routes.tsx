import React = require('react');
import { Route } from 'react-router';
import { SkyMainApp } from './src/app';
import { SkySearch } from './src/Search';

export const routes = [
	<Route key="root" name="root" path="sky" component={SkyMainApp}>
		<Route key="sky-search" name="sky-search" path="search" component={SkySearch} />
	</Route>,
];
