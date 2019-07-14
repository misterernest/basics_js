// función MAP
// Toma cada elemento del ARRAY y lo modifica

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

const esAlta = ({ altura }) => altura > 1.75;
const esBaja = ({ altura }) => altura < 1.7;
// filtrar a las personas que son mas altas que un medida
let personasAltas = grupoPersonas.filter(esAlta);

let personasBajas = grupoPersonas.filter(esBaja);

// Otra forma de hacer este filtro es por medio de funciones anonimas
// let personasAltas = grupoPersonas.filter(function(persona) {
//   return persona.altura > 1.75;
// });

// este devuelve un nuevo objeto
const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
});

// convertiremos con MAP el array con la altura en centimetros
grupoPersonasEnCMS = grupoPersonas.map(pasarAlturaACms);

console.log(grupoPersonasEnCMS);
console.log(grupoPersonas);
