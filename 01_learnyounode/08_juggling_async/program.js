// Importamos el módulo http.
var http = require('http');
// Importamos el módulo bl el cual facilita las cosas a la hora de gestionar el
// stream de información proveniente de la llamada http.
var bl = require('bl')
// Array donde almacenamos los resultados
var results = []
// Contador en el que nos apoyamos para determinar si ya se han procesado todas
// las URLs.
var count = 0

// Función que se encarga de mostrar los resultados por pantalla.
function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

// Función que se encarga de recuperar la URL que indicamos como parámetro a
// partir de su indice.
function httpGet (index) {
  // Lanzamos la solicitud GET
  http.get(process.argv[2 + index], function callback(response) {
    // Detectamos el evento de recepción de datos y mostramos la info por pantalla.
    response.pipe(bl(function (err, data) {
      // Si detectamos un error, mostramos un mensaje por pantalla y terminamos.
      if (err) {
        return console.error(err)
      }
      // A partir del indice, determinamos la posición en el array de datos donde
      // debemos de almacenar los datos.
      results[index] = data.toString()
      // Incrementamos el contador en una unidad. La idea es que cuando lleguemos
      // a tres sabremos que hemos terminado de procesar todas las URLs
      count++
      // Cuando podamos confirmar que hemos terminado de procesar todas las URLs
      // procedemos a mostrar los resultados por pantalla.
      if (count == 3)
        // Mostramos los resultados por pantalla.
        printResults()
    }))
  });
}

// Lanzamos la recuperación de las URLs indicadas como parametros de entrada.
for (var i = 0; i < 3; i++)
  httpGet(i)
