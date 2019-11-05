const HtmlWebpackPlugin = require('html-webpack-plugin');

const assetsLoader = () => ({
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[contenthash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[contenthash].[ext]',
            },
          },
        ],
      },
    ],
  },
});

const htmlPlugin = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Rocket boilerplate',
      template: 'index.html',
      inject: true,
    }),
  ],
});

module.exports = {
  assetsLoader,
  htmlPlugin,
};
