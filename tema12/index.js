// Funciones que retornan valores

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
// funcion que implementa el uso de condicionales
function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);
  if (persona.ingeniero === true) {
    console.log(`Ingenerio`);
  } else {
    console.log(`No es ingeniero`);
  }
  if (persona.cocinero === true) {
    console.log(`Cocienro`);
  } else {
    console.log(`No es cocinero`);
  }
  if (persona.cantante === true) {
    console.log(`Cantante`);
  } else {
    console.log(`No es cantante`);
  }
  if (persona.dj === true) {
    console.log(`DJ`);
  }
  if (persona.guitarrista === true) {
    console.log(`Guitarrista`);
  } else {
    console.log(`No es guitarrista`);
  }
  if (persona.drone === true) {
    console.log(`Vuela Drones`);
  } else {
    console.log(`No vuela Drones`);
  }
}

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

// Declaramos una variable constante en notación
const MAYORIA_DE_EDAD = 18;
// Una funcion que devuelva un valor de true o false
function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}

// llamamos a la función anterior
function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} no es mayor de edad`);
  }
}
