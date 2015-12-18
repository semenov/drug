var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var http = require('http');
var spawn = require('child_process').spawn;
var MemoryFS = require('memory-fs');

var clientConfig = require('../config/webpack.client');
var clientCompiler = webpack(clientConfig);
var clientFs = new MemoryFS();
//clientCompiler.outputFileSystem = clientFs;

var serverConfig = require('../config/webpack.server');
var serverCompiler = webpack(serverConfig);
var serverFs = new MemoryFS();
//serverCompiler.outputFileSystem = serverFs;

var server;

function start() {
    console.log('Starting server');
    server = spawn('node', ['./build/server.js'], { stdio: ['ignore', process.stdout, process.stderr] });
}

function run() {
    serverCompiler.watch({}, function (err, stats) {
        if (err) {
            console.log(err.toString());
        } else {
            console.log('Server Webpack OK');
            console.log(stats.toString({
                colors: true,
                chunks: false
            }));

            if (server) {
                server.on('exit', start);
                server.kill('SIGKILL');
            } else {
                start();
            }
        }

    });

    var devServer = new WebpackDevServer(clientCompiler, {
        hot: false,
        proxy: {
            "*": "http://localhost:3000"
        },
        quiet: false,
        noInfo: false,
        stats: {
            colors: true,
            chunks: false
        }
    });

    devServer.listen(8080, '0.0.0.0', null, () => {
        console.info('Dev server is running at http://localhost:8080');
    });

}

module.exports = run;
