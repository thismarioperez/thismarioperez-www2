const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sassRegex = /\.(s[ac]ss)$/;
const sassModuleRegex = /\.module\.(s[ac]ss)$/;
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
                test: sassModuleRegex,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]----[hash:base64:5]'
                            }
                        }
                    },
                    'postcss-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: ['./source/styles/config/_index.scss']
                        }
                    }
                ]
            },
            // SASS Loader
            {
                test: sassRegex,
                exclude: [/node_modules/, sassModuleRegex],
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: ['./source/styles/config/_index.scss']
                        }
                    }
                ]
            }
        ]
    }
};
