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