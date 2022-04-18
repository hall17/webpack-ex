const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // mode: mode,
    output: {
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        hot: true,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset',
                // parser: {
                //     dataUrlCondition: {
                //         maxSize: 30 * 1024, // normal size is 8kb
                //     }
                // }
            },
            {
                test: /\.(css|scss|sass)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]

    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
}