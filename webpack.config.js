const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.ts',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: 'awesome-typescript-loader' }],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: 'dist',
    port: 3000,
  },
  devtool: 'inline-source-map',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'build/assets',
          to: 'assets',
        },
        {
          from: 'src/assets',
          to: 'assets',
        },
      ],
    }),
    new HTMLWebpackPlugin({
      template: 'build/index.html',
      filename: 'index.html',
    }),
  ],
};
