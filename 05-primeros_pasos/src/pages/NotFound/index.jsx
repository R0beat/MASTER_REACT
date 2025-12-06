import React from 'react'
import './style.css';

export const NotFound = () => {
    return (
        <main className="notfound">
            <img 
                src="/assets/img/svg/notFound.svg" 
                alt="Not Found"
                className="notfound__image"
            />
            <p className="notfound__text">Página no encontrada</p>
        </main>
    )
}
