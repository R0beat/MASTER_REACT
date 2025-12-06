import React from 'react'
import Styles from './styles.module.css'

export const Card = ({ className, children ,variant}) => {

    const variantList = {
        "primary": `${Styles.card} ${Styles.primary}`,
        "secondary": `${Styles.card} ${Styles.secondary}`,
        "success": `${Styles.card} ${Styles.success}`,
        "danger": `${Styles.card} ${Styles.danger}`,
        "warning": `${Styles.card} ${Styles.warning}`,
        "info": `${Styles.card} ${Styles.info}`,
        "light": `${Styles.card} ${Styles.light}`,
        "dark": `${Styles.card} ${Styles.dark}`,
        "gray": `${Styles.card} ${Styles.gray}`,
    }

    const vaiantSelected = variantList[variant] ||  `${Styles.card}`

    return (
        <div className={`${vaiantSelected} ${className}`} >
            {children}
        </div>
    )
}
