// función reduce
// esta función maneja un acumulador que es capaz de pasar por todo el array
var Pedro = {
  nombre: "Pedro",
  apellido: "Martinez",
  altura: 1.75,
  cantidadLibros: 29,
  nota: 7.5
};

var Mario = {
  nombre: "Mario",
  apellido: "Juarez",
  altura: 1.8,
  cantidadLibros: 50,
  nota: 4.5
};

var Camila = {
  nombre: "Camila",
  apellido: "Milter",
  altura: 1.65,
  cantidadLibros: 110,
  nota: 8.9
};

var Fernanda = {
  nombre: "Fernanda",
  apellido: "Portillo",
  altura: 1.68,
  cantidadLibros: 80,
  nota: 6.9
};
let grupoPersonas = [Pedro, Mario, Camila, Fernanda];

const reducer = (acum, { cantidadLibros }) => acum + cantidadLibros;
// reduce recibe dos parametros, una funcion y la inicializacion del contador
// la funcion implicitamente le pasa el contador y otro valor, que en este
// caso es un objeto
let totalLibros = grupoPersonas.reduce(reducer, 0);
