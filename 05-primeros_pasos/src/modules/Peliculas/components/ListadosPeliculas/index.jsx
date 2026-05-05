import React, { useEffect, useState } from 'react';
import Styles from './styles.module.css';
import { Alert, Button } from '../../../../components';
import { guardarEnStorage, obtenerLocalStorage } from '../../../../utils/guardarEnStorage';
import { ModalEdicion } from '../ModalEdicion';

export const ListadoPeliculas = ({ className, valor = [], setValor, nameLocalStorage }) => {

    const [editar, setEditar] = useState(0);
    const [mostarForm, setMostrarForm] = useState(false)

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

    const editarPelicula = (id) => {
        setEditar(id)
        setMostrarForm(true)
    }

    return (
        <div className='d-grid col-12 gap-2' >

            {valor.length > 0 ? (
                valor.map((elemento, index) => (

                    <article className={`${Styles.pelicula} ${className}`} key={index}>
                        <h3 className={Styles.pelicula__title}>{elemento.titulo}</h3>
                        <hr />
                        <p className={Styles.pelicula__descripcion}>{elemento.descripcion}</p>
                        <div className={Styles.pelicula__actions}>
                            <Button variant="danger" onClick={() => borrarPelicula(elemento.id)} >Eliminar</Button>
                            <Button variant="info" onClick={() => editarPelicula(elemento.id)}>Editar</Button>
                        </div>
                        {
                            editar === elemento.id && (
                                mostarForm && (
                                    <ModalEdicion
                                        setValor={setValor}
                                        nameLocalStorage={nameLocalStorage}
                                        elemento={elemento}
                                        onClose={() => {
                                            setMostrarForm(false);
                                            setEditar(0);
                                        }}
                                    />
                                )
                            )
                        }
                    </article>
                ))
            ) : (
                <Alert className={'span-12'} variant="secondary">
                    No existen datos
                </Alert>
            )}
        </div>
    );

};