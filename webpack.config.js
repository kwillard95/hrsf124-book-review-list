const path = require('path');

module.exports = {
    mode: 'development',
    entry: './client/index.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
    },
    module:{
        rules: [
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            }
        ]
    }
};