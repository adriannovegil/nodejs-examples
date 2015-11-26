// Importamos el módulo que hemos sdefinido.
var server = require("./server");
// Importamos el router
var router = require("./router");
// importamos los manejadores de petición
var requestHandlers = require("./requestHandlers");

// Definimos las rutas a manejar.
var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

// Iniciamos el servidor.
server.iniciar(router.route, handle);
