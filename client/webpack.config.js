// @flow
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: NODE_ENV !== 'production' ? 'source-map' : false,
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.webpack_cache'),
  },
  entry: [
    path.resolve(__dirname, 'entry.jsx'),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  optimization: {
    moduleIds: NODE_ENV !== 'production' ? 'named' : 'deterministic',
    minimize: NODE_ENV === 'production',
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 1,
          name: 'vendor',
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      API_HOST: `'${process.env.API_HOST || ''}'`,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CleanWebpackPlugin(),
    new ProgressBarPlugin({
      width: 50,
      summaryContent: true,
      format: `  build [:bar] ${chalk.green.bold(':percent')} [:current/:total] (:elapsed seconds)`,
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'static/index.html'),
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    hot: true,
    contentBase: [
      path.resolve(__dirname, 'static'),
    ],
    publicPath: '/',
    compress: true,
    port: 9487,
    filename: 'bundle.js',
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            hash: 'sha512',
            digest: 'hex',
            name: '[hash].[ext]',
          },
        }],
        include: /static/,
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  resolve: {
    mainFields: [
      'browser',
      'main',
      'module',
    ],
    extensions: [
      '.jsx',
      '.js',
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};
