import React from 'react'
import Styles from './styles.module.css';

export const Button = ({  variant = 'btn-default', modifier = '', className = '', type = 'button', children, onClick = null, expanded = false, disabled = false }) => {

    return (
        <button
            className={`${Styles['btn']} ${Styles[`btn-${variant}`]} ${Styles[modifier]} ${expanded && `${Styles['expanded']}`} ${(disabled && `${Styles['disabled']}`)} ${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
            >
            {children}
        </button>
    )

}
