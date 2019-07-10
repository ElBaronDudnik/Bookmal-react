const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
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
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|gif|svg|jpe?g)$/i,
                use: [
                    {
                        loader: 'file-loader', // images loader
                        options: {
                            name: '[name].[ext]', // this will keep the original name and extension
                        }
                    },
                    {
                        loader: 'image-webpack-loader', // image compression => contains loaders for different types of images
                        options: {
                            gifsicle: { // gif loader
                                interlanced: false
                            },
                            optipng: { // png loader
                                optimizationLevel: 7
                            },
                            pngquant: { // png loader
                                quality: '65-90',
                                speed: 4
                            },
                            mozjpeg: { // jpg loader
                                progressive: true,
                                quality: 65
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        })
    ]
};