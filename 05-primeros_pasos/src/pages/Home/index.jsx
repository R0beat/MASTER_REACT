import React from 'react';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import './style.css';

export const Home = () => {
    return (
        <div className='home'>
            <section className='home__section'>
                <p className="home__text">Bienvenidos a mi blog, conoceras parte de m&#237;</p>
                <div className="span-12 span-md-3">
                    <Button variant='primary'>
                        <Link to={'/blogs'}>Entra ya</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
