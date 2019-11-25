const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssnano = require('cssnano');
const { cacheLoader, threadLoader } = require('./utils');
const config = require('../../../postcss.config.js');

const cssLoader = ({ sourceMap = false } = { sourceMap: false }) => ({
  loader: 'css-loader',
  options: {
    modules: false,
    importLoaders: 1,
    sourceMap,
  },
});

const postCssLoader = ({ sourceMap, minimize } = { sourceMap: false, minimize: false }) => {
  const plugins = [...config.plugins];

  if (minimize) {
    plugins.push(cssnano({ preset: ['default', { normalizeUrl: false }] }));
  }

  return {
    loader: 'postcss-loader',
    options: {
      sourceMap,
      plugins: () => [...plugins],
    },
  };
};

const cssDevLoader = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          cacheLoader('css'),
          threadLoader('css'),
          'style-loader',
          cssLoader({ sourceMap: true }),
          postCssLoader({ sourceMap: true, minimize: false }),
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
        use: [
          MiniCssExtractPlugin.loader,
          threadLoader('css'),
          cssLoader({ sourceMap: false }),
          postCssLoader({ sourceMap: false, minimize: true }),
        ],
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
