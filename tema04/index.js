// funciones

var nombre = "Ernesto",
  edad = 28;

// definir una function (palabra reservada)
function imprimirEdad() {
  console.log(`${nombre} tiene ${edad} años`);
}
// se puede usar cuantas veces quieras
imprimirEdad();
// se cambian las variables y se vuelve a utilizar
nombre = "Venus";
edad = 26;

imprimirEdad();

function imprimirEdad(n, e) {
  console.log(`${n} tiene ${e} años`);
}
// se puede llamar con los datos
imprimirEdad("Ernesto Campos", 37);
// ya esta no funcionaria, porque se redifinio la function
imprimirEdad();
// se puede usar con variables
imprimirEdad(nombre, edad);

// javascript es debilmente tipado, debe estar muy pendiente de enviar parametros cuando la function solicita parametros
