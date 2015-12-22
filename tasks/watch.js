var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var http = require('http');
var spawn = require('child_process').spawn;
var MemoryFS = require('memory-fs');

var clientConfig = require('../config/webpack.client');
var serverConfig = require('../config/webpack.server');
var compiler = webpack([serverConfig, clientConfig]);

var server;

function start() {
    console.log('Starting server');
    server = spawn('node', ['./build/server.js'], { stdio: ['ignore', process.stdout, process.stderr] });
    server.on('exit', start);
}

function run() {
    compiler.watch({}, function (err, stats) {
        if (err) {
            console.log(err.toString());
        } else {
            console.log('Server Webpack OK');
            console.log(stats.toString({
                colors: true,
                chunks: false
            }));

            if (server) {
                server.kill('SIGKILL');
            } else {
                start();
            }
        }

    });

}

module.exports = run;
