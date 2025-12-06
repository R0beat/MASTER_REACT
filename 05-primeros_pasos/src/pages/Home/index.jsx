import React from 'react';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import './style.css';

export const Home = () => {
    return (
        <main className='home'>
            <section className='home__section'>
                <p className="home__text">Bienvenidos a mi blog, conoceras parte de m&#237;</p>
                <div>
                    <Button element='shine' modifier='shine--info-outline' expanded={true}>
                        <Link to={'#'}>Entra ya</Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}
