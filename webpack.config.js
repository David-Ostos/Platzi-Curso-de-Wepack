/* eslint no-multi-spaces: ["error", { ignoreEOLComments: true }] */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',                                         // es la direccion donde se vas an a ejecutar el js, que es lo que prepara webpack
  output: {
    path: path.resolve(__dirname, 'dist'),                      // se utiliza path para poder utilizar resove que funciona para saber donde se encuentra nuestro proyecto en el directorio.
    filename: '[name].[contenthash].js',                                      /* aqui se le coloca el nombre del resultante de del enpaquetado */
    assetModuleFilename: 'assets/images/[hash][ext][query]',
    clean: true                                              // se utiliza para qeu limpie automaticamente la carpeta dist dist
  },
  resolve: {
    extensions: ['.js'],                                      /* para poder identificar los archivos que tiene que seguir */
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@templates': path.resolve(__dirname, 'src/templates/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts/')
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,                  // se utiliza para que le haga test a todos los archivos js y mjs, donde ? significa "o"
        exclude: /node_modules/,         // para excluir las carpetas que no queremos que modifique como los node:modules
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css|.scss$/i,
        use: [MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.png/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[contenthash][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets/images'),
          to: 'assets/images'
        }
      ]
    })
  ],
  optimization: {                             // aqui se crea la estructura para la automatizacion
    minimize: true,                          // se le indica que si se va a optimizar
    minimizer: [                             // se le identifica que metodos se van a utilizar
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  }
};
