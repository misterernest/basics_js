// objetos

// Como seria con function

// var nombreErnesto = 'Elias';
// var nombreElias = 'Ernesto';

function imprimirNombreEnMayuscula(nombre) {
  nombre = nombre.toUpperCase();
  console.log(nombre);
}

// imprimirNombreEnMayuscula(nombreErnesto);
// imprimirNombreEnMayuscula(nombreElias);

// Con objetos se crea una var y se le asignan atributos.
var ernesto = {
  nombre: "Ernesto",
  apellido: "Campos",
  edad: "37"
};

var juan = {
  nombre: "Juan",
  apellido: "Villa",
  edad: 39
};
imprimirNombreEnMayuscula(ernesto.nombre);

// la funcion tambien pdoria recibir un objeto
function imprimirNombreEnMayuscula2(persona) {
  nombre = persona.nombre.toUpperCase();
  console.log(nombre);
}

// otro metodo de escribir la función:
function imprimirNombreEnMayuscula3(persona) {
  console.log(persona.nombre.toUpperCase());
}

// otra forma mas corta y puede ser mas legible,
// es recibir el objeto, pero solo tomar los atributos que nos
// interesa
function imprimirNombreEnMayuscula4({ nombre }) {
  console.log(nombre.toUpperCase());
}
imprimirNombreEnMayuscula2(juan);
imprimirNombreEnMayuscula3(ernesto);
imprimirNombreEnMayuscula4(juan);

// tambien podemos llamar al objeto con una declaración del atributo:
imprimirNombreEnMayuscula4({ nombre: "Carlos" });

// no se puede llamar sin parametros o sin los atributos especificados
