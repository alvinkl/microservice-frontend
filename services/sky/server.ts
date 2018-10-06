import express = require('express');
import path = require('path');
import React = require('react');
import { renderToString } from 'react-dom/server';

// pages
import { SkySearch } from './src/search';

const app = express();
const port = 8082;

// serve static file
app.get('/download/sky', (req, res) => {
	res.sendFile(path.resolve('build/client.bundle.js'));
});

// serve HTML string
app.get('*', (req, res) => {
	console.log(`header req url: ${req.url}`);

	const stringify = renderToString(React.createElement(SkySearch));
	const html = `
    <div id="fragment-sky-root">${stringify}</div>
  `;
	res.header({
		'Content-Type': 'text/html',
		Link: `<http://localhost:${port}/download/sky>; rel="fragment-script"`,
	});

	res.send(html);
});

app.listen(port, () => {
	console.log(`Header service is listening on port ${port}`);
});
