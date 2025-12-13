import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '../ThemeToggle'

const rutas = [
    { icon: "flaticon-001-facebook", link: "" },
    { icon: "flaticon-002-twitter", link: "" },
    { icon: "flaticon-011-instagram", link: "" },
    { icon: "flaticon-008-youtube", link: "" },
    { icon: "flaticon-010-linkedin", link: "" },
]

export const Header = () => {
    return (
        <header>
            <nav className='nav'>
               
                <Link className='nav__link'  to='/'></Link>
                <div className='nav__right'>
                    <a className='nav__profile' href=""></a>
                    <div className='media'>
                        {
                            rutas.map(({ icon, link }, i) => (
                                <a key={i} href={link}><span className={`${icon} media__icon`}></span></a>
                            ))
                        }
                         <ThemeToggle />
                    </div>
                </div>
            </nav>
        </header>
    )
}
