import React from 'react';
import { Button, Card, CardBlog, Hero, Section } from '../../../../components';
import { Link } from 'react-router-dom';
import Styles from './styles.module.css';
import { HeroDiagonal } from '../../../../components/HeroDiagonal';


export const Blogs = () => {
    return (
        <>
            <CardBlog
                title='T&#237;tulo del blog'
                text=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ea tempora, dolorem veritatis quae laborum nesciunt.
                        Minima, necessitatibus vel dolores architecto repellat fugiat obcaecati velit nostrum totam! Repudiandae, deserunt nesciunt.'
                variant={'primary'}
                className={'container mt-2'} />
            {/* <div className='container'>
                <section className='d-grid col-12 gap-3'>
                    <Card className={'span-12 span-md-4 mt-2'}>
                        <article className={Styles['posts__container']}>
                            <img className='img-fluid' src="https://picsum.photos/seed/picsum/600/400" alt="" />
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero lacus, consequat ut justo vel, accumsan porttitor nulla. Proin placerat posuere sem at ultricies. </p>
                            <Button variant='btn-primary'>
                                <Link>Leer M&#225;s</Link>
                            </Button>
                        </article>
                    </Card>
                    <Card className={'span-12 span-md-4 mt-2'}>
                        <article className={Styles['posts__container']}>
                            <img className='img-fluid' src="https://picsum.photos/seed/picsum/600/400" alt="" />
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero lacus, consequat ut justo vel, accumsan porttitor nulla. Proin placerat posuere sem at ultricies. </p>
                            <Button variant='btn-primary'>
                                <Link>Leer M&#225;s</Link>
                            </Button>
                        </article>
                    </Card>
                    <Card className={'span-12 span-md-4 mt-2'}>
                        <article className={Styles['posts__container']}>
                            <img className='img-fluid' src="https://picsum.photos/seed/picsum/600/400" alt="" />
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero lacus, consequat ut justo vel, accumsan porttitor nulla. Proin placerat posuere sem at ultricies. </p>
                            <Button variant='btn-primary'>
                                <Link>Leer M&#225;s</Link>
                            </Button>
                        </article>
                    </Card>
                    <Card className={'span-12 span-md-4'}>
                        <article className={Styles['posts__container']}>
                            <img className='img-fluid' src="https://picsum.photos/seed/picsum/600/400" alt="" />
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero lacus, consequat ut justo vel, accumsan porttitor nulla. Proin placerat posuere sem at ultricies. </p>
                            <Button variant='btn-primary'>
                                <Link>Leer M&#225;s</Link>
                            </Button>
                        </article>
                    </Card>
                    <Card className={'span-12 span-md-4'}>
                        <article className={Styles['posts__container']}>
                            <img className='img-fluid' src="https://picsum.photos/seed/picsum/600/400" alt="" />
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero lacus, consequat ut justo vel, accumsan porttitor nulla. Proin placerat posuere sem at ultricies. </p>
                            <Button variant='btn-primary'>
                                <Link>Leer M&#225;s</Link>
                            </Button>
                        </article>
                    </Card>
                    <Card className={'span-12 span-md-4'}>
                        <article className={Styles['posts__container']}>
                            <img className='img-fluid' src="https://picsum.photos/seed/picsum/600/400" alt="" />
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras libero lacus, consequat ut justo vel, accumsan porttitor nulla. Proin placerat posuere sem at ultricies. </p>
                            <Button variant='btn-primary'>
                                <Link>Leer M&#225;s</Link>
                            </Button>
                        </article>
                    </Card>
                </section>
            </div> */}
        </>
    )
}
