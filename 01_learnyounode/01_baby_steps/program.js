// Variable sobre la que vamos a almacenar el resultado final.
var result = 0;
// Recorremos la lista de argumentos. Como los dos primeros no los hemos especificado
// nosotros si no que es el comando y el programa que queremos ejecutar, empezamos
// a iterar en el indice 2.
for (var i = 2; i < process.argv.length; i++) {
    // Parseamos los valores pasados como parámetro a número y los sumamos a la
    // variable result.
    result += Number(process.argv[i]);
}
// Mostramos por pantalla el resultado de sumar los valores pasados como parametro.
console.log(result);
