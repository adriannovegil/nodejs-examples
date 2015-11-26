// Funcion que se encarga del ruteo de las peticiones.
function route(handle, pathname, response) {
  console.log("A punto de rutear una peticion para " + pathname);
  // Verificamos que existe el path que queremos procesar.
  if (typeof handle[pathname] === 'function') {
    return handle[pathname](response);
  } else {
    // En caso de error mostramos la página de error.
    console.log("No hay manipulador de peticion para " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 No Encontrado");
    response.end();
  }
}

// Exportamos la funcion.
exports.route = route;
