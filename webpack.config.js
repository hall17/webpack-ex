const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // mode: mode,
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