const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
require('babel-polyfill');
module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: path.join('js', 'bundle.js')
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
              },
            {
                test: /\.js?$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        [
                            "@babel/plugin-proposal-class-properties",
                            { "loose": true }
                        ]
                    ]
                }
            }
        ]
    },

    resolve: {
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: path.join('style', '[name].css'),
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    devServer: {
        port: 3300,
        hot: true,
        open: false,
        proxy: {
            '/api': {
                target: 'http://localhost:9090',
                pathRewrite: { '^/api' : '' },
                secure: false,
                changeOrigin: true
            }
        }
    }
};