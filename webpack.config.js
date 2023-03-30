const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode,
    target,
    devtool,
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        clean: true,
        filename: 'index.[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'article.html'),
            filename: 'article.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'about.html'),
            filename: 'about.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'tags.html'),
            filename: 'tags.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'index.[contenthash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }],
                        ],
                    },
                },
                test1: /\.(c|sa|sc)ss$/i,
                use2: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};
