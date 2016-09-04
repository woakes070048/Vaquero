var webpack = require('webpack');

module.exports = {
  context: __dirname,
  plugins: [
    new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      }, {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      }, {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ]
  },
  resolve: {
    moduleDirectories: ['node_modules']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './client/index'
  ],
  output: {
    path: __dirname,
    publicPath: "/build/",
    filename: "bundle.js"
  }
}
