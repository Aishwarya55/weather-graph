const HtmlWebPackPlugin = require("html-webpack-plugin")
var path = require('path')
module.exports = {
    module:{
        rules:[
                {
                      test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [new HtmlWebPackPlugin({
        template:"./index.html",
        filename:"./index.html"
    })]
};