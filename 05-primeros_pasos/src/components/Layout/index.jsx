import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { Footer } from '../Footer'
import './styles.css';

export const Layout = ({ rutas = [], themes=[] }) => {

    return (
        <>
            <Header rutas={rutas} themes={themes}/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
