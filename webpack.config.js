const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    
    entry:"./src/index.js",

    output:{
        path:resolve( __dirname,"dist"),
        filename:'index.js'
    },

    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:'/node_modules/',
                use:'babel-loader'
            },
            {
                test:/\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1000
                        }
                    }
                ]
            },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                  })
            }
        ]
    },
    devServer:{
        port:2000
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',

        }),
        new ExtractTextPlugin("styles.css")
    ]

}


