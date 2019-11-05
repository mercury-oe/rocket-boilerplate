const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { cacheLoader, threadLoader } = require('./utils');

const cssLoader = ({ sourceMap = false } = { sourceMap: false }) => ({
  loader: 'css-loader',
  options: {
    modules: false,
    importLoaders: 1,
    localIdentName: '[path][name]--[hash:base64:8]',
    sourceMap,
  },
});

const cssDevLoader = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          cacheLoader('css'),
          threadLoader('css'),
          'style-loader',
          cssLoader({ sourceMap: true }),
        ],
      },
    ],
  },
});

const cssProdLoader = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, threadLoader('css'), cssLoader({ sourceMap: false })],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].[id].css',
    }),
  ],
});

module.exports = {
  cssDevLoader,
  cssProdLoader,
};
