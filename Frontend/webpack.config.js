const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
          },
        },

      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [require('precss'), require('autoprefixer')];
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: function () {
                    return [require('precss'), require('autoprefixer')];
                  }
                }
              },
              'sass-loader'
            ]
          })
        )
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader']
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot|jpg|png|jpeg|psd|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets',
            jsx: true
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    port: 3000
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
  ]
};