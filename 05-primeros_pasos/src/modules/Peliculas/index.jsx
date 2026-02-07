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

                <div className="span-12 span-md-6 span-lg-9 d-grid col-12 gap-2">
                    <ListadoPeliculas
                        className={"span-12 span-md-9"}
                        valor={peliculas}
                        setValor={setPeliculas}
                        nameLocalStorage={nameLocalStorage}
                    />
                </div>

                <aside className={`${Styles.sidebar} span-12 span-md-6 span-lg-3 d-grid col-3 gap-2 mb-1`}>
                    <BuscadorPeliculas />
                    <CrearPeliculas
                        valor={formulario}
                        setValor={setFormulario}
                        setArray={setPeliculas}
                        nameLocalStorage={nameLocalStorage}
                    />
                </aside>

            </div>
        </div>
    );
}