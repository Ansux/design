var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    vendor: ['jquery', 'bootstrap', 'angular'],
    bundle: './src/entry'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity //Infinity
    }),
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title: 'ansux',
      template: 'html-withimg-loader!'+path.resolve('./src', 'index.html'),
      filename: 'index.html',
      inject: 'body',
      hash: false, //为静态资源生成hash值
      minify: { //压缩HTML文件
        removeComments: false, //移除HTML中的注释
        collapseWhitespace: true //删除空白符与换行符
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json'
    },{
      test: /\.js$/,
      loader: 'babel',
      exclude: '/node_modules'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
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
    extensions: ['', '.js', '.html', '.scss']
  }
};