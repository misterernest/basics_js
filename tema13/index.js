// Arrow function

var persona = {
  nombre: "Ernesto",
  apellido: "Campos",
  edad: 37,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
};

var persona2 = {
  nombre: "Juan",
  apellido: "Villa",
  edad: 17
};

// Esta seria la función que imprime
/*
function imprimirSiEsMayorDeEdad(persona) {
  if (persona.edad >= 18) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} no es mayor de edad`);
  }
}
*/

// Declaramos una constante en notación
const MAYORIA_DE_EDAD = 18;
// Una funcion que devuelva un valor de true o false
// function sin usar arrow function
/*
function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}
*/

// function anonima
// a la variable esMayorDeEdad se le asigna una función anonima
/*var esMayorDeEdad = function(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
};*/

// arrow function
// Se vuelve constante para declrar que es una function no var
// y funciona similar a la function anterior
/*const esMayorDeEdad = (persona) => {
  return persona.edad >= MAYORIA_DE_EDAD;
};*/

// otra forma de escribir cuando solo recibe un parametro
/*const esMayorDeEdad = persona => {
  return persona.edad >= MAYORIA_DE_EDAD;
};*/

// se puede resumir cuando solo hace un return
//const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;

// ahora destructuremos la arrow function, se colocaria así
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

// otro ejemplo de arrow function
const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({ edad });
// llamamos a la función anterior
function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} no es mayor de edad`);
  }
}

// Usar la function esMayorDeEdad
const permitirAcceso = function() {
  if (!esMayorDeEdad(persona)) {
    console.log("Acceso Denegado");
  }
};
