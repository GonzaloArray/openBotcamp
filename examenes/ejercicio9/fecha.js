
/*
Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

const fechaHoy = new Date();

console.log(fechaHoy)

const fechaNacimiento = new Date("1/12/22").toLocaleDateString();

console.log(fechaNacimiento)

const valor = fechaHoy > fechaNacimiento ? "Es mas temprano":"Es más tarde"

const dia = fechaHoy.getDate();
console.log(dia);
const mes = fechaHoy.getMonth();
console.log(mes);
const año = fechaHoy.getFullYear();
console.log(año);