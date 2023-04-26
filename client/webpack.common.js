const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');



module.exports = {
    entry: {
        'index': './src/index.js',
        'about': './src/about.js',
        'contact': './src/contact.js',
        'galleries': './src/galleries.js',
        'merci': './src/merci.js',
        'singleGallery': './src/singleGallery.js',
    },//end entry object
    output:{
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name]-[contenthash].js',
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },
    module:{
        rules:[
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                type: "asset/resource",
            },// end of img rules
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                type: "javascript/auto",
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name: '[name]-[contenthash].[ext]',
                            outputPath: 'fonts'
                        }
                    }
                ]
            },// end of fonts
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: 'babel-loader',
                        options:{
                            presets:['@babel/preset-env']
                        }
                    }
                ]
            }
        ]// end of rules
    },//end of module
    plugins: [
        new CopyPlugin({
            patterns: [ { from: './src/images', to: 'images' }]
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: 'src/html/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: 'src/html/about.html',
            filename: 'about.html',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            template: 'src/html/contact.html',
            filename: 'contact.html',
            chunks: ['contact']
        }),
        new HtmlWebpackPlugin({
            template: 'src/html/galleries.html',
            filename: 'galleries.html',
            chunks: ['galleries']
        }),
        new HtmlWebpackPlugin({
            template: 'src/html/singleGallery.html',
            filename: 'singleGallery.html',
            chunks: ['singleGallery']
        }),
        new HtmlWebpackPlugin({
            template: 'src/html/merci.html',
            filename: 'merci.html',
            chunks: ['merci']
        }),

    ],//end plugins array
    
}