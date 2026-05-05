import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Styles from './styles.module.css';

export const Modal = ({ children, onClose, variant = 'modal--secondary', fluid = '' }) => {

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div className={`${Styles.modal} fade-enter`}>
            <div className={`${Styles.modal__content} ${Styles[fluid]}`}>
                <div className={`${Styles.modal__header} ${Styles[variant]}`}>
                    <button className={Styles.modal__close} onClick={onClose} aria-label="Cerrar modal" > <AiOutlineClose /></button>
                </div>
                <div className={Styles.modal__body}>
                    {children}
                </div>
            </div>
        </div>
    );
};
