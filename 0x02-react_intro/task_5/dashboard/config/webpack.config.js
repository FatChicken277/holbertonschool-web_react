const path = require('path');

const scriptRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-react'],
  },
};

const styleRules = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const fileRules = {
  test: /\.(gif|png|jpeg|jpg|svg)$/,
  use: ['file-loader', 'image-webpack-loader'],
};

const rules = [scriptRules, styleRules, fileRules];

module.exports = {
	context: path.resolve(__dirname, '../src'),
	entry: './index.js',
  output: {
    filename: "bundle.js",
  },
  module: { rules },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    open: true,
    compress: true,
  },
};
