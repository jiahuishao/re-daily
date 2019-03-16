const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        mainNavList:__dirname + "/js/mainNavList.js",
        mainNoteBook:__dirname + "/js/mainNoteBook.js",
        mainShop:__dirname + "/js/mainShop.js",
        mainArticleFilter:__dirname + "/js/mainArticleFilter.js",
        mainSelectTrueAnswer:__dirname + "/js/mainSelectTrueAnswer.js",
        mainStoreGame:__dirname + "/js/mainStoreGame.js",
        mainSinglePage:__dirname + "/js/mainSinglePage.js",
        mainAnimatePratice:__dirname + "/js/mainAnimatePratice.js",
    },
    output: {                           //出口文件
        path: __dirname + "/app",
        filename: "[name].js"
    },
    module: {                           //依赖
        rules: [
            {
                test: /\.js?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015"]
                    }
                },
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                }
            },
            {
                test:/\.css$/,
                use: [
                    {
                        loader:"style-loader",
                    },{
                        loader: "css-loader",
                    }
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test:/\.(png|jpg|jpeg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name:'image/[name].[hash].[ext]',
                        pulbicPath:'./'
                    }
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$':'vue/dist/vue.js',
            'jquery':'jquery/dist/jquery.min.js'
        }
    },
    devServer: {
        contentBase:'./app',
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}