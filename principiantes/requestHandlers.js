// Necesario para ejecutar comandos en el sistema.
var exec = require("child_process").exec;
var querystring = require("querystring");

// Función que se encarga de la inicialización
function iniciar(response, postData) {
  console.log("Manipulador de petición 'iniciar' fue llamado.");
  // Componemos la vista que retornamos al usuario.
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/subir" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Enviar texto" />'+
    '</form>'+
    '</body>'+
    '</html>';
    // Escribimos el contenido en la response.
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

// Función que se encarga de subir un fichero
function subir(response, dataPosteada) {
  // Escribimos la respuesta.
  console.log("Manipulador de peticion 'subir' fue llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Tu enviaste el texto: : " +
  querystring.parse(dataPosteada)["text"]);
  response.end();
}

// Exportamos las funciones.
exports.iniciar = iniciar;
exports.subir = subir;
