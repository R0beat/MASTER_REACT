import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Conceptos } from '../../modules/REACT/pages/Conceptos'
import { Plantilla } from '../../pages/Plantilla'
import { Layout } from '../../components'
import { Home, NotFound } from '../../pages'
import { useSelector } from 'react-redux'


export const RouterPrincipal = () => {
    const { styleApp } = useSelector(state => state.system);

    useEffect(() => {
        let link = document.getElementById("theme-style");
        // si no existe, lo creamos solo UNA VEZ
        if (!link) {
            link = document.createElement("link");
            link.id = "theme-style";
            link.rel = "stylesheet";
            link.type = "text/css";
            document.head.appendChild(link);
        }
        (styleApp === '1') ? link.href = '/assets/css/gruvbox/style.css' : link.href = '/assets/css/material/style.css';
    }, [styleApp]);

    return (
        <BrowserRouter>
            <Routes>

                {/* Rutas que SÍ llevan Layout */}
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/react' element={<Conceptos />} />
                    <Route path='/plantilla' element={<Plantilla />} />
                </Route>

                {/* Rutas que NO llevan Layout */}
                <Route path='*' element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    )
}
