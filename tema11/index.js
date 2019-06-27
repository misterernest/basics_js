// condicionales

var persona = {
  nombre: 'Ernesto',
  apellido: 'Campos',
  edad: 37,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}
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
  }else {
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
function imprimirSiEsMayorDeEdad(persona) {
  if (persona.edad >= 18) {
    console.log(`Es mayor de edad`);
    
  } else {
    console.log(`No es mayor de edad`);
    
  }
}

console.log(imprimirProfesiones(persona));
console.log(imprimirSiEsMayorDeEdad(persona));

