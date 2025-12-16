import React from 'react';
import Styles from './styles.module.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className={Styles['footer']}>
            <div className={Styles['footer__overlay']} />

            <div className={Styles['footer__container']}>
                {/* Brand */}
                <div className={Styles['footer__brand']}>
                    <h2>Lorem</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                {/* Navigation */}
                <nav className={Styles['footer__nav']}>
                    <Link className={Styles['footer__nav-link']} to="#">Inicio</Link>
                    <Link className={Styles['footer__nav-link']} to="#">Blog</Link>
                    <Link className={Styles['footer__nav-link']} to="#">Plantilla</Link>
                    <Link className={Styles['footer__nav-link']} to="#">Contacto</Link>
                </nav>

                {/* Social */}
                <div className={Styles['footer__social-block']}>
                    <span className={Styles['footer__social']}>Síguenos</span>
                    <div className={Styles['footer__icons-container']}>
                        <Link to="#" className={Styles['footer__icon']}>FB</Link>
                        <Link to="#" className={Styles['footer__icon']}>TW</Link>
                        <Link to="#" className={Styles['footer__icon']}>YT</Link>
                    </div>
                </div>
            </div>

            <div className={Styles['footer__bottom']}>
                <p>
                    &#169; {new Date().getFullYear()} — Roberto Gonz&#225;lez Arriaga
                </p>
            </div>
        </footer>
    )
}
