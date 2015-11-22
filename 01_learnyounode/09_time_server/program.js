// Importamos el módulo net.
var net = require('net')

// Funcion que dado un número, si es menor que 10 le añade un cero delante para
// garantizar que todos los números de la fecha tienen el mismo formato de dos
// dígitos.
function zeroFill(i) {
  // Si el número es menor que 10 le concatenamos un cero delante.
  return (i < 10 ? '0' : '') + i
}

// Funcion que se encaga de determinar la hora actual y formatearla según las
// especificaciones del ejercicio.
function now () {
  // Recuperamos la fecha y hora actual.
  var d = new Date()
  // Retornamos un string resultado de concatenar las diferentes parates de la
  // fecha y hora. Para aquellos campos que sea necesario, pasamos el valor por
  // la funcion zeroFill para formatear los datos.
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

// Creamos el servidor.
var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

// Ponemos a escuchar el servidor en el puerto que hemos indicado como parámetro
// de entrada del comando.
server.listen(Number(process.argv[2]))
