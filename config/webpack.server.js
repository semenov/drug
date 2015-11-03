var config = require('./webpack.config');

config.target = 'node';
config.entry = './server';
config.output.filename = 'server.js';

module.exports = config;
