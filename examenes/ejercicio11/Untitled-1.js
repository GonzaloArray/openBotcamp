// New error --> control de errores en openBootcamp

// Metodo throw new errow

function calcularNumero(num) {

    if (typeof num == "number") {
        return num * 2;
    }

    throw new Error("Este es un error, no es un número")
}

// console.log(calcularNumero("2"))

try {
    console.log("Esto se está ejecutando bien, hasta que pasa esto")
    calcularNumero("2")
} catch (error) {
    console.log(error, "Hay un error en tú codigo")
}finally{
    console.log("Soy un finally")
}