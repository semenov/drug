var config = require('./webpack.config');

config.target = 'node';
config.entry = './server';
config.output.filename = 'server.js';
config.node = {
    __dirname: true
};

//config.module.loaders.find(element => {
//    return element.loader == 'babel';
//}).query.plugins = ["transform-async-to-generator"];

module.exports = config;
