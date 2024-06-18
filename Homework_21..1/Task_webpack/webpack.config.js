const path = require("node:path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'main.js'
    },
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'build')
        },
        host: 'localhost',
        port: '5050',
        open: true,
        client: {
            overlay: true,
        },
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
    new MiniCssExtractPlugin({
        filename: 'index.css'
    }),
    new HtmlWebpackPlugin({
        template: './src/index.html'
        }),
    ]
}