// Función que se encarga de la inicialización
function iniciar() {
  console.log("Manipulador de petición 'iniciar' ha sido llamado.");
}

// Función que se encarga de subir un fichero
function subir() {
  console.log("Manipulador de petición 'subir' ha sido llamado.");
}

// Exportamos las funciones.
exports.iniciar = iniciar;
exports.subir = subir;
