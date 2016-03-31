/* eslint-env node */
const path = require('path');
const glob = require('glob');

module.exports = {
  context: path.resolve(__dirname),
  entry: glob.sync('./test/**/*.ts'),
  output: {
    path: path.resolve(__dirname, '.tmp'),
    filename: 'test.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.ts', '.js', '.json']
  },
  watch: true,
  debug: true,
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'webpack-espower!ts' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }
};
