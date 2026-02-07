import React, { useEffect } from 'react';
import Styles from './styles.module.css';
import { Alert, Button } from '../../../../components';
import { guardarEnStorage, obtenerLocalStorage } from '../../../../utils/guardarEnStorage';

export const ListadoPeliculas = ({ className, valor = [], setValor, nameLocalStorage }) => {

    useEffect(() => {
        const peliculas = JSON.parse(localStorage.getItem(nameLocalStorage)) || [];
        setValor(peliculas);
    }, []);

    useEffect(() => {
        const data = obtenerLocalStorage(nameLocalStorage);
        setValor(data);
    }, []);

    if (!Array.isArray(valor)) {
        return (
            <Alert variant="danger">
                Error de datos: películas no es un arreglo
            </Alert>
        );
    }

    const borrarPelicula = (id) => {
        setValor(prev => {
            const nuevo = prev.filter(p => p.id !== id);
            guardarEnStorage(nameLocalStorage, nuevo);
            return nuevo;
        });
    }

    return (
        <div className='span-12'>
            {valor.length > 0 ? (
                valor.map((elemento, index) => (
                    <article className={`${Styles.pelicula} ${className}`} key={index}>
                        <h3 className={Styles.pelicula__title}>{elemento.titulo}</h3>
                        <hr />
                        <p className={Styles.pelicula__descripcion}>{elemento.descripcion}</p>
                        <div className={Styles.pelicula__actions}>
                            <Button variant="danger" onClick={() => borrarPelicula(elemento.id)} >Eliminar</Button>
                            <Button variant="info">Editar</Button>
                        </div>
                    </article>
                ))
            ) : (
                <Alert variant="secondary">
                    No existen datos
                </Alert>
            )}
        </div>
    );

};