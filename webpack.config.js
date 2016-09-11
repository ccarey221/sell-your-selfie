module.exports = {
  // entry point needs to be entry.jsx
  entry: './client/entry.jsx',
  // webpack output to client/dist/bundle.js
  output: {
    path: './client/',
    publicPath: './client/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        // regular expression for .jsx or .js
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules',
      },
    ],
  },
};
