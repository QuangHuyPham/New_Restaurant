const path = require('path');

const outputDirectory = 'public';

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [/node_modules/, /public/]
    },
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader',
        exclude: [/node_modules/, /public/]
    },
    {
        test: /\.gif$/,
        loader: 'url-loader?limit=10000&mimetype=image/gif'
    },
    {
        test: /\.jpg$/,
        loader: 'url-loader?limit=10000&mimetype=image/jpg'
    },
    {
        test: /\.png$/,
        loader: 'url-loader?limit=10000&mimetype=image/png'
    },
    {
        test: /\.svg/,
        loader: 'url-loader?limit=26000&mimetype=image/svg+xml'
    },
    {
        test: /\.jsx$/,
        loader: 'react-hot!babel',
        exclude: [/node_modules/, /public/]
    },
    {
        test: /\.json$/,
        loader: 'json-loader'
    }
    ]
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
};
