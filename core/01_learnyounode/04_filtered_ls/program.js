// Cargamos el módulo que contiene las funciones necesarias para la entrada/salida.
var fs = require('fs');
// Cargamos el módulo que contiene funciones necesarias para la gestión de los
// paths, como por ejemplo, extraer la extensión a partir del path completo de un
// fichero.
var path = require('path');
// Si el usuario ha especificado una extensión, la procesamos.
var extension = null;
if (process.argv.length > 3) {
    extension = '.' + process.argv[3];
}
// Leemos el fichero. El path al mismo se lo pasamos al programa como parametro
// del programa.
// La función readFileSync retorna un buffer que contiene el fichero.
fs.readdir(process.argv[2], function (err, list) {
    // Recorremos la lista de ficheros.
    for (var i = 0; i < list.length; i++) {
        // Recuperamos el path al fichero actual.
        var currentFile = list[i];
        // Extraemos la extensión del fichero actual.
        var currentExtension = path.extname(currentFile);
        // verificamos que coinciden las extensiones.
        if (currentExtension === extension || extension === null) {
            // Mostramos por pantalla el fichero actual que estamos procesando.
            console.log(currentFile);
        }
    }
});
