import express = require('express');
import path = require('path');
import React = require('react');
import { renderToString } from 'react-dom/server';
import cors = require('cors');
import { AppContext } from './interface/AppContext';

// pages
import { RoomsSearch } from './src/Search';

const app = express();
const port = 8081;

app.use(cors());

// serve static file
app.get('/download/rooms', (req, res) => {
	res.sendFile(path.resolve('build/client.js'));
});

// serve HTML string
app.get(
	'*',
	async (req, res): Promise<void> => {
		// console.log(`header req url: ${req.host} ${req.hostname} ${req.headers.host}`);
		const initialProps = await RoomsSearch.getInitialProps(createAppContext(req));

		const stringify = renderToString(React.createElement(RoomsSearch, initialProps));
		const html = `
			<div id="rooms-root">${stringify}</div>
  	`;
		res.header({
			'Content-Type': 'text/html',
			Link: `<http://localhost:${port}/download/rooms>; rel="fragment-script"`,
		});

		res.send(html);

		return Promise.resolve();
	},
);

const createAppContext = (req: express.Request): AppContext => {
	return {
		url: req.url,
	};
};

app.listen(port, () => {
	console.log(`Header service is listening on port ${port}`);
});
