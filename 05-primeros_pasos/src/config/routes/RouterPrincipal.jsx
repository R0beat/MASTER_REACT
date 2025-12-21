import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { Conceptos } from "../../modules/REACT/pages/Conceptos";
import { Plantilla } from "../../pages/Plantilla";
import { Layout } from "../../components";
import { Home, NotFound } from "../../pages";
import { Blogs } from "../../modules/BLOG/pages/Blogs";
import { Eventos } from "../../modules/REACT/pages/Eventos";

const THEMES = {
    "0": "/assets/css/florencia/style.css",
    "1": "/assets/css/roma/style.css",
    "2": "/assets/css/venecia/style.css",
};

export const RouterPrincipal = () => {
    const { styleApp } = useSelector(state => state.system);

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

    return (
        <BrowserRouter>
            <Routes>

                {/* Rutas con Layout */}
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/react" element={<Conceptos />} />
                    <Route path="/plantilla" element={<Plantilla />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/eventos" element={<Eventos />} />
                </Route>

                {/* Rutas sin Layout */}
                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
};