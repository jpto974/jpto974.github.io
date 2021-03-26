const path = require('path')

module.exports = {

    mode: 'development',
    entry: './js/app.js',
    output:{

        filename: 'app.js',
        path: path.resolve(__dirname, 'js/bundle')

    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    }

}