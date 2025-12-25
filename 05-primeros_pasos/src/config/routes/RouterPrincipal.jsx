import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Plantilla } from "../../pages/Plantilla";
import { Layout, Loading } from "../../components";
import { Home, NotFound } from "../../pages";
import { Hooks } from "../../modules/REACT/Hooks";
import { Eventos } from "../../modules/REACT/Eventos";
import { Blog } from "../../modules/Blog";
import { Peliculas } from "../../modules/Peliculas";

const THEMES = {
    "0": "/assets/css/florencia/style.css",
    "1": "/assets/css/roma/style.css",
    "2": "/assets/css/venecia/style.css",
};

const RUTAS = [
    { ruta: "/", nombreRuta: "Inicio" },
    {
        ruta: '',
        nombreRuta: 'Ejemplos',
        submenus: [
            { ruta: '/blog', nombreRuta: 'Blog' },
            { ruta: '/peliculas', nombreRuta: 'Peliculas' },
        ],
    },
    { ruta: "/plantilla", nombreRuta: "Plantilla" },
    {
        ruta: '',
        nombreRuta: 'REACT',
        submenus: [
            { ruta: '/eventos', nombreRuta: 'Eventos' },
            { ruta: '/hooks', nombreRuta: 'Hooks' },
        ],
    },
];

export const RouterPrincipal = () => {
    const { styleApp } = useSelector(state => state.system);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let link = document.getElementById("theme-style");

        if (!link) {
            link = document.createElement("link");
            link.id = "theme-style";
            link.rel = "stylesheet";
            document.head.appendChild(link);
        }

        link.href = THEMES[styleApp] ?? THEMES["0"];
    }, [styleApp]);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    return (
        <>
            <Loading isLoading={loading} />
            {
                !loading && (
                    <BrowserRouter>
                        <Routes>

                            {/* Rutas con Layout */}
                            <Route element={<Layout rutas={RUTAS} />}>
                                <Route path="/" element={<Home />} />
                                <Route path="/plantilla" element={<Plantilla />} />
                                <Route path="/blog" element={<Blog/>} />
                                <Route path="/eventos" element={<Eventos />} />
                                <Route path="/hooks" element={<Hooks />} />
                                <Route path="/peliculas" element={<Peliculas />} />
                            </Route>

                            {/* Rutas sin Layout */}
                            <Route path="*" element={<NotFound />} />

                        </Routes>
                    </BrowserRouter>
                )
            }
        </>
    );
};