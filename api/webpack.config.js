const path = require('path');
const webpack = require('webpack');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (options) {
    options = options || {};

    return {
        target: 'node',
        node: {
            __dirname: false,
            __filename: false,
        },
        entry: {
            server: './src/server.ts',
        },
        devServer: {
            inline: true,
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        externals: [/(node_modules|main\..*\.js)/,],
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].js',
        },
        module: {
            exprContextCritical: false,
            rules: [{
                test: /\.ts$/,
                exclude: [new RegExp('/\spec.ts$/')],
                loader: 'ts-loader',
            },
            {
                test: /\.node$/,
                use: 'node-loader'
            },
            ]
        },
        plugins: [
            new DefinePlugin({
                PRODUCTION: options.prod,
                PORT: options.port || 3000,
            }),
            new CopyWebpackPlugin([
                {
                    from: options.prod ? './config/config.prod.json' : './config/config.dev.json',
                    to: './config.json',
                    toType: 'file'
                },
            ])
        ],
        externals: {
            'sharp': 'commonjs sharp'
        }
    }
}