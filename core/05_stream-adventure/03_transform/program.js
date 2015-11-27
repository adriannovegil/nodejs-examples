// Importamos el módulo through2
var through = require('through2');

// Definimos la función tr que se encarga de transformar el texto de entrada
// a mayúsculas.
// Create a through stream with a `write` and `end` function:
//
//    var through = require('through2');
//    var stream = through(write, end);
//
// The `write` function is called for every buffer of available input:
// and the `end` function is called when there is no more data:
// If `write` is not specified, the default implementation passes the input data to
// the output unmodified.
//
// If `end` is not specified, the default implementation calls `this.push(null)`
// to close the output side when the input side ends.
var tr = through(function (buf, _, next) {
    // Inside the write function, call `this.push()` to produce output data and
    this.push(buf.toString().toUpperCase());
    // call `next()` when you're ready to receive the next chunk:
    next();
});

// Procesamos la entrada
process.stdin.pipe(tr).pipe(process.stdout);
