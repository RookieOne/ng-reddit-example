var path = require('path')

module.exports = {
  entry: {
    app: './src/index.ts'
  },

  output: {
      path: __dirname,
      filename: "bundle.js"
  },

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ],
  },

  modulesDirectories: [
    'node_modules',
  ],
}