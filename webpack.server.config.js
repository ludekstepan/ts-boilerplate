const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const {resolve} = require('path');
const {getIfUtils, removeEmpty} = require('webpack-config-utils');
const nodeExternals = require('webpack-node-externals');

const {ifProduction, ifNotProduction, ifNotTest} = getIfUtils(process.env.NODE_ENV || 'development');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],

  devtool: 'source-map',

  // context: resolve('./src'),

  entry: {
    server: './src/server.js',
  },

  output: {
    filename: "[name].js",
    path: resolve('./dist/server'),
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },

      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader'
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },

  plugins: removeEmpty([
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.NamedModulesPlugin(),

    new Visualizer(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
  ]),
};
