import React from 'react'
import Styles from './styles.module.css';
import { Button } from '../Button';
import { Parallax } from '../Parallax';
export const BlogCard = (
    { category = 'Noticias',
        title = 'Título del Blogpost',
        text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolore itaque placeat fugiat unde a similique ipsa, temporibus quisquam doloribus deleniti optio numquam.',
        image = 'https://picsum.photos/600/400',
        onReadMore,
        className,
        variant = 'primary' }) => {
    return (
        <section className={`d-grid col-12 gap-2 ${Styles['blog-card']} ${className}`}>
            <div className={`span-12 span-md-8 ${Styles['blog-card__media']}`}>
                <span className={`${Styles['blog-card__category']}`} >{category}</span>
                <img className='blog-card__media' src={image} alt={title} />
            </div>


            <div className={`span-12 span-md-4`}>
                <h2 className={`${Styles['blog-card__title']}`} >{title}</h2>
                <hr />
                <p className={`${Styles['blog-card__text']} text-justify`}>{text}</p>
                <Button variant={`btn-${variant}`}>Saber m&#225;s</Button>
            </div>
            <div className="span-12">
                <Parallax />
            </div>
        </section>
    )
}
