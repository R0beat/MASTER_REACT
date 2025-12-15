import React from 'react'
import Styles from './styles.module.css';
import { Button } from '../Button';

export const HeroDiagonal = ({img ='https://picsum.photos/id/1/1200'}) => {
    return (
        <section className={Styles.hero}>
            {/* Panel izquierdo */}
            <div className={Styles.left}>
                <span className={Styles.badge}></span>

                <h1 className={Styles.title}>
                    Assassin’s Creed<br />
                    <span>The Ezio Collection</span>
                </h1>

                <p className={Styles.text}>
                    Assassin’s Creed The Ezio Collection llega a Nintendo Switch.
                    Haz historia como el legendario Ezio Auditore a través de
                    Florencia, Roma y Constantinopla.
                </p>

                <Button variant='primary'>
                    Cómpralo ahora
                </Button>
            </div>

            {/* Imagen derecha */}
            <div className={Styles.right}>
                <img
                    src={img}
                    alt="Assassin"
                />
            </div>
        </section>
    );
}
