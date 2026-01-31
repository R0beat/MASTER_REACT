import React, { useEffect, useState } from 'react'
import Styles from './styles.module.css';
import { Alert, Button, Input } from '../../../../components';

const mensajeCampoRequerido = "El campo es requerido. Por favor ingresa un valor.";

export const CrearPeliculas = ({ valor = {}, setValor }) => {

    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [animacion, setAnimacion] = useState('');

    useEffect(() => {
        if (!showAlert) return setAnimacion('fade-enter');

        const timer = setTimeout(() => {
            setAnimacion('fade-exit');

            setTimeout(() => {
                setShowAlert(false);
                setAnimacion('');
            }, 500);
        }, 3000);

        return () => clearTimeout(timer);
    }, [showAlert]);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setValor(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validarFormulario = () => {

        const error = {}

        if (!valor.titulo?.trim()) error.titulo = 'Ingresa el tiulo de la pelicula';
        if (!valor.descripcion?.trim()) error.descripcion = 'Ingresa la descripcion';

        return error
    }


    const enviarFormulario = (e) => {
        e.preventDefault();

        const errores = validarFormulario();
        setErrors(errores);

        if (Object.keys(errores).length > 0) {
            setShowAlert(true);
            return;
        }

        if (Object.keys(errores).length === 0) {
            const nuevaPelicula = {
                ...valor,
                id: new Date().getTime()
            };

            let elementos = JSON.parse(localStorage.getItem('peliculasStorage')) || [];

            !Array.isArray(elementos) ? elementos = [] : elementos.push(nuevaPelicula);

            localStorage.setItem('peliculasStorage', JSON.stringify(elementos));

            setValor({}); // limpiar formulario
            setErrors({});
            console.log(elementos)
        }

    };

    return (
        <article className={`${Styles.pelicula} span-3`}>
            <h3 className={Styles.pelicula__title}>Añadir película</h3>

            <p className='text-info text-center f-bold'>
                {(valor?.titulo && valor?.descripcion) && `Has creado la película ${valor.titulo}`}
            </p>

            <hr />

            <Input
                name='titulo'
                value={valor?.titulo || ''}
                onChange={handleChange}
                errorMessage={errors.titulo}
                showErrorMessage={Object.prototype.hasOwnProperty.call(errors, 'titulo')}
                placeholder="Título"
            />

            <Input
                name='descripcion'
                type="textarea"
                value={valor?.descripcion || ''}
                onChange={handleChange}
                errorMessage={errors.descripcion}
                showErrorMessage={Object.prototype.hasOwnProperty.call(errors, 'descripcion')}
                placeholder="Descripción"
            />
            {showAlert && (
                <div className="margin-vertical-1 span-12">
                    <Alert className={`mt-2 ${animacion}`} variant="danger">
                        Ingresa todos los datos
                    </Alert>
                </div>
            )}
            <Button onClick={enviarFormulario} variant="success"> Guardar </Button>
        </article>
    );
};
