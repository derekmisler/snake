const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

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
      utils: path.resolve(__dirname, 'src/utils'),
      constants: path.resolve(__dirname, 'src/constants'),
      components: path.resolve(__dirname, 'src/components'),
      scss: path.resolve(__dirname, 'src/assets/scss'),
      img: path.resolve(__dirname, 'src/assets/img')
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
        include: path.resolve(__dirname, 'src/assets/scss'),
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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, 'src/assets/img'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[path][name].[hash].[ext]",
            },
          },
          {
            loader: 'url-loader',
            options: { limit: 8192 }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 1212
  },
  plugins: [
    new CleanWebpackPlugin(),
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
