import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '../ThemeToggle'
import { Navbar } from '../Navbar'

const rutas = [
    { ruta: "/", nombreRuta: "Inicio" },
    { ruta: "/blogs", nombreRuta: "Blog" },
    { ruta: "/plantilla", nombreRuta: "Plantilla" },
]

export const Header = () => {
    return (
        <header>
            <Navbar rutas={rutas} />
        </header>
    )
}
