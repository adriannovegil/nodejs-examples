// Necesario para ejecutar comandos en el sistema.
var exec = require("child_process").exec;

// Función que se encarga de la inicialización
function iniciar(response) {
  console.log("Manipulador de petición 'iniciar' fue llamado.");
  // Como respuesta enviamos la lista de ficheros del sistema.
  exec("ls -lah", function (error, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(stdout);
    response.end();
  });
}

// Función que se encarga de subir un fichero
function subir(response) {
  // Escribimos la respuesta.
  console.log("Manipulador de petición 'subir' fue llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Subir");
  response.end();
}

// Exportamos las funciones.
exports.iniciar = iniciar;
exports.subir = subir;
