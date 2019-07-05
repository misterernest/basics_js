// objetos

// Desestructurar objetos

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

function imprimirNombreEnMayuscula(persona) {
  // esta seria la forma tradicional
  //var nombre = persona.nombre;

  // Esta seria la maanera abreviada al tener el mismo nombre de
  // variable
  var { nombre } = persona;
  // se crea variable nombre y de manera abreviada se le asigna el atributo
  // nombre de persona.
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayuscula(ernesto);

// otro ejemplo
function imprmirNombreYEdad(persona) {
  var { nombre } = persona;
  var { edad } = persona;
  console.log(`hola me llamo ${nombre} y tengo ${edad}`);
}
imprmirNombreYEdad(ernesto);
imprmirNombreYEdad(juan);
