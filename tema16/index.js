// ciclos while
var persona = {
  nombre: "Ernesto",
  apellido: "Campos",
  edad: 37,
  peso: 70
};
console.log(`Al inicio del año ${persona.nombre} pesaba ${persona.peso} kg`);
const INCREMENTO_DE_PESO = 0.3;
const DAY_OF_YEAR = 365;
const aumentarDePeso = persona => (persona.peso += INCREMENTO_DE_PESO);
const adelgazar = persona => (persona.peso -= INCREMENTO_DE_PESO);

const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;
// la persona debe bajar de peso 3kg
const META = persona.peso - 3;
let dias = 0;
while (persona.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(persona);
  }
  if (realizaDeporte()) {
    adelgazar(persona);
  }
  dias += 1;
}

console.log(`pasaron ${dias} días antes de que ${persona.nombre} adelgazara.`);
