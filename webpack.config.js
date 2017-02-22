const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = { 
  entry: ['./src/style.css',
          './src/index.js',
        ], 
  output: { 
    path: path.resolve('dist'), 
    filename: 'index_bundle.js'
  }, 

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
        ]
      },
    ]
  }, 
  plugins: [HtmlWebpackPluginConfig]
}