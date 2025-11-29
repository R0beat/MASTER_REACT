const COCHE = require('./clases');

class Autobus extends COCHE{
    constructor(modelo, velocidad, antiguedad) {
        super(modelo, velocidad, antiguedad);
        this.altura =5;
    }

    mostrarAltura(){
        return `La altura del bus es : ${this.altura}`
    }
}

const autobus1 = new Autobus('BMW', 200, 2017);
const div = document.getElementById('main');

div.innerHTML += `El autobús avanza: ${autobus1}`;

console.log(autobus1);