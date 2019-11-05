const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { threadLoader } = require('./utils');

const javaScriptLoader = (useCache = false, async = true) => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          threadLoader('js'),
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: useCache,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async,
      checkSyntacticErrors: true,
      useTypescriptIncrementalApi: true,
    }),
  ],
});

module.exports = {
  javaScriptLoader,
};
