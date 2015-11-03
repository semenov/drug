var webpack = require('webpack');
var type = process.argv[2];
var configName = '../config/webpack.' + type;
var config = require(configName);
var compiler = webpack(config);

compiler.run(function(err, stats) {
    if (err) {
        console.log(err);
    } else {
        console.log('Webpack OK');
    }

});
