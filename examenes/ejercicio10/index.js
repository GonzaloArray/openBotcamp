// Funciones
function saludar(nombre, apellido, dni) {
    if (nombre) {
        return nombre + apellido;

    }else if(!nombre && apellido){
        return apellido + " " + dni;
    }else{
        return dni;
    }
}

console.log(saludar("", "Ceo de tortillalan", "123123"))

// Carga y sobrecarga de funciones
// Es cuando la funcion es llamada dentro de otra funcion
// Ejemplo
function hola() {
    saludar();
}

hola();

// Promesas

const nuevaPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2);

    if (i !== 0) {
        return resolve()
    }else{
        return reject();
    }
})

nuevaPromesa
    .then(() => console.log("Se ha ejecutado correctamente"))
    .catch(() => console.log("Ha ocurrido un problemon"))
    .finally(() => console.log("Yo me ejecuto siempre"))

// Funciones generadoras
function* generaId() {
    let id = 0;
    while(true){
        id++;
        if (id > 10) {
            return
        }
        yield id; /* Esperando hasta que se vuelva a llamar la funcion generadora se queda esperando hasta que la llamemos devuelta*/
    }
}

const gen = generaId();

console.log(gen.next()); /* Para obtener un valor se utiliza next() */

// Ejercicio 1
function devueltoTrue() {
    return true;
}

// ejercicio 2
const juna = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("Hola soy una promesa")
        return resolve();
    }, 5000);

})
const meEjecutoAlInstate = () =>{
    console.log("Me estoy ejecutando al Instate");
}
meEjecutoAlInstate();

// Ejercicio 3