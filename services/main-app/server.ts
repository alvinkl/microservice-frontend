import path = require('path');
import express = require('express');
import Tailor = require('node-tailor');

const app = express();
const port = 8080;
const tailor = new Tailor({
	templatesPath: path.resolve(__dirname, 'templates/index.html'),
	// fetchContext: (request) => {
	// 	// console.log('request', request)
	// 	return Promise.resolve({});
	// },
});

app.get('*', tailor.requestHandler);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
