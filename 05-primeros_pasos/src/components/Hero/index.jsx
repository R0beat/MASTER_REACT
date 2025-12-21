import React from 'react'
import Styles from './styles.module.css';
import heroImg from '/assets/img/webp/react-fundamentals.webp';

export function Hero({ children, className = '', backgroundImage = heroImg }) {
    return (
        <section className={`${Styles.hero} ${className}`}>
            <div className={Styles.hero__background} style={{ backgroundImage: `url(${backgroundImage})` }} />
            <div className={Styles.hero__overlay} />
            <div className={Styles.hero__content}>
                {children}
            </div>
        </section>
    );
}