import React from 'react'
import { Navbar } from '../Navbar'

export const Header = ({ rutas = [], themes=[] }) => {
    return (
        <header>
            <Navbar rutas={rutas} themes={themes} />
        </header>
    )
}
