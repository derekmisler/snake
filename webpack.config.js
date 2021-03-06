const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: { app: path.resolve(__dirname, 'src/index.js') },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, '/')
  },
  resolve: {
    alias: {
      root: path.resolve(__dirname, ''),
      utils: path.resolve(__dirname, 'src/utils'),
      constants: path.resolve(__dirname, 'src/constants'),
      components: path.resolve(__dirname, 'src/components'),
      scss: path.resolve(__dirname, 'src/styles')
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        options: {
          emitError: false,
          emitWarning: true,
          configFile: '.eslintrc.js'
        }
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'stage-2',
              [
                'env',
                {
                  targets: { browsers: ['last 2 versions', 'safari >= 7', 'IE >= 9'] },
                  modules: false
                }
              ]
            ],
            plugins: [
              'transform-object-rest-spread',
              'transform-class-properties'
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/styles'),
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { minimize: true }
            },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' }
          ]
        })
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 1212
  },
  plugins: [
    new ExtractTextPlugin('styles.[hash].css'),
    new HtmlWebpackPlugin({
      title: 'Snake!',
      inject: true,
      minify: { collapseWhitespace: true },
      favicon: path.resolve(__dirname, 'src/favicon.ico'),
      template: path.resolve(__dirname, 'src/index.ejs'),
      description: 'Vanilla JS game of snake'
    })
  ]
}
