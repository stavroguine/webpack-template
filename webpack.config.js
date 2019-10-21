const webpack = require("webpack");
const path = require("path");

let config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            loader: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./public"),
        host: '10.3.253.252',
        port: '8080',
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true
    },
    devtool: "eval-source-map",
    mode: 'development'
}

module.exports = config;