const styleRules = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const fileRules = {
  test: /\.(gif|png|jpeg|jpg|svg)$/,
  use: ['file-loader', 'image-webpack-loader'],
};

const rules = [styleRules, fileRules];

module.exports = {
  // entry: './src/index.js'
  output: {
    filename: 'bundle.js',
  },
  module: { rules },
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 9000,
  },
};
