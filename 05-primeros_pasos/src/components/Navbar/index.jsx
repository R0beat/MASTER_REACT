import React, { useState } from 'react'
import Styles from './styles.module.css';
import { NavLink } from 'react-router-dom';
import Logo from '/assets/img/svg/blog.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeToggle } from '../ThemeToggle';
import { GiFireZone } from "react-icons/gi";

export const Navbar = ({ rutas = [] }) => {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <header className={Styles['nav']}>
            <div className={Styles['nav__container']}>
                {/* Logo */}
                <GiFireZone className={Styles['nav__logo']} />
                {/* <img  src={Logo} alt="Assassin's Creed" /> */}
                {/* Menu */}
                <nav className={`${Styles['menu']} ${open ? Styles.active : ""}`}>
                    {
                        Array.isArray(rutas) && (
                            rutas.map((elemento, index) => (
                                <NavLink className={Styles['menu__link']} key={index} to={elemento.ruta} onClick={closeMenu}>{elemento.nombreRuta}</NavLink>
                            ))
                        )
                    }
                </nav>

                {/* Actions */}
                <div className={Styles['actions']}>
                    <ThemeToggle />
                    <button
                        className={Styles['toggle']}
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu" >
                        <GiHamburgerMenu />
                    </button>
                </div>

            </div>
        </header>
    );
}
