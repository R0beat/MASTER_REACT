import React from 'react'
import Styles from './styles.module.css';

export const Image = ({ src, alt, ratio, cover = true, frame = false }) => {
    const classes = [
        'img-fluid',
        frame && 'img-frame',
        cover ? 'img-cover' : 'img-contain'
    ].filter(Boolean).join(' ');


    if (ratio) {
        return (
            <div className={`ratio ratio-${ratio} ${frame ? 'img-frame' : ''}`}>
                <img src={src} alt={alt} className={cover ? 'img-cover' : 'img-contain'} />
            </div>
        );
    }


    return <img src={src} alt={alt} className={classes} />;
};