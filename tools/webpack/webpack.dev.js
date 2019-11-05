const webpack = require('webpack');
const merge = require('webpack-merge');

const { javaScriptLoader } = require('./modules/javascript');
const { cssDevLoader } = require('./modules/css');

const commonConfig = require('./webpack.common');
const devServerConfig = require('./modules/devServerConfig');

module.exports = merge(
  commonConfig,
  {
    mode: 'development',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
        },
      }),
    ],
    resolve: {
      alias: {
        // https://github.com/gaearon/react-hot-loader#react--dom
        'react-dom': '@hot-loader/react-dom',
      },
    },
    devtool: 'cheap-module-eval-source-map',
  },
  devServerConfig,
  javaScriptLoader(true),
  cssDevLoader(),
);
