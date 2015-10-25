module.exports = {
  devtool: 'sourcemap',
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/node_modules/], loader: 'babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.scss$/, loader: 'style!css!sass' },
       { test: /\.css$/, loader: 'style!css' }
    ]
  }
};
