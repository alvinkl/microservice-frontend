import { serverBaseConfig, clientBaseConfig } from '../../configs/webpack.base.config';
import webpack = require('webpack');
import path = require('path');

const client_config: webpack.Configuration = {
	entry: './index.ts',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'vendor.build.js',
		libraryTarget: 'umd',
	},
};

module.exports = [serverBaseConfig(), clientBaseConfig(client_config)];
