import React, { useState } from 'react'
import { Button, Input } from '../../../../components'

export const EjemploAnio = ({ anio }) => {

    const [anioActual, setAnioActual] = useState(anio);

    const handleChange = (e, setValor) => {
        const { value } = e.target;
        setValor(Number(value));
    };

    const cambiarAnio = (yearNow) => {
        setAnioActual(yearNow)
    }

    return (
        <div className='container d-grid col-12 gap-2 place-items-center'>
            <div className="span-12">
                <Input
                    type='number'
                    name={'anio'}
                    onChange={e => handleChange(e, setAnioActual)}
                    value={anioActual}
                    placeholder='Ingresa el a&#241;o'
                />
            </div>

            <div className="span-12 span-md-4">
                <Button onClick={e => cambiarAnio(anioActual - 1)}>Anterior</Button>
            </div>
            <div className="span-12 span-md-4">
                <p>{anioActual}</p>
            </div>
            <div className="span-12 span-md-4">
                <Button onClick={e => cambiarAnio(anioActual + 1)}>Siguiente</Button>
            </div>
        </div>
    )
}
