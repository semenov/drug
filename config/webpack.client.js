var config = require('./webpack.config');
var clone = require('clone');

config = clone(config);

config.entry = './app';

module.exports = config;
