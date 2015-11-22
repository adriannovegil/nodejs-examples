// Cargamos el módulo http
var http = require('http')
// Cargamos el módulo url
var url = require('url')

// Funcion que parsea el tiempo que extraemos del sistema al formato JSON
function parsetime (time) {
  // Retornamos el JSON.
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

// Funcion que parsea el tiempo que extraemos del sistema al formato UNIX.
function unixtime (time) {
  // Retornamos el tiempo en formato UNIX.
  return { unixtime : time.getTime() }
}

// Creamos el servidor.
var server = http.createServer(function (req, res) {
  // Parseamos la URL, la idea es determinar al endpoint al que queremos acceder.
  var parsedUrl = url.parse(req.url, true)
  // Recuperamos la fecha y hora del sistema.
  var time = new Date(parsedUrl.query.iso)
  // Variable auxiliar que almacenerá el resultado final de la ejecución.
  var result

  // Determinamos el camino en base a la URL a la que el usuario quiere acceder.
  if (/^\/api\/parsetime/.test(req.url)) {
    // Determinamos el resultado.
      result = parsetime(time)
  }
  else if (/^\/api\/unixtime/.test(req.url)) {
    // Determinamos el resultado.
      result = unixtime(time)
  }

  // Si se ha conseguido determinar el resultado, es decir, el usuario ha intentado
  // acceder a un endpoint válido, entonces retonamos dicho resultado. En caso
  // contrario retornamos un 404 indicando un error en la solicitud.
  if (result) {
    // Escribimos el código de retorno de la cabecera del paquete
    res.writeHead(200, { 'Content-Type': 'application/json' })
    // Cargamos en el response el resultado.
    res.end(JSON.stringify(result))
  } else {
    // Escribimos el código de error en la cabecera del paquete.
    res.writeHead(404)
    // Finalizamos
    res.end()
  }
})

// Lanzamos el servidor y le decimos que escuche en el puerto indicado como
// parámetro del comando de ejecución.
server.listen(Number(process.argv[2]))
