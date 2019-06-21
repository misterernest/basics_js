// manejo de numero
var edad = 37;

// incremento
edad = edad + 1;

// otro incremento
edad += 1;

// decremento
peso = 75;
peso = peso - 2;
peso -= 2;

// suma de dos variables
var sandwich = 1;
peso = peso + sandwich;

// restar variables
var deporte = 3;
peso = peso - deporte;
peso += sandwich;
peso -= deporte;

// decimales

var precioVino = 200.3;
//var total = precioVino + precioVino + precioVino;
var total = precioVino * 3;
// no es preciso el manejo de de decimales
// para hacerlo mas preciso se puede pasar a enteros y luego dividirlo
var total = (precioVino * 100 * 3) / 100;

//otra manera precisa es
var total = Math.round(precioVino * 100 * 3) / 100;
// colocar dos decimales
var totalStr = total.toFixed(2);

// convertir string a numero
var total2 = parseFloat(totalStr);

// como dividir
var pizza = 8;
var persona = 2;

var cantidadDePorcionesPorPersoanas = pizza / persona;
