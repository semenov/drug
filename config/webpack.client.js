var config = require('./webpack.config');
var clone = require('clone');

config = clone(config);

config.entry = [
    './app',
    'webpack-dev-server/client?http://localhost:8080'
];

module.exports = config;
