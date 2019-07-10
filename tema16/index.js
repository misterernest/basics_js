// ciclos do while

let contador = 0;

const llueve = () => Math.random() < 0.3;

do {
  contador++;
} while (!llueve());
let palabraPlural = "vez";
if (contador > 1) {
  palabraPlural = "veces";
}
console.log(`Fui a ver si llovia ${contador} ${palabraPlural}`);
