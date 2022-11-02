const newObj = {
    nombre: "Juan"
}

const obj2 = newObj
obj2.nombre = "Gonzalo";

console.log(newObj)
console.log(obj2)

const listaPelicula = [
    { titulo: "Lo que el viento se llevo", anyo: 1939 },
    { titulo: "Doctor tulitud dos", anyo: 1919 },
    { titulo: "Teriminator 3", anyo: 1949 },
    { titulo: "Jurassic Park", anyo: 1959 },
];

/* 
Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

*/

const datosPersonales = {
    nombre: "Kaliti mazi beiby",
    apellido: "beiby",
    edad: 43,
    altura: "1.32",
    eresDesarrollador: "si",
}

const edad = datosPersonales.edad;
const lista = [datosPersonales, {amigo1:"No tengo uwu", edad: 12}, {amigo2:"Si no tengo uno, no tengo dos", edad: 14}];

const orden = lista.sort((a, b)=> b.edad - a.edad );
console.log(lista)
