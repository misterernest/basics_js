// Introducción a Array
// Arreglos

// Es una colección de datos que tienen caracteristicas en común

// Primero creemos una serie de objetos
let persona1 = {
  nombre: "Ernesto",
  apellido: "Campos",
  altura: 1.78
};

let persona2 = {
  nombre: "Patricia",
  apellido: "Villa",
  altura: 1.7
};

let persona3 = {
  nombre: "Elias",
  apellido: "Campos",
  altura: 1.73
};

let persona4 = {
  nombre: "Carlos",
  apellido: "Campos",
  altura: 1.75
};

let persona5 = {
  nombre: "Juan",
  apellido: "Campos",
  altura: 1.85
};

let persona6 = {
  nombre: "Venus",
  apellido: "Cardenas",
  altura: 1.65
};
let grupoPersonas = [
  persona1,
  persona2,
  persona3,
  persona4,
  persona5,
  persona6
];

// para poder acceder a todo el array en consola:
// grupoPersonas
// para acceder a la primera posición del array
// grupoPersonas[0]
// para acceder a una propiedad de la primera posición del array
// grupoPersonas[0].altura
// otra forma es:
// grupoPersonas[0]['altura']

// Manera de recorrer un array:

for (let i = 0; i < grupoPersonas.length; i++) {
  let persona = grupoPersonas[i];
  console.log(
    `${persona.nombre} ${persona.apellido} mide ${persona.altura}mts`
  );
}
