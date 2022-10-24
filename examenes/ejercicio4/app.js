const nombre = "Gonzalo";
const apellido = "Medrano";

const estudiante = nombre + " " + apellido;
const estudianteMayus = estudiante.toLocaleUpperCase();
console.log(estudianteMayus);
const estudianteMinus = estudiante.toLocaleLowerCase();
console.log(estudianteMinus);
const numeroLetras = estudiante.length;
console.log(numeroLetras);
const ultimaLetra = estudiante[estudiante.length - 1];
const primeraLetra = estudiante[0];
console.log(ultimaLetra);
console.log(primeraLetra);
const eliminarEspacio = estudiante.split(" ").join("");
console.log(eliminarEspacio);
const boleanoNombre = estudiante.split(" ")[0] === nombre;
console.log(boleanoNombre);