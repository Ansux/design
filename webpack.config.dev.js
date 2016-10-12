var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  debug: true,
  entry: [
    './src/index'
  ],
  output: {
    path: process.cwd(),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: "ansux",
      // template: 'html-withimg-loader!' + path.join(__dirname, 'src/index.html'),
      template: 'html-withimg-loader!' + path.resolve('./src', 'index.html'),
      filename: 'index.html',
      inject: true
    }),
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ],
  module: {
    loaders: [{
      test: require.resolve('jquery'),
      loader: 'expose?jQuery!expose?$'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
    }, {
      test: /\.(jpe?g|png|gif)$/i,
      loaders: [
        'url?limit=10000&name=images/[name].[ext]',
        'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
      ]
    }, {
      test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url?limit=10000&name=fonts/[name].[ext]'
    }]
  },
  resolve: {
    root: path.resolve(__dirname, 'node_modules'),
    extensions: ['', '.js', '.css', '.scss']
  }
}