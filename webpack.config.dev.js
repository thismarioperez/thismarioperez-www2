const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = 'development';

process.env.NODE_ENV = mode;

module.exports = {
    mode,
    target: 'web',
    devtool: 'cheap-module-source-map',
    entry: './source/index',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        stats: 'minimal',
        overlay: true,
        historyApiFallback: true,
        disableHostCheck: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        https: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'source/index.html',
            favicon: 'source/favicon.ico'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(s[ac]ss)$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    }
};
