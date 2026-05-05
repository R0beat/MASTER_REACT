import React, { useState } from 'react';
import Styles from './styles.module.css';
import { ListadoPeliculas } from './components/ListadosPeliculas';
import { BuscadorPeliculas } from './components/BuscadorPeliculas';
import { CrearPeliculas } from './components/CrearPeliculas';

const nameLocalStorage = 'peliculasStorage';

export const Peliculas = () => {

    const [peliculas, setPeliculas] = useState([]);
    const [formulario, setFormulario] = useState({
        titulo: '',
        descripcion: ''
    });

    return (
        <div className="container">
            <div className="d-grid col-12 gap-2">
                <div className="span-12">
                    <BuscadorPeliculas />
                </div>
                {/* <div className="span-12 span-md-6 span-lg-3">
                    <CrearPeliculas
                        valor={formulario}
                        setValor={setFormulario}
                        setArray={setPeliculas}
                        nameLocalStorage={nameLocalStorage}
                    />
                </div> */}
                <div className='span-12'>
                    <ListadoPeliculas
                        className={"span-12 span-md-6 span-lg-4"}
                        valor={peliculas}
                        setValor={setPeliculas}
                        nameLocalStorage={nameLocalStorage}
                    />
                </div>

            </div>
        </div>
    );
}