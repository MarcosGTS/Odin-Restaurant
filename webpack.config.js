const path = require('path');
const HtmlWebpackPuglin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'eval',
  plugins: [
    new HtmlWebpackPuglin({
      title: 'Restaurant',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpeg|jpg|svg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  }
};
