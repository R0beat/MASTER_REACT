let nombre = 'Roberto Gonz\u00e1lez';
let altura = 165;

let concatenacion = nombre + ' ' + altura;
let datos = document.getElementById('main');

let arreglo = ["Stone, John", "Wong, Mia", "Li, Ang"];

// datos.innerHTML= concatenacion;

datos.innerHTML += '<h2 class="text-danger">FUNCTIONS</h2>';

const mostarDatos = () => {

    // templete string
    let caja = `
        <h3>Esta en una caja de datos</h3>
        <p>Mi nombre es: ${nombre} </p>
        <p>Mi altura es: ${altura} cm</p>
    `;

    return caja;
}


function imprimeDatos(nombre) {
    datos.innerHTML += mostarDatos();
}

imprimeDatos()

datos.innerHTML += '<h2 class="text-danger">IF</h2>';

if (altura >= 190) {
    datos.innerHTML += '<p class="text-success"> Eres alto</p>';
} else {
    datos.innerHTML += '<p class="text-warning"> Eres bajito</p>';
};

datos.innerHTML += '<h2 class="text-danger">FOR</h2>';

for (let index = 0; index < 10; index++) {
    datos.innerHTML += `<p> i = ${index}</p>`;
}


datos.innerHTML += '<h2 class="text-danger">ARRAY</h2>';

datos.innerHTML += '<p>["Stone, John","Wong, Mia","Li, Ang"]</p>';

datos.innerHTML += '<h2 class="text-danger">RECORRIENDO ARREGLOS</h2>';

for (let index = 0; index < arreglo.length; index++) {
    datos.innerHTML += `
        <ul>
            <li>${arreglo[index]}</li>
        </ul>`;
}

arreglo.forEach(element => {
    datos.innerHTML += `
        <ul class='text-info'>
            <li>${element}</li>
        </ul>`;
});

arreglo.map(element => {
    datos.innerHTML += `
        <ul class='text-warning'>
            <li>${element}</li>
        </ul>`;
})

datos.innerHTML += '<h2 class="text-danger">OBJECTOS</h2>';

const coche = {
    modelo: 'Mercedes Benz',
    maxima: 500,
    anio: 2020
}

datos.innerHTML += `
  <p class='text-primary'>El modelo es: ${coche.modelo}</p>
  <p class='text-info'>La velocidad del carro es: ${coche.maxima}</p>
  <p class='text-success'>El año es: ${coche.anio}</p>
`;

datos.innerHTML += '<h2 class="text-danger">PROMESAS</h2>';

const saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = 'Hola mundo chavales !!';

        saludo = false;

        if (saludo) {
            resolve(saludo)
        } else {
            reject('No hay saludo disponible');
        }
    }, 2000)
})

saludar.then(resultado => {
    alert(resultado)
})
    .catch(err => {
        alert(err)
    })