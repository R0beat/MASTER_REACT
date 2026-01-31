import React from 'react';
import Styles from './styles.module.css';
import { GiFire } from 'react-icons/gi';

export const Loading = ({ isLoading = false, text = 'Cargando...' }) => {
    if (!isLoading) return null;
    return (
        <div className={Styles.loading}>
            <div className={Styles.animus}>
                <div className={Styles.icon}>
                    <GiFire />
                </div>
            </div>

            <p className={Styles.text}>{text}</p>
        </div>
    )
}
