// Requiere al módulo http que viene incluido con Node.js y lo hace accesible a
// través de la variable http.
var http = require("http");
// Importamos el módulo para gestionar URLs
var url = require("url");

// Funcion que se encarga de inicializar el servidor.
function iniciar (route, handle) {
  // Creamos la funcion que se encarga de procesar las peticiones que reciba el
  // servidor.
  function onRequest(request, response) {
    var dataPosteada = "";
    // Recuperamos el path
    var pathname = url.parse(request.url).pathname;
    console.log("Peticion para " + pathname + " recibida.");
    // Deifinimos el encoding
    request.setEncoding("utf8");
    // Añadimos un manejador para procesar los datos mientras están siendo
    // recividos.
    request.addListener("data", function(trozoPosteado) {
      dataPosteada += trozoPosteado;
      console.log("Recibido trozo POST '" + trozoPosteado + "'.");
    });
    // Añadimos un manejador para cuando finalice la recepción de los datos.
    request.addListener("end", function() {
      // Procesamos la petición.
      route(handle, pathname, response, dataPosteada);
    });
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
