// Importamos el módulo que hemos creado.
var mymodule = require('./mymodule.js');

// Como solo hemos exportado una función, mymodule contiene la función que hemos
// definido.
mymodule(process.argv[2], process.argv[3], function (err, data) {
    // Si la función de nuestro módulo nos ha retornado un error, lo procesamos,
    // indicandole al usuario este hecho.
    if (err) {
        // Mostramos por pantalla el mensaje de error.
        return console.log('ERROR');
    }
    // Si no hemos entrado por la rama de error, procesamos los datos. Recorremos
    // los dicheros y para cada uno de estos mostramos los datos por pantalla.
    // En este caso no es necesario el filtrado de los datos ya que vienen prefiltrados
    // desde el módulo.
    data.forEach(function (d) {
        // Mostramos por pantalla el resultado actual.
        console.log(d.toString());
    });
});