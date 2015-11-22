// Cargamos el módulo http
var http = require('http')
// Cargamos el módulo fs
var fs = require('fs')

// Creamos el servidor http que se encargará de atender las peticiones.
var server = http.createServer(function (req, res) {
  // Escribimos en el response de la solicitud el código 200 que indica que la
  // petición se ha procesado correctamente.
  res.writeHead(200, { 'content-type': 'text/plain' })
  // Leemos el fichero que pasamos como segundo argumento y lo cargamos en el
  // response de la solicitud.
  fs.createReadStream(process.argv[3]).pipe(res)
})

// Lanzamos el servidor y le decimos que escuche en el puerto indicado como
// parámetro del comando de ejecución.
server.listen(Number(process.argv[2]))
