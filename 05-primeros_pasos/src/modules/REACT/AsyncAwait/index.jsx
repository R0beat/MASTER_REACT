import React, { useEffect, useState } from 'react'
import { Alert, BloqueCodigo, Card, Hero, LoaderSpinner, Table } from '../../../components';

const cabeceras = ["#", "Name", "UserName", "Website", "Number"]
const campos = ["index", "name", "username", "website", "phone"];

const codeAsync = `const obtenerUsuarios = async () => { // Declaramos una funcion Asincrona
  try {
    /*
    * fetch devuelve una promesa,
    * espera a que termina pausa la funcion y la guarda en resp
    */ 
    const resp = await fetch('https://reqres.in/api/users?page=1');
    // Esperamos a que convierta los datos en Json
    const data = await resp.json(); 
    // Mostamos el contenido por consola
    console.log(data.data);
    // Si la URL falla
  } catch (error) {
    // Mostramos el error por consola
    console.log(error);
  }
};`;

const codeLoad = `    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [errors, setErrors] = useState('');
    const obtenerUsuarios = async () => {
        setCargando(true);
        try {
            const peticion = await fetch('https://jsonplaceholder.typicode.com/users');
            const datos = await peticion.json();

            // Simular carga
            setTimeout(() => {
                setUsuarios(datos);
                setCargando(false);
            }, 3000);

        } catch (error) {
            setCargando(false);
            setErrors(error.message)
            console.error(error.message);
        }
    }
    return {
        <>
            {cargando
                ? <LoaderSpinner  size={80} center />
                : <Table data={usuarios} />
            }
            {errors && <Alert variant="danger"><p>{errors}</p></Alert>}
        </>
    }`;


export const AsyncAwait = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [errors, setErrors] = useState('');

    useEffect(() => {
        obtenerUsuarios();
    }, []);


    const obtenerUsuarios = async () => {
        setCargando(true);

        try {
            const peticion = await fetch('https://jsonplaceholder.typicode.com/users');
            const datos = await peticion.json();

            // Simular carga
            setTimeout(() => {
                setUsuarios(datos);
                setCargando(false);
            }, 3000);

        } catch (error) {
            setCargando(false);
            setErrors(error.message)
            console.error(error.message);
        }
    };

    return (
        <>
            <Hero>
                <h1>Async Await</h1>
                <hr />
                <p>
                    Es una forma más clara y moderna de trabajar con operaciones asíncronas en JavaScript, como peticiones a APIs,
                    lectura de datos o temporizadores, sin usar tantos <i>.then()</i>.
                </p>
            </Hero>

            <div className="container d-grid col-12 gap-2">
                <Card className={'span-12 span-md-6'}>
                    <h3>¿Qu&#233; es lo as&#237;ncrono?</h3>
                    <hr className='hr-header' />
                    <p className='text-justify'>
                        Una operaci&#225;n as&#237;ncrona es aquella que tarda tiempo y no bloquea el resto del programa, por ejemplo:
                    </p>
                    <ul className='list list--unordered'>
                        <li className='list__item '><b>fetch()</b> (peticiones HTTP).</li>
                        <li className='list__item '><b>setTimeout</b> (Timers).</li>
                        <li className='list__item '>Lectura de archivos.</li>
                        <li className='list__item '>Operaciones lentas sin bloquear la app.</li>
                    </ul>
                    <h3 className='mb-1'>¿Qu&#233; es <i>await</i>?</h3>
                    <p className='text-justify'>
                        La palabra clave await se usa dentro de una funci&#225;n async y sirve para:
                    </p>
                    <ul className='list list--unordered'>
                        <li className='list__item '>Esperar a que una Promise se resuelva.</li>
                        <li className='list__item '>Pausar el código sin bloquear la aplicaci&#225;n</li>
                    </ul>
                    <h3 className='mb-1'>Reglas importantes</h3>
                    <p className='text-justify'>
                        <i>await</i> solo puede usarse dentro de una funci&#225;n <i>async.</i>
                    </p>
                    <ul className='list list--unordered'>
                        <li className='list__item '>async, declara una función asíncrona.</li>
                        <li className='list__item '>await, espera el resultado de una Promise.</li>
                    </ul>
                </Card>
                <Card className={'span-12 span-md-6'}>
                    <BloqueCodigo code={codeAsync} language='js' />
                </Card>

                <Card className={'span-12 span-md-6 mb-2'}>
                    <>
                        {cargando
                            ? <LoaderSpinner className="place-items-center" size={80} center variant="assassin" />
                            : <Table cabeceras={cabeceras} campos={campos} data={usuarios} striped />
                        }
                        {errors && <Alert variant="danger"><p>{errors}</p></Alert>}
                    </>
                </Card>

                <Card className={'span-12 span-md-6 mb-2'}>
                    <BloqueCodigo code={codeLoad} language='jsx' />
                </Card>
            </div>
        </>
    )
}
