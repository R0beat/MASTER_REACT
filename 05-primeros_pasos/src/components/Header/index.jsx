import React from 'react'
import './styles.css'
import { Navbar } from '../Navbar'

const rutas = [
    { ruta: "/", nombreRuta: "Inicio" },
    { ruta: "/blogs", nombreRuta: "Blog" },
    { ruta: "/plantilla", nombreRuta: "Plantilla" },
    { ruta: "/eventos", nombreRuta: "React" },
]

export const Header = () => {
    return (
        <header>
            <Navbar rutas={rutas} />
        </header>
    )
}
