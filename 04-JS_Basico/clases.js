let datos = document.getElementById('main');
class Coche {
    constructor(modelo, velocidad, anio) {
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.anioi = anio
    }

    aumentarVelocidad() {
        this.velocidad += 1;
    }

    disminuirVelocidad() {
        this.velocidad += 1;
    }

}

const coche1 = new Coche('BMW', 200, 2017)
const coche2 = new Coche('AUDI', 100, 2018)
const coche3 = new Coche('MERCEDES', 200, 2021)
const coche4 = new Coche('RENAULT', 200, 2022)

