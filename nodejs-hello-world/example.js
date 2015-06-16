// Para usar el servidor o el cliente HTTP.
var http = require('http');
// Crreamos una nueva instancia de servidor http. Como parametros de la función
// le pasamos la request y el response.
http.createServer(function (req, res) {
    // Escribimos la cabecera de la respuesta indicando que va a ser texto plano.
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Excribimos en el response el texto que le queremos mostrar al usuario.
    res.end('Hello World\n');
// Arrancamos el servidor en modo de escucha en el puerto 1337 para la ip local.
}).listen(1337, '127.0.0.1');
// Mostramos un mensaje de info en la consola del servidor. Es interesante destacar
// que puesto que NodeJS es JavaScript en el servidor, este mensaje no se va a 
// mostrar en el cliente.
console.log('Server running at http://127.0.0.1:1337/');