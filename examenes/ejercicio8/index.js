const listaCompra = ["Salchicha", "Queso", "Pizzeta", "Arroz", "Protector solar"];

listaCompra.push("Aceite de girasol");
listaCompra.pop("Aceite de girasol");

console.log(listaCompra);

const listaPelisFav = [
    {titulo: "King Kong", director: "Elon Mosk", fecha: "11/12/2001"},
    {titulo: "Avenger", director: "Elon Rocco", fecha: "12/12/2025"},
    {titulo: "El hombre que pica", director: "Elon Trump", fecha: "11/12/2039"},
];

const newList = listaPelisFav.filter(peli => new Date(peli.fecha) < new Date("01/01/2010"));
const newDirect = listaPelisFav.map(product => product.director);
const newMovie = listaPelisFav.map(movie => movie.titulo);
const concatDiMovie = newDirect.concat(newMovie);
const propFactor = [...newDirect, ...newMovie];

console.log(newList);
console.log(newDirect);
console.log(newMovie);
console.log(concatDiMovie);
console.log(propFactor);