const path = require("path");
const minicssextractplugin = require("mini-css-extract-plugin");

module.exports = {
    output: {
        path: path.join(__dirname,"/dist"),
        publicPath:"/",
        filename: "index.bundle.js",
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,


    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    minicssextractplugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [new minicssextractplugin()]
};