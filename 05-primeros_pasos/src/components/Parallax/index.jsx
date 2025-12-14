import React from 'react';
import Styles from './styles.module.css';

export const Parallax = () => {
    return (
        <>
            <section className={Styles['parallax']}>
                <div className={Styles['parallax__overlay']}>
                    <h1>Parallax React</h1>
                    <p>Fondo transparente y difuminado</p>
                </div>
            </section>

            <div className={Styles['parallax__content']}>
                Este div solo está aquí para permitir el scroll.
            </div>

            <section className={Styles['parallax']} />
        </>
    );
};