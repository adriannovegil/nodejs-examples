// Funcion que se encarga del ruteo de las peticiones.
function route(handle, pathname) {
  console.log("A punto de rutear una peticion para " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    console.log("No se encontro manipulador para " + pathname);
    console.log("404 No Encontrado");
  }
}

// Exportamos la funcion.
exports.route = route;
