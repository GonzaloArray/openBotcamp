// Ejercicio 1
function devueltoTrue() {
    return true;
}

// ejercicio 2
const nuevaPromesa = new Promise((resolve, reject) => {

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
function* genereadora() {
    let numero = 0;
    while(true){
        if (numero < 10) {
            numero = numero + 2
            yield numero;
        }
    }
}
const gen = genereadora();
for (let i = 0; i < 10; i++) {
    console.log(gen.next())
}