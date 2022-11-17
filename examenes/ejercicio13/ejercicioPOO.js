class Estudiante {
    constructor(nombre){
        this.nombre = nombre;
        this.lista = new Array("HTML", "css", "js");
    }

    obtenDatos(){
        return{
            nombre: this.nombre,
            lista: this.lista,
        }
    }
}

class Persona extends Estudiante {
    constructor(nombre, lista){
        super(nombre, lista)
    }
}

const gonzalo = new Persona("Gonzalo");

console.log(gonzalo.obtenDatos())