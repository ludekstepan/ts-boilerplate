const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');
const {getIfUtils, removeEmpty} = require('webpack-config-utils');

const {ifProduction, ifNotProduction, ifNotTest} = getIfUtils(process.env.NODE_ENV || 'development');

const vendors = [
  'react-dom',
  'react',
  'redux',
  'react-redux',
];

module.exports = {
  devtool: 'source-map',

  // context: resolve('./src'),

  entry: {
    app: './src/app.js',
    vendor: vendors,
  },

  output: {
    filename: "[name].js",
    path: resolve('./dist'),
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
    new HtmlWebpackPlugin({
      template: resolve('./src/index.html'),
      inject: 'body',
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js'}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    ifNotProduction(new webpack.NamedModulesPlugin()),

    ifProduction(new webpack.optimize.DedupePlugin()),
    ifProduction(new webpack.optimize.OccurrenceOrderPlugin(true)),
    ifProduction(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: true
    })),
  ]),
};
