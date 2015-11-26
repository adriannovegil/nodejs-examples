// Funcion que se encarga del ruteo de las peticiones.
function route(handle, pathname) {
  console.log("A punto de rutear una peticion para " + pathname);
  // Verificamos que existe el path que queremos procesar.
  if (typeof handle[pathname] === 'function') {
    return handle[pathname]();
  } else {
    console.log("No se encontro manipulador para " + pathname);
    return "404 No Encontrado";
  }
}

// Exportamos la funcion.
exports.route = route;
