import React from 'react';
import './styles.css';

export const Section = ({ title = "Título", content = "Contenido de ejemplo", className, variant = 'primary' }) => {

    const variants = {
        'primary': 'section--primary',
        'secondary': 'section--secondary',
        'success': 'section--success',
        'danger': 'section--danger',
        'warning': 'section--warning',
        'light': 'section--light',
        'dark': 'section--dark',
        'gray': 'section--gray',
    };

    const variantSelected = variants[variant] ?? variants['primary'];
    return (
        <section className={`section ${className}`}>
            <h3 className='section__title'>{title}</h3>
            <hr className={`section__hr ${variantSelected}`} />
            <p className='section__content'>{content}</p>
        </section>
    );
};