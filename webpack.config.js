/* eslint no-multi-spaces: ["error", { ignoreEOLComments: true }] */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',                          // es la direccion donde se vas an a ejecutar el js, que es lo que prepara webpack
  output: {
    path: path.resolve(__dirname, 'dist'),         // se utiliza path para poder utilizar resove que funciona para saber donde se encuentra nuestro proyecto en el directorio.
    filename: 'main.js',                           /* aqui se le coloca el nombre del resultante de del enpaquetado */
    clean: true                                   // se utiliza para qeu limpie automaticamente la carpeta dist dist
  },
  resolve: {
    extensions: ['.js']                            /* para poder identificar los archivos que tiene que seguir */
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,                  // se utiliza para que le haga test a todos los archivos js y mjs, donde ? significa "o"
        exclude: /node_modules/,         // para excluir las carpetas que no queremos que modifique como los node:modules
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    })
  ]
};
