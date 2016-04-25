const path = require('path');
const glob = require('glob');

const conf = require('./webpack.config');

conf.context = path.resolve(__dirname);
conf.entry = glob.sync('./test/**/*.ts');

conf.output = {
  path: path.resolve(__dirname, '.tmp'),
  filename: 'test.js'
};

conf.debug = true;
conf.devtool = 'source-map';

conf.module = {
  loaders: [
    { test: /\.ts$/, loader: 'webpack-espower!ts' },
    { test: /\.json$/, loader: 'json-loader' }
  ]
};

module.exports = conf;
