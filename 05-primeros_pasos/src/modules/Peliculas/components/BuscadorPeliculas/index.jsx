import React from 'react';
import Styles from './styles.module.css';
import { Button, Input } from '../../../../components';

export const BuscadorPeliculas = () => {
    return (
        <>
            <article className={`${Styles.pelicula} span-3`}>
                <h3 className={Styles.pelicula__title}>Buscador</h3>
                <hr />
                <Input placeholder="Buscar película" />
                <Button variant="info">Buscar</Button>
            </article>
        </>
    )
}
