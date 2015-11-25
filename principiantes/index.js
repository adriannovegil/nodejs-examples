// Importamos el módulo que hemos sdefinido.
var server = require("./server");
// Importamos el router
var router = require("./router");

// Iniciamos el servidor.
server.iniciar(router.route);
