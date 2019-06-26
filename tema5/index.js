// Alcance de las funciones, scope
var nombre = "Ernesto";

// function que utiliza internamente la variable nombre
function imprimirNombreEnMayuscula1() {
  nombre = nombre.toUpperCase();
  console.log(nombre);
}

//imprimirNombreEnMayuscula1();

// funcion con sus variables locales para no afectar las variables globales
// function imprimirNombreEnMayuscula2(n) {
//   n = n.toUpperCase();
//   console.log(n);
// }

// Función utilizando el mismo nombre de variable global para el local
function imprimirNombreEnMayuscula2(nombre) {
  nombre = nombre.toUpperCase();
  console.log(nombre);
}
// En el ejemplo anterior, solo modifica dentro de la funcion y no la variable global
// para acceder a la variable global se podria llamar el objeto globa, en este caso window
// y colocar window.nombre

imprimirNombreEnMayuscula2(nombre);
