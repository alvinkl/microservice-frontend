import webpack = require('webpack');
import path = require('path');

export const serverBaseConfig = (config: webpack.Configuration = {}): webpack.Configuration => {
	const { entry, output } = config;

	return {
		entry: entry || path.resolve(__dirname, 'server.ts'),

		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
		},

		mode: 'development',

		watch: process.env.NODE_ENV !== 'production',

		module: {
			rules: [
				{
					test: /\.tsx?/,
					loader: 'ts-loader',
				},
			],
		},

		target: 'node',

		output: output || {
			filename: 'server.js',
			path: path.resolve(__dirname, 'build'),
		},
	};
};

export const clientBaseConfig = (config: webpack.Configuration = {}): webpack.Configuration => {
	const { entry, output } = config;

	return {
		entry: entry || path.resolve(__dirname, 'src', 'app.tsx'),

		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
		},

		mode: 'development',

		watch: process.env.NODE_ENV !== 'production',

		module: {
			rules: [
				{
					test: /\.tsx?/,
					loader: 'ts-loader',
				},
			],
		},

		output: output || {
			filename: 'client.js',
			path: path.resolve(__dirname, 'build'),
		},
	};
};

exports = [serverBaseConfig, clientBaseConfig];
