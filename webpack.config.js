var path = require('path');

module.exports = function (env) {
  var outputDirectory = (env && env.dev) ? 'dist.dev' : 'dist';

  return {
    entry: {
      'vue-gantt': './src/index.ts',
      'vue-gantt-demo': './demo/index.ts'
    },
    output: {
      path: path.resolve(__dirname, './' + outputDirectory),
      publicPath: outputDirectory,
      filename: '[name].bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        'vue': 'vue/dist/vue.common.js'
      }
    },
    module: {
      rules: [
        {test: /\.tsx?$/, loader: 'ts-loader'},
        {
          test: /\.scss$/,
          use: [{
            loader: "style-loader" // creates style nodes from JS strings
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }]
        }
      ]
    },
    devtool: (env && env.dev) ? 'source-map' : undefined,
    devServer: {
      contentBase: 'demo',
      open: true,
      port: 9000
    }
  }
};
