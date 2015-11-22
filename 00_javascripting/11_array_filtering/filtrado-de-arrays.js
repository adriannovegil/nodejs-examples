// Definimos el array y lo inicializamos con valores.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Filtramos el array definido. Extraemos del array original los valores pares.
// Para ello usamos el operador %.
var filtered = numbers.filter(function evenNumbers(number) {
    return number % 2 === 0;
});
// Mostramos por pantalla el valor de la variable definida.
console.log(filtered);