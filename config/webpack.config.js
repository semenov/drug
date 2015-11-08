module.exports = {
    bail: true,
    context: __dirname + "/..",
    output: {
        path: __dirname + "/../build",
        filename: "bundle.js"
    },
    debug: true,
    devtool: 'cheap-source-map',
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                    cacheDirectory: true
                }
            }
        ]
    }
};

