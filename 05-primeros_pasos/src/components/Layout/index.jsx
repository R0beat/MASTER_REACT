import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { Footer } from '../Footer'
import './styles.css';

export const Layout = ({ rutas = [] }) => {

    return (
        <>
            <Header rutas={rutas} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
