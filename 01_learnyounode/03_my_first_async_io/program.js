// Cargamos el módulo que contiene las funciones necesarias para la entrada/salida.
var fs = require('fs');
// Leemos el fichero. El path al mismo se lo pasamos al programa como parametro
// del programa.
// La función readFileSync retorna un buffer que contiene el fichero.
fs.readFile(process.argv[2], function (err, data) {
    // Contabilizamos el número de líneas del fichero.
    var count = data.toString().split('\n').length - 1;
    // Mostramos por pantalla el resultado de contar el número de líneas del 
    // fichero.
    console.log(count);
});
