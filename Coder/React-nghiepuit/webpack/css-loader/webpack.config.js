const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                user: ExtractTextPlugin.extract({
                    use: "css-loader",
                    fallback: "style-loader"
                }),
                test: /\.css$/
            },
            plugin: [
                new ExtractTextPlugin('style.css')
            ]
        ]
    }
}

module.exports = config;