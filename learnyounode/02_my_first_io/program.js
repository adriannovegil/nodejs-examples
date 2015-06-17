// Cargamos el módulo que contiene las funciones necesarias para la entrada/salida.
var fs = require('fs');
// Leemos el fichero. El path al mismo se lo pasamos al programa como parametro
// del programa.
// La función readFileSync retorna un buffer que contiene el fichero.
var buf = fs.readFileSync(process.argv[2]);
// Contabilizamos el número de líneas del fichero.
var count = buf.toString().split('\n').length - 1;
// Mostramos por pantalla el resultado de contar el número de líneas del fichero.
console.log(count);