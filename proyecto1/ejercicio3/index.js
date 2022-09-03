// Bifucarciones if .... else
let saldo = 50;
let efectivo = 20;

if(efectivo < saldo){
    console.log("Puede sacar dinero");
}

if(efectivo < saldo){
    console.log("Puede sacar dinero");
} else {
    console.log("No puede sacar dinero");
}

// Example 2
nota = 5;
if (nota === 5){
    console.log("Sacaste una nota 5, espero que estudies más la proxima semana mi rey");
} else if(nota === 4){
    console.log("Buen trabajo, sos un vago");
} else if(nota === 3){
    console.log("Que crack, saco la mejor nota de todos");
} else if(nota === 2){
    console.log("No no no, sos todo lo que esta bien");
} else if(nota === 1){
    console.log("Llegaste a ser el king");
} else{
    console.log("Ingrese una nota, no soy una ia para adivinar todo");
}

let nota2 = 5;
switch (nota2) {
    case 5:
        console.log("Buen trabajo, vas a tener un futuro mi rey");
        break;
    case 4:
        console.log("Buen trabajo, vas a tener un futuro mi rey");
        break;
    case 3:
        console.log("Buen trabajo, vas a tener un futuro mi rey");
        break;
    case 2:
        console.log("Buen trabajo, vas a tener un futuro mi rey");
        break;
    case 1:
        console.log("Buen trabajo, vas a tener un futuro mi rey");
        break;


    default:
        console.log("Introduce una nota");
        break;
}

// Comparación mayor que y menor que
let max = 10;
let min = 5;

if (max > min) {
    console.log("Max es menor que min");
}

// Bucles for
// tipo de bucle for for(inicializacion, condicion, actualización) --> esto es un bucle
for (let i = 0; i < 10; i++) {
    console.log(i);
}