import React from 'react';
import './styles.css';

export const LoaderSpinner = ({ size = 80, variant = 'templar', center = false, className}) => {
    return (
        <div className={`${className}`}>
            <div
                className={`ac-loader ${variant} ${center ? 'ac-loader-center ' : ''}`}
                style={{ width: size, height: size }}>
                <span />
                <span />
                <span />

            </div>
            <p>Cargando...</p>
        </div>

    )
}
