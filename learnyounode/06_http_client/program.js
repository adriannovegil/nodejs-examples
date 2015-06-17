// Importamos el módulo que hemos creado.
var http = require('http');
// Lanzamos la solicitud GET
http.get(process.argv[2], function callback(response) {
    // Detectamos el evento de recepción de datos y mostramos la info por pantalla.
    response.on("data", function (data) {
        // Mostramos por pantalla la info.
        console.log(data.toString());
    });
    // Detectamos el evento de error.
    response.on("error", function () {
        // Mostramos por pantalla un mensaje de error.
        console.log("ERROR");
    });
});