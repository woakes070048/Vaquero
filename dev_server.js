var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config');

var bundler = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  proxy: {
    "*": "http://localhost:5000"
  }
});

bundler.listen(8080, 'localhost');
