import webpack = require('webpack');
import path = require('path');
import webpackNodeExternals = require('webpack-node-externals');

const projectDirectory = path.resolve('./');

export const serverBaseConfig = (config: webpack.Configuration = {}): webpack.Configuration => {
	const { entry, output } = config;

	console.log(path.resolve(__dirname, '..', 'node_modules'));

	return {
		entry: entry || path.resolve(projectDirectory, 'server.ts'),

		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			modules: [path.resolve(__dirname, '..', 'node_modules')],
		},

		externals: [webpackNodeExternals()],

		mode: 'development',

		watch: true,

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
			path: path.resolve(projectDirectory, 'build'),
		},

		...config,
	};
};

export const clientBaseConfig = (config: webpack.Configuration = {}): webpack.Configuration => {
	const { entry, output } = config;

	return {
		entry: entry || path.resolve(projectDirectory, 'src', 'app.tsx'),

		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			modules: [path.resolve(__dirname, '..', 'node_modules')],
		},

		mode: 'development',

		watch: true,

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
			path: path.resolve(projectDirectory, 'build'),
		},

		...config,
	};
};

exports = [serverBaseConfig, clientBaseConfig];
