var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                    optional: ['runtime'],
                    stage: 0,
                    cacheDirectory: true
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
                )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true })
    ]
};

