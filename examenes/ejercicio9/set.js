const miArray = [1, 2, 3, 4, 4, 4 ,4 , 4, 4];

// Plus
const miSet = new Set(miArray);
miSet.add(23)
miSet.delete(23)
miSet.clear()
console.log(miSet);

// Ejercicio
const dato = ["Gonzalo", "Petinisiana","Juan de la cruz","Jorgelina","Juliana","Marcela","Roberta"];
const miFamilia = new Set(dato);
miFamilia.add("Gonzalo");
miFamilia.add("Javascript");
console.log(miFamilia)