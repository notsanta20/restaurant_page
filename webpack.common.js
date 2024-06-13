const path = require("path");
const HtmlWebpackPlugin = require("html-Webpack-Plugin");

module.exports = {
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
    })],
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};