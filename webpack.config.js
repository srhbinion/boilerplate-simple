const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    entry: {
        "bundle": "./src/Scripts/src/main.js",
    },
    //Turns off the 244k asset limit warning
    performance: {hints: false},
    devtool: 'source-map',
    output: {
        filename: 'main.[name].min.js',
        path: path.resolve(__dirname, 'dist')
    },
     optimization: {
         minimize: true,
         minimizer: [new TerserPlugin({
             sourceMap: true,
            include: /\.min\.js$/
         })]
     },
     plugins: [
        new UnminifiedWebpackPlugin()
    ]
};