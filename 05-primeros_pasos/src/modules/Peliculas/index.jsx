import React from 'react'
import { Button, Input } from '../../components';
import Styles from './styles.module.css';


export const Peliculas = () => {
    return (
        <div className="container">
            <div className='d-grid col-12 gap-2'>
                <div className='span-12 span-md-6 span-lg-9 d-grid col-12 gap-2'>
                    <div className="span-12 span-md-6 span-lg-4">
                        <article className={Styles.pelicula}>
                            <h3 className={Styles.pelicula__title}>Desarrollo Web</h3>
                            <hr />
                            <p className={Styles.pelicula__descripcion}>Lorem ipsum dolor sit amet.</p>
                            <div className={Styles.pelicula__actions}>
                                <Button variant="danger">Eliminar</Button>
                                <Button variant="info">Editar</Button>
                            </div>
                        </article>
                    </div>
                    <div className="span-12 span-md-6 span-lg-4">
                        <article className={Styles.pelicula}>
                            <h3 className={Styles.pelicula__title}>Desarrollo Web</h3>
                            <hr />
                            <p className={Styles.pelicula__descripcion}>Lorem ipsum dolor sit amet.</p>
                            <div className={Styles.pelicula__actions}>
                                <Button variant="danger">Eliminar</Button>
                                <Button variant="info">Editar</Button>
                            </div>
                        </article>
                    </div>
                    <div className="span-12 span-md-6 span-lg-4">
                        <article className={Styles.pelicula}>
                            <h3 className={Styles.pelicula__title}>Desarrollo Web</h3>
                            <hr />
                            <p className={Styles.pelicula__descripcion}>Lorem ipsum dolor sit amet.</p>
                            <div className={Styles.pelicula__actions}>
                                <Button variant="danger">Eliminar</Button>
                                <Button variant="info">Editar</Button>
                            </div>
                        </article>
                    </div>

                </div>

                <aside className={`${Styles.sidebar} span-12 span-md-6 span-lg-3 d-grid col-3 gap-2 mb-1`}>
                    <article className={`${Styles.pelicula} span-3`}>
                        <h3 className={Styles.pelicula__title}>Buscador</h3>
                        <hr />
                        <Input placeholder="Buscar película" />
                        <Button variant="info">Buscar</Button>
                    </article>

                    <article className={`${Styles.pelicula} span-3`}>
                        <h3 className={Styles.pelicula__title}>Añadir película</h3>
                        <hr />
                        <Input placeholder="Título" />
                        <Input type="textarea" placeholder="Descripción" />
                        <Button variant="success">Guardar</Button>
                    </article>
                </aside>

            </div>
        </div>
    );
};
