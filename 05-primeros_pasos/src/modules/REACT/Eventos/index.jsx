import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Button, Card, Hero, Input } from '../../../components';
import { handleChangeGeneralInputs } from '../../../utils/formularios';

const nombre = 'Roberto';

const alerta = (titulo = 'Lorem ipsum dolor sit.', text = `Bienvenido ${nombre}`, icon = 'success', button = 'Aceptar') => {
    Swal.fire({
        title: titulo,
        text: text,
        icon: icon,
        confirmButtonText: button,
        confirmButtonColor: 'var(--primary)'
    })
}



export const Eventos = () => {

    const [mensajeCaja, setMensajeCaja] = useState('');
    const [mensajeInput, setMensajeInput] = useState('');
    const [valores, setValores] = useState({});

    const eventoOnClick = () => {
        alerta(`Has dado click`, `Bienvenido ${nombre}`, 'success')
    }

    const eventoDobleClick = () => {
        alerta(`Has dado dos click`, `Bienvenido ${nombre}`, 'success')
    }

    const enterAndLeave = (e, setMensaje, accion, contenedor = 'de la caja') => {
        setMensaje(`${nombre} has ${accion} ${contenedor}`);
    }

    const handleChange = (e, setValores) => {
        const { name, value } = e.target;
        handleChangeGeneralInputs(setValores, name, value);
    };
    return (
        <>
            <Hero>
                <h1>Eventos en React</h1>
                <hr />
                <p>
                    React te permite añadir controladores de eventos a tu JSX. Los controladores de eventos son tus propias
                    funciones que se ejecutarán en respuesta a interacciones como hacer clic, hover, enfocar inputs en formularios, entre otras.
                </p>
            </Hero>
            <div className="container d-grid col-12 gap-3 ">

                <Card className={'span-12 span-md-4 mb-2'}>
                    <h3>Evento onClick</h3>
                    <hr className='hr-header' />
                    <div className='d-grid col-12 gap-2'>
                        <div className="span-12 span-md-4">
                            <p className='mb-1'>onClick</p>
                            <Button onClick={eventoOnClick} variant='primary'>Click</Button>
                        </div>
                        <div className="span-12 span-md-4">
                            <p className='mb-1'>onDoubleClick</p>
                            <Button onDoubleClick={eventoDobleClick} variant='secondary' >Click</Button>
                        </div>
                    </div>
                </Card>

                <Card className={'span-12 span-md-4 mb-2'}>
                    <div onMouseEnter={e => enterAndLeave(e, setMensajeCaja, 'entrado')} onMouseLeave={e => enterAndLeave(e, setMensajeCaja, 'salido')}>
                        <h3>Evento Mouse enter-leave</h3>
                        <hr className='hr-header' />
                        <p className='mb-1'>Entra y sal de la tarjeta</p>
                        <p className='text-center'>{mensajeCaja}</p>
                    </div>
                </Card>

                <Card className={'span-12 span-md-4 mb-2'}>
                    <h3>Evento on Focus</h3>
                    <hr className='hr-header' />
                    <Input
                        type='text'
                        name={'input'}
                        onChange={e => handleChange(e, setValores)}
                        value={valores.input || ''}
                        onFocus={e => enterAndLeave(e, setMensajeInput, 'entrado', 'al input')}
                        onBlur={e => enterAndLeave(e, setMensajeInput, 'salido', 'del input')}
                    />
                    <p className='text-center'>{mensajeInput}</p>
                </Card>
            </div>
        </>
    )
}
