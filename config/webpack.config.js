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
                    presets: ['react', 'stage-0', 'es2015'],
                    cacheDirectory: true
                }
            }
        ]
    }
};

