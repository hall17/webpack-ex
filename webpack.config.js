const path = require('path');

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    mode: mode,
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        }
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]

    }
}