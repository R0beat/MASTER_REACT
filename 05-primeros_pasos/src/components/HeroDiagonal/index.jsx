import React from 'react'
import Styles from './styles.module.css';
import { Button } from '../Button';
import Img from '/assets/img/jpg/react-4k.jpg';
import { Link } from 'react-router-dom';

export const HeroDiagonal = ({
    title = 'Lorem ipsum.',
    text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi error aliquam voluptates hic nostrum totam ipsum eaque fuga architecto reprehenderit rerum, voluptatem sapiente? Rem delectus asperiores quibusdam quia dolores alias.',
    button = 'Conocer m\u00e1s',
    to = '#',
    img = Img }) => {
    return (
        <section className={Styles.hero}>
            {/* Panel izquierdo */}
            <div className={Styles.left}>
                <span className={Styles.badge}></span>
                <h1 className={Styles.title}>{title}</h1>
                <p className={Styles.text}>{text}</p>
                <Button variant='info'>
                    <Link to={to}>{button}</Link>
                </Button>
            </div>

            {/* Imagen derecha */}
            <div className={Styles.right}>
                <img src={img} alt="Assassin" />
            </div>
        </section>
    );
}
