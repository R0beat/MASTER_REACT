import React from 'react'
import Styles from './styles.module.css';

export const Button = ({ element = 'btn', modifier = 'btn--primary', className = '', type = 'button', children, onClick = null, expanded = false, disabled = false }) => {

    return (
        <button
            className={`${Styles[element]} ${Styles[modifier]} ${expanded && `${Styles['expanded']}`} ${(disabled && `${Styles['disabled']}`)} ${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled}>
            {children}
        </button>
    )

}
