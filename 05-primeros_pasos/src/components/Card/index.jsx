import React from 'react';
import Styles from './styles.module.css';

export const Card = ({ className, children}) => {

    return (
        <div className={`${Styles['card']} ${className}`} >
            {children}
        </div>
    )
}
