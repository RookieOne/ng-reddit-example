var path = require('path')

module.exports = {
  entry: {
    app: './src/index.js'
  },

  output: {
      path: __dirname,
      filename: "bundle.js"
  },

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.ts', '.tsx', '.js', '.css', '.scss']
  },

  module: {
    loaders: [
      { 
        test: /\.tsx?$/, 
        loader: 'ts-loader' 
      },
      { 
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
    ],
  },

  modulesDirectories: [
    'node_modules',
  ],
}