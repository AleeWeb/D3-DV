const path = require('path'); 

module.exports = { 
  entry: {
    smiley: './src/smiley/index.js',
    barChart: './src/barchart/index.js',
    scatterPlot: './src/scatterplot/index.js'
  }, 
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
      },
      module: {
             rules: [
              {
                 test: /\.js$/,
                 exclude: /(node_modules|bower_components)/,
                 use: {
                  loader: 'babel-loader',
                 }
               }
            ]
           }
} 
