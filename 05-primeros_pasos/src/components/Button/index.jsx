import React from 'react'
import Styles from './styles.module.css';

export const Button = ({ variant = 'default', modifier = '', className = '', type = 'button', children, onClick = null, expanded = false, disabled = false, onDoubleClick = null }) => {

    return (
        <button
            // className={`${Styles['btn']} ${Styles[`btn-${variant}`]} ${Styles[modifier]} ${expanded && `${Styles['expanded']}`} ${(disabled && `${Styles['disabled']}`)} ${className}`}
            className={[Styles.btn, Styles[`btn-${variant}`], modifier && Styles[modifier], expanded && Styles.expanded, disabled && Styles.disabled, className].filter(Boolean).join(' ')}
            type={type}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
            disabled={disabled}>
            {children}
        </button>
    )

}
