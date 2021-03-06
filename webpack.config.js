/* eslint-disable */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProd = process.argv.slice(-1)[0] === 'production';

const outPath = path.resolve(__dirname, 'public/dist');
const publicPath = '/dist/';

const common = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    },

    resolve: {
        alias: { app: path.resolve(__dirname, 'app') },
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            }),
        ],
    },
};

const configs = {
    client: {
        entry: ['babel-polyfill', './app/components'],
        output: {
            publicPath,
            path: outPath,
            filename: 'client.js',
        },
        devtool: isProd ? 'source-map' : 'eval-source-map',
    },

    server: {
        target: 'node',
        entry: ['babel-polyfill', './app/server'],
        output: {
            path: outPath,
            publicPath,
            filename: 'server.js',
            libraryTarget: 'commonjs2'
        },
        devtool: false,
        node: { __dirname: true },
        externals: [ nodeExternals() ],
    },
};

module.exports = [
    Object.assign({}, common, configs.client),
    Object.assign({}, common, configs.server),
];

