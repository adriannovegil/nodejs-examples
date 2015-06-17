/**
 * Definimos la función eat.
 * @param {type} food Stirng que le pasamos a la función como parametro necesario
 * para generar el resultado final.
 * @returns {String} Cadena de caracteres que genera internamente la función como
 * resultado de la concatenación de la cadena de caracteres que le pasamos como
 * parametro junto con una cadena fija definida internamente.
 */
function eat(food) {
    // Retornamos el resultado de concatenar al argumento que le pasamos a la 
    // función la cadena ' tasted really good.'
    return food + ' tasted really good.';
}
// Invocamos la función definida y mostramos el resultado por pantalla.
console.log(eat('bananas'));