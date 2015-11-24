// Requiere al módulo http que viene incluido con Node.js y lo hace accesible a
// través de la variable http.
var http = require("http");

// Llamamos a una de las funciones que el módulo http ofrece: createServer. Esta
// función retorna un objeto, y este objeto tiene un método llamado listen
// (escucha), y toma un valor numérico que indica el número de puerto en que
// nuestro servidor HTTP va a escuchar.
// En nuestro caso el servidor se inicia en el puerto 8888
http.createServer(function(request, response) {
  // Escribimos en la cabecera del response el código 200 indicando que la
  // petición se ha procesado con écito.
  response.writeHead(200, {"Content-Type": "text/html"});
  // Escribimos el cuerpo de la respuesta.
  response.write("Hola Mundo");
  // Finalizamos y retornamos la respuesta.
  response.end();
  // Escuchamos en el puerto 8888
}).listen(8888);
