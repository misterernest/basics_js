var nombre = "Ernesto",
  apellido = "Campos";

// manejo de funciones en JS para string
// solo se coloca
// convertir en mayuscula
var nombreEnMayuscula = nombre.toUpperCase();

// convertir a minuscula
var nombreEnMinuscula = nombre.toLowerCase();

// mostrar primer caracter
var primerLetraDelNombre = nombre.charAt(0);

// cantidad de caracteres no es una funcion, no maneja parentesis
var cantidadDeLetrasDelNombre = nombre.length;

// concatenar dos string

var nombreCompleto = nombre + " " + apellido;

// nueva manera de concatenar string por interpolación
var nombreCompleto2 = `${nombre} ${apellido}`;

// usar funciones al concatenar
var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`;

// acceder a un substring donde empieza y cuantos caracteres
var str = nombre.substr(1, 2);
