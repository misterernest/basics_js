// comparaciones en javascript

var x = 4, y = '4';

// al parecer los dos tienen la mismo información pero uno es entero y el otro es una cadena

// = asigna
// == compara dos variables

console.log(x == y);

// === comparamos si es del mismo valor y ademas son del mismo tipo
// siempre que se pueda, es conveniente usemos el triple igual
console.log( x === y);


// ahora comparemos objetos
var persona1 = {
  nombre: 'Ernesto'
}

var persona2 = {
  nombre: 'Ernesto'
}

// cuando se comparan dos objetos, así sean iguales los muestra diferentes
// ya que el mira la referencia de la variable

console.log(persona1 == persona2);
console.log(persona1 === persona2);

// para que apunte a la misma referencia de variable, se hace lo siguiente:

var persona3 = persona1;
console.log(persona1 == persona3);
console.log(persona1 === persona3);

// si cambio el valor de persona3 cambia el valor de persona1 ya que apuntan
// a la misma referencia de memoria
console.log('antes de cambiar variable persona3');

console.log(persona1);
console.log(persona3);
persona3.nombre = 'Juan'
console.log('despues de cambiar persona3');

console.log(persona1);
console.log(persona3);




// da true ya que es el mismo objeto

// Ahora si desglosamos un objeto
var persona4 = {
  ...persona1
}

// no se ven como iguales, porque son referncias diferentes.
console.log(persona1 == persona4);
console.log(persona1 === persona4);