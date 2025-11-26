const COCHE = require('./clases');

class Autobus extends COCHE{
    constructor(modelo, velocidad, antiguedad) {
        super(modelo, velocidad, antiguedad);
    }
}

const autobus1 = new Autobus('BMW', 200, 2017);
const div = document.getElementById('main');

console.log(autobus1);
div.innerHTML += `El autobús avanza: ${autobus1}`;