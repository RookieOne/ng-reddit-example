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
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&minetype=application/font-woff" 
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader" 
      }
    ],
  },

  modulesDirectories: [
    'node_modules',
  ],
}