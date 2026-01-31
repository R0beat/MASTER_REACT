import React, { useState } from 'react';
import Styles from './styles.module.css';
import { Button } from '../../../../components'

export const ListadoPeliculas = ({ className }) => {




    return (
        <>
            <article className={`${Styles.pelicula} ${className}`}>
                <h3 className={Styles.pelicula__title}>Desarrollo Web</h3>
                <hr />
                <p className={Styles.pelicula__descripcion}>Lorem ipsum dolor sit amet.</p>
                <div className={Styles.pelicula__actions}>
                    <Button variant="danger">Eliminar</Button>
                    <Button variant="info">Editar</Button>
                </div>
            </article>
        </>
    )
}
