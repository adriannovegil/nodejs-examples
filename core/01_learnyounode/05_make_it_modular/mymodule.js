module.exports = function (directory, extension, callback) {
    // Cargamos el módulo que contiene las funciones necesarias para la entrada/salida.
    var fs = require('fs');
    // Cargamos el módulo que contiene funciones necesarias para la gestión de los
    // paths, como por ejemplo, extraer la extensión a partir del path completo de un
    // fichero.
    var path = require('path');
    // Verificamos si el usuario ha indicado o no una extensión.
    if (typeof extension !== 'undefined' && extension !== null) {
        // Detectamos si la extensión que ha especificado el usuario cuenta con un
        // punto. Si es así dejamos la extension como esta. En caso contrario, le
        // anhadimos el punto de rigor. Esto evita un problema en la validación del
        // ejemplo usando el comando:
        //  $ learnyounode verify program.js
        if (!(extension.indexOf(".") > -1)) {
            extension = '.' + extension;
        }
    } else {
        // Si el usuario no ha especificado una extensión, definimos el valor de
        // la variable a null con lo que se tendrán en cuenta todos los ficheros
        // listados.
        extension = null;
    }
    // Array en el que almacenaremos la lista de los ficheros del directorio
    // que cumplen el criterio.
    var elements = [];
    // Leemos el fichero. El path al mismo se lo pasamos al programa como parametro
    // del programa.
    // La función readFileSync retorna un buffer que contiene el fichero.
    fs.readdir(directory, function (err, list) {
        // Verificamos si se ha producido algun error en la lectura del directorio.
        if (err) {
            // En caso de error, llamammos a la función de callback indicando
            // error.
            return callback(err, null);
        } else {
            // Filtramos la lista de resultados obtenidos.
            elements = list.filter(function (file) {
                // Filtramos por extensión.

                return path.extname(file) === extension || extension === null;
            });
            // Invocamos la función de callback pasandole la lista de datos que
            // hemos procesado.
            return callback(null, elements);
        }
    });
};
