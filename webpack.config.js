const { AureliaPlugin } = require('aurelia-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

// the used webpack version runs into problems because node doesn't like its encryption algorithm
const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm === "md4" ? "sha256" : algorithm);

module.exports = {
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            resolve(__dirname, 'src'),
            resolve(__dirname, 'node_modules')
        ]
    },
    entry: {
        // the 'aurelia-bootstrapper' entry point is responsible for resolving your app code
        app: ['aurelia-bootstrapper']
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist')
    },
    mode: "development",
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.html$/i, loader: 'html-loader' },
            { test: /\.ts$/i, loader: 'ts-loader' },
        ]
    },
    plugins: [
        // the AureliaPlugin translates Aurelia's conventions to something Webpack understands
        // and must be included in order for Webpack to work
        new AureliaPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
        })
    ]
};