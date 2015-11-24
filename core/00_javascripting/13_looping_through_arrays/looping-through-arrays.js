// Definimos el array de elementos.
var pets = ['cat', 'dog', 'rat'];
// Recorremos el array de animales y convertimos cada entrada al plural.
for (var i = 0; i < pets.length; i++) {
    // A cada una de las cadenas de caracteres, le concatenamos la letra 's'.
    pets[i] = pets[i] + 's';
}
// Mostramos el resultado por pantalla.
console.log(pets);
