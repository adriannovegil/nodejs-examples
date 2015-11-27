// Importamos el módulo fs.
var fs = require('fs');

// Recuperamos el valor del primer argumento.
var file = process.argv[2];

// Leemos el contenido del fichero y lo mostramos de nuevo por pantalla.
// `fs.createReadStream()` takes a file as an argument and returns a readable
// stream that you can call `.pipe()` on. Here's a readable stream that pipes its
// data to `process.stderr`:
fs.createReadStream(file).pipe(process.stdout);
