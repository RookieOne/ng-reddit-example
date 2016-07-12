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
      {
        test: /\.html$/,
        loaders: ['html']
      }
    ],
  },

  modulesDirectories: [
    'node_modules',
  ],
}