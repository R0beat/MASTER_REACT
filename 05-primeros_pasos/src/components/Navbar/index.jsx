import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Styles from './styles.module.css';
import { IoIosMenu } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { ThemeToggle } from '../ThemeToggle';
import { GiFire } from "react-icons/gi";

export function Navbar({ rutas = [], logo = 'LOGO',themes=[] }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(null);

    const toggleSubmenu = (index) => {
        setSubmenuOpen(submenuOpen === index ? null : index);
    };

    return (
        <header className={Styles.header}>
            <div className={Styles.header__container}>
                {/* Logo */}
                <div className='d-flex gap-2 justify-self-center align-self-center '>

                    <div className={Styles.header__logo}>
                        <Link to="/">
                            <GiFire className={Styles['color--logo']} />
                        </Link>
                    </div>

                    {/* Botón hamburguesa */}
                    <button className={Styles.header__toggle} onClick={() => setMenuOpen(!menuOpen)}>
                        <IoIosMenu />
                    </button>
                </div>

                {/* Menú */}
                <nav className={`${Styles.nav} ${menuOpen ? Styles['nav--open'] : ''}`}>
                    <ul className={Styles.nav__list}>
                        {rutas?.map((item, index) => (
                            <li key={index} className={Styles.nav__item}>
                                {!item.submenus ? (
                                    <Link to={item.ruta} className={Styles.nav__link} onClick={() => setMenuOpen(false)}>
                                        {item.nombreRuta}
                                    </Link>
                                ) : (
                                    <>
                                        <button className={Styles.nav__link} onClick={() => toggleSubmenu(index)}>
                                            {item.nombreRuta}
                                            <span className={`${Styles.nav__arrow} ${submenuOpen === index ? Styles['nav__arrow--open'] : ''}`}>
                                                <MdOutlineArrowDropDown />
                                            </span>
                                        </button>

                                        <ul className={`${Styles.submenu} ${submenuOpen === index ? Styles['submenu--open'] : ''}`}>
                                            {item.submenus.map((sub, i) => (
                                                <li key={i} className={Styles.submenu__item}>
                                                    <Link to={sub.ruta} className={Styles.submenu__link} onClick={() => { setMenuOpen(false); setSubmenuOpen(null); }}>
                                                        {sub.nombreRuta}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <ThemeToggle themes={themes}/>
            </div>
        </header>
    );
}
