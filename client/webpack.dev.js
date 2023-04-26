const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    watchOptions:{
        ignored: /node_modules/
    },
    devServer:{
        port: 3000,
        static:{
            directory: path.join(__dirname, '../dist')
        }
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', {
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
    }
})