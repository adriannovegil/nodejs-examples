// Requiere al módulo http que viene incluido con Node.js y lo hace accesible a
// través de la variable http.
var http = require("http");

// Funcion que se encarga de inicializar el servidor.
function iniciar () {
  // Creamos la funcion que se encarga de procesar las peticiones que reciba el
  // servidor.
  function onRequest(request, response) {
    console.log("Petición Recibida.");
    // Escribimos en la cabecera del response el código 200 indicando que la
    // petición se ha procesado con écito.
    response.writeHead(200, {"Content-Type": "text/html"});
    // Escribimos el cuerpo de la respuesta.
    response.write("Hola Mundo");
    // Finalizamos y retornamos la respuesta.
    response.end();
    // Escuchamos en el puerto 8888
  }
  // Llamamos a una de las funciones que el módulo http ofrece: createServer. Esta
  // función retorna un objeto, y este objeto tiene un método llamado listen
  // (escucha), y toma un valor numérico que indica el número de puerto en que
  // nuestro servidor HTTP va a escuchar.
  // En nuestro caso el servidor se inicia en el puerto 8888
  http.createServer(onRequest).listen(8888);
  // Indicamos que el servidor se ha iniciado correctamente.
  console.log("Servidor Iniciado.");
}

// Exportamos la funcion iniciar que se encarga de iniciar y configurar el
// servidor.
exports.iniciar = iniciar;
