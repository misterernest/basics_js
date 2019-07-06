// ciclos
var persona = {
  nombre: "Ernesto",
  apellido: "Campos",
  edad: 37,
  peso: 70
};
console.log(`Al inicio del año ${persona.nombre} pesaba ${persona.peso} kg`);
const INCREMENTO_DE_PESO = 0.2;
const DAY_OF_YEAR = 365;
const aumentarDePeso = persona => (persona.peso += INCREMENTO_DE_PESO);
const adelgazar = persona => (persona.peso -= INCREMENTO_DE_PESO);
for (let i = 1; i <= DAY_OF_YEAR; i++) {
  let random = Math.random();
  if (random < 0.25) {
    aumentarDePeso(persona);
  } else if (random < 0.5) {
    adelgazar(persona);
  } else {
  }
}
console.log(
  `Al final del año ${persona.nombre} pesaba ${persona.peso.toFixed(1)} kg`
);
