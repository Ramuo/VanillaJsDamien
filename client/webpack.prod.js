const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssminimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin')


module.exports = merge(common, {
    mode: 'production',
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    }
                    , 'css-loader', {
                    loader: 'postcss-loader',
                    options:{
                        postcssOptions:{
                            plugins:[
                                require('autoprefixer')()
                            ]
                        }
                    }
                }
            ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash].css'
        })
    ],
    optimization:{
        minimize: true,
        minimizer:[
            new CssminimizerPlugin(),
            new TerserWebpackPlugin({
                parallel: true,
            })
        ],
        splitChunks:{
            chunks: 'all'
        }
    }
    
})