import React from 'react'
import './styles.css'
import { Navbar } from '../Navbar'

export const Header = ({ rutas = [] }) => {
    return (
        <header>
            <Navbar rutas={rutas} />
        </header>
    )
}
