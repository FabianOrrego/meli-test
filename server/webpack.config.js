const path = require('path');
const webpack = require('webpack');

require('dotenv').config();

const isDev = (process.env.ENV === 'development');
const entry = ['server.js'];

module.exports = {
	entry,
	mode: process.env.ENV,
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'assets/app.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js'],
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				}
			}
		]
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [],
};