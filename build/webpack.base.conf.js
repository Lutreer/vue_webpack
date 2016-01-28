var path = require('path')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue','.css'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
       "zepto": "../src/assets/js/zepto.min.js",  // var $ = require('zepto')
       "sui": "../src/assets/js/sui.min.js"  //require('sui')
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        //loader: 'babel!eslint',
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      /*{
        test: /\.css$/,
        //样式文件单独提取出来
        loader: ExtractTextPlugin.extract("vue-style-loader", "css-loader")
      }*/
      { test: /zepto(\.min)?\.js$/, loader: "exports?Zepto;" },
      //{ test: /sui(\.min)?\.js$/, loader: "exports?sui;" },
    ],
    noParse: ["../src/assets/js/sui.min.js","../src/assets/js/zepto.min.js"]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
