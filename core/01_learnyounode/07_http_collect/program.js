// Importamos el módulo http.
var http = require('http');
// Importamos el módulo bl el cual facilita las cosas a la hora de gestionar el
// stream de información proveniente de la llamada http.
var bl = require('bl')
// Lanzamos la solicitud GET
http.get(process.argv[2], function callback(response) {
  // Detectamos el evento de recepción de datos y mostramos la info por pantalla.
  response.pipe(bl(function (err, data) {
    // Si detectamos un error, mostramos un mensaje por pantalla y terminamos.
    if (err) {
        return console.error(err)
    }
    // Pasamos a string el contenido del data.
    data = data.toString()
    // En la primera línea, mostramos el número de caracteres de data.
    console.log(data.length)
    // En la segunda línea mostramos el contenido de data.
    console.log(data)
  }))
});
