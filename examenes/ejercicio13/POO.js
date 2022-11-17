class Persona {
    // Private ---> +
    #nombrePrivado;

    // Protected --> _
    _valorProtegido = true;
    constructor(name, age, isDeveloper){
        this.#nombrePrivado = name;
        this.age = age;
        this.isDeveloper = isDeveloper;
    }

    saludo(){
        console.log(`Hola te estoy saludando... ${this.name} ${this.age}`);
    }

    // Getter y setter
    getName(){
        return this.#nombrePrivado;
    }

    setName(name){
        return this.#nombrePrivado = name;
    }
}

const newPersona = new Persona("Carlos", 21, true);

console.log(newPersona.name);
newPersona.saludo();

console.log(typeof newPersona)
console.log(newPersona instanceof Persona);

console.log(newPersona.setName("Gonzalodasf"));
console.log(newPersona.getName())

class Desarrollador extends Persona {
    constructor(nombrePersona, edad, isDeveloper, lenguaje){
        super(nombrePersona, edad, isDeveloper)
        this.lenguaje = lenguaje
    }

    saludo(){
        // Polimorfismo --> varias formas
        super.saludo()
        console.log("Soy desarrolladorJs")
    }
}

const desarrolladorJs = new Desarrollador("Gonzalo", 21, true, "Javascript");
console.log(desarrolladorJs)
desarrolladorJs.saludo()