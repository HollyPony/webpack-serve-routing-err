const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const history = require('connect-history-api-fallback')
const convert = require('koa-connect')

module.exports = {
  mode: 'development',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ]
}

module.exports.serve = {
  add: (app, middleware, options) => {
    app.use(convert(history({})));
  }
}
