const path = require('path');

module.exports = {
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
  entry: './tryBabel/src/Worker.js',
  output: {
    path: path.resolve(__dirname, 'tryBabel/dist'),
    filename: 'bundle.js'
  }
};