const path = require("node:path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'main.js'
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
    })
    ]
}