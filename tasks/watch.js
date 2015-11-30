var webpack = require('webpack');

var clientConfig = require('../config/webpack.client');
var clientCompiler = webpack(clientConfig);

var serverConfig = require('../config/webpack.server');
var serverCompiler = webpack(serverConfig);
function run() {

    clientCompiler.watch({}, function (err, stats) {
        if (err) {
            console.log(err.toString());
        } else {
            console.log('Client Webpack OK');
            console.log(stats.toString({
                colors: true,
                chunks: false
            }));
        }

    });

    serverCompiler.watch({}, function (err, stats) {
        if (err) {
            console.log(err.toString());
        } else {
            console.log('Server Webpack OK');
            console.log(stats.toString({
                colors: true,
                chunks: false
            }));
        }

    });

}

module.exports = run;
