import React from 'react'
import Styles from './styles.module.css';
import { Button } from '../Button';

export function Hero({ children, className }) {
    return (
        <section className={`${Styles['hero']} ${className}}`}>
            <div className={Styles['hero__background']} />
            <div className={Styles['hero__overlay']} />
            <div className={Styles['hero__content']}>
                {children}
            </div>
        </section>
    );
}