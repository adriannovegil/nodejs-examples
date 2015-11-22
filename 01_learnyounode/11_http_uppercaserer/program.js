// Cargamos el módulo http
var http = require('http')
// Cargamos el módulo through2-map
var map = require('through2-map')

// Creamos el servidor http que se encargará de atender las peticiones.
var server = http.createServer(function (req, res) {
  // Verificamos que las solicitudes sean de tipo POST.
  if (req.method != 'POST') {
      return res.end('send me a POST\n')
  }

  // Retornamos en el response el contenido de la request pero pasado a
  // mayúsculas.
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

// Lanzamos el servidor y le decimos que escuche en el puerto indicado como
// parámetro del comando de ejecución.
server.listen(Number(process.argv[2]))
