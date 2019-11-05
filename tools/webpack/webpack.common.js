const path = require('path');

const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { assetsLoader, htmlPlugin } = require('./modules/assets');

module.exports = merge(
  {
    context: path.resolve(''),
    entry: [path.resolve('src/index.tsx')],
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      modules: ['node_modules', path.resolve('src')],
    },
    performance: false,
    plugins: [new CleanWebpackPlugin()],
    output: {
      filename: '[name].[hash].js',
      path: path.resolve('dist'),
      publicPath: '/',
      pathinfo: false,
      chunkFilename: '[name].[contenthash].[id].js',
    },
  },
  assetsLoader(),
  htmlPlugin(),
);
