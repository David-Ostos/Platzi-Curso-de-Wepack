/* eslint no-multi-spaces: ["error", { ignoreEOLComments: true }] */

const path = require('path');

module.exports = {
  entry: './src/index.js',                          // es la direccion donde se vas an a ejecutar el js, que es lo que prepara webpack
  output: {
    path: path.resolve(__dirname, 'dist'),         // se utiliza path para poder utilizar resove que funciona para saber donde se encuentra nuestro proyecto en el directorio.
    filename: 'main.js',                           /* aqui se le coloca el nombre del resultante de del enpaquetado */
    clean: true                                   // se utiliza para qeu limpie automaticamente la carpeta dist dist
  },
  resolve: {

    extensions: ['.js']                            /* para poder identificar los archivos que tiene que seguir */
  }
};
