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