import React, { useState } from 'react';
import Styles from './styles.module.css';
import { ListadoPeliculas } from './components/ListadosPeliculas';
import { BuscadorPeliculas } from './components/BuscadorPeliculas';
import { CrearPeliculas } from './components/CrearPeliculas';


export const Peliculas = () => {

    const [valores, setValores] = useState({
        titulo: '',
        descripcion: ''
    });

    return (
        <div className="container">
            <div className='d-grid col-12 gap-2'>
                <div className='span-12 span-md-6 span-lg-9 d-grid col-12 gap-2'>
                    <div className={"span-12 span-md-6 span-lg-4"}>
                        <ListadoPeliculas />
                    </div>
                </div>

                <aside className={`${Styles.sidebar} span-12 span-md-6 span-lg-3 d-grid col-3 gap-2 mb-1`}>
                    <BuscadorPeliculas />
                    <CrearPeliculas valor={valores} setValor={setValores} />
                </aside>
            </div>
        </div>
    );
};