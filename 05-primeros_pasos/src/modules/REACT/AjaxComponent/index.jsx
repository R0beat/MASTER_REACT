import React, { useEffect, useState } from 'react'
import { BloqueCodigo, Hero, Table } from '../../../components';

const cabeceras = ["#", "Name", "UserName", "Website", "Number"]
const campos = ["index", "name", "username", "website", "phone"];

// const render = {
//     actions: (_, row) => (
//         <div className="table__actions">
//             <button className="table__btn table__btn--edit" onClick={() => console.log('Editar', row.id)}>
//                 Editar
//             </button>
//             <button className="table__btn table__btn--delete" onClick={() => console.log('Eliminar', row.id)} >
//                 Eliminar
//             </button>
//         </div>
//     )
// };

const codeAjax = `const [usuarios, setUsarios] = useState([]); //Iniciamos el estado como arreglo vacio

useEffect(() => { //Ejecutamos la funcion
        obtenerUsuarios();
}, [])

const obtenerUsuarios = () => {
    fetch('https://jsonplaceholder.typicode.com/users') //EndPoint de la api
        .then(resp => resp.json()) //convertimos la respuesta en json
        .then(
            res => { setUsarios(res); // set de usuario},
            error => { console.log(error); //mostramos el error }
        )
}
        
console.log(usuarios)`;

export const AjaxComponent = () => {

    const [usuarios, setUsarios] = useState([]);

    useEffect(() => {
        obtenerUsuarios();
    }, [])

    // const obtenerUsuarios = () => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(resp => resp.json())
    //         .then(
    //             res => {
    //                 setUsarios(res);
    //             },
    //             error => {
    //                 console.log(error);
    //             }
    //         )
    // }

    const obtenerUsuarios = async () => {
        const peticion = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json());
        setUsarios(peticion);
    }

    return (
        <>
            <Hero>
                <h1>Ajax</h1>
                <hr />
                <p>
                    Es una t&#233;cnica de desarrollo web que permite que una p&#225;gina web se comunique con el servidor en segundo plano, sin recargar toda la p&#225;gina.
                    Su nombre viene de <i> <b>A</b>synchronous <b>J</b>avaScript <b>A</b>nd <b>X</b>ML</i>, aunque hoy en día ya no se usa XML, sino JSON principalmente.
                </p>
            </Hero>
            <div className='container d-grid col-12 gap-3'>
                <div className="span-12 span-md-6">
                    <BloqueCodigo code={codeAjax} language='jsx' />
                </div>
                <div className="span-12 span-md-6">
                    <Table cabeceras={cabeceras} campos={campos} data={usuarios} striped />
                </div>
            </div>
        </>
    )
}
