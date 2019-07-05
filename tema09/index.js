// parametros referencia y valor
var ernesto = {
  nombre: "Ernesto",
  apellido: "Campos",
  edad: 37
};
console.log("Objeto original");

console.log(ernesto);
function cumpleanios(persona) {
  persona.edad += 1;
}
console.log("despues de llamar la funcion ernesto");
cumpleanios(ernesto);
console.log(ernesto);
// cuando se llame el objeto ernesto se observara que el valor es
// mayor en 1, osea 38 y se aumentara cada vez que lo llamemos.

// pero si fuera una función de la siguiente manera:

function cumpleanios2(edad) {
  edad += 1;
}
console.log("Con la funcion que se pasa solo la edad no modifica el objeto");
cumpleanios2(ernesto.edad);
console.log(ernesto);

// e invocaramos el objeto ernesto, la edad seria la de antes de llamar
// a la función.

// esto sucede ya que cuando se invocan los objetos o se pasan por parametros
// se llaman por referencia, y esto significa que siempre se va
// a señalar el obejto original, mas no se pasa una copia del objeto

// para evitar modificar el objeto inicial, se puede devolver un nuevo objeto
function cumpleanios3(persona) {
  return {
    // se llama todos el objeto para que se copie y solo sea diferente
    // la edad, se llama desglosar el objeto en el nuevo objeto.
    ...persona,
    edad: persona.edad + 1
  };
}
console.log("llamamos la funcion que devuelve un objeto diferente");
console.log(cumpleanios3(ernesto));
console.log("luego llamamos el objeto ernesto y este no ha cambiado");
console.log(ernesto);

// no se modifica ernesto, pero devuelve una persona con mas edad

// se puede crear un nuevo objeto con el resultado de la función que devuelve
// un objeto nuevo

personaMasVieja = cumpleanios3(ernesto);
console.log("se llama el nuevo objeto, llamado personaMasVieja");
console.log(personaMasVieja);
