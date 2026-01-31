import React, { useEffect, useRef, useState } from 'react'
import { Alert, BloqueCodigo, Button, Card, Hero, Input } from '../../../components'
import { EjemploAnio } from '../components';
import { AlertaComponente } from '../components/AlertaComponente';

const codeCambiarNombre = `const [nombre, setNombre] = useState('Michael L. Simon');

const cambiarNombre = (e) => {
    setNombre('Kimberly S. Brooks')
}


return(
    <Button onClick={cambiarNombre}>Cambiar</Button>   
);`;

const codeCambiarValores = `const [valores, setValores] = useState('');

const handleChange = (e) => {
    const { value } = e.target;
    setValores(value);
};

return(
   <Input type='text' onChange={handleChange} value={valores}/>   
);`;

const codeCambiarAnio = `const fecha = new Date(); // Definimos la fecha actual
const year = fecha.getFullYear();  // Obtenemos el anio actual

<EjemploAnio anio={anio} />  // Pasamos como prop el anio

// En el componente 

export const EjemploAnio = ({ anio }) => { // Destructuramos el anio

    const [anioActual, setAnioActual] = useState(anio); // Declaramos el estado con el anio como valor inicial

    const handleChange = (e, setValor) => {
        const { value } = e.target;
        setValor(value);
    };

    const cambiarAnio = (yearNow) => { // Sumamos o restamos el anio
        setAnioActual(yearNow)
    }

    return (
        <div className='container'>
            <Input type='number' name={'anio'} onChange={e => handleChange(e, setAnioActual)} value={anioActual} placeholder='Ingresa el a&#241;o'/>
            <Button onClick={e => cambiarAnio(anioActual - 1)}>Anterior</Button>
            <p>{anioActual}</p>
            <Button onClick={e => cambiarAnio(anioActual + 1)}>Siguiente</Button>
        </div>
    )
}`;

const codeUseEffect = `useEffect(() => {
    if (firstRender.current) { // Ignora el montaje inicial.
        firstRender.current = false;
        return;
    }
    
    setContador(contador + 1);

    const timer = setTimeout(() => { // Inicia un temporizador de 2 segundos
        // Esperar a que termine la animación para desmontar
        setAnimacion('fade-exit');
        setTimeout(() => { // Espera 500 ms (duración de la animación), luego desactiva cambios (setCambios(false)) y reinicia animacion.
            setCambios(false);
            setAnimacion('');
        }, 500);
    }, 2000);

    return () => clearTimeout(timer);
}, [usuario]); // Solo permite que el efecto se ejecute cuando usuario cambia por segunda vez en adelante.`;

const codeUseRef = `const firstRender = useRef(true); // Guarda un valor persistente entre renders.
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
    }, [usuario]);

    <div className="span-12 span-md-6">
        <Input
            type="text"
            name="usuario"
            onChange={e => cambiarDatos(e, setUsuario)}
            value={usuario || ""}
            placeholder="Ingresa un texto..."
        />
        <p className={"text-center f-bold " + (contador > 10 ? "text-success" : "text-info")}>
            {usuario}
        </p>
        {cambios && (
            <Alert className={"mt-2 " + animacion} variant="primary">
                Has modificado {contador - 1} veces el valor del input
            </Alert>
        )}
    </div>`;

const codeMontarComponente =`const [name, setName] = useState('');

useEffect(() => {
    setAnimacion('fade-enter'); // Montando el componete
    return () => {  // Desmontando el componente
        setAnimacion('');
    }
}, [name]) // Dependencias

<div className="span-12 span-md-4">
    <Input
        type='text'
        name={'nombre'}
        onChange={e => cambiarDatos(e, setName)}
        value={name || ''}
        placeholder='Ingresa un texto...'
    />
    {name === 'usuario' && (<AlertaComponente className={animacion} msg={'montado'} />)}
</div>`;


const fecha = new Date();
const year = fecha.getFullYear();

export const Hooks = () => {

    const [nombre, setNombre] = useState('Michael L. Simon');
    const [valores, setValores] = useState('');
    const [usuario, setUsuario] = useState('');
    const [name, setName] = useState('');
    const [cambios, setCambios] = useState(false);
    const [animacion, setAnimacion] = useState('');
    const [contador, setContador] = useState(0);

    const firstRender = useRef(true);

    useEffect(() => {
        setAnimacion('fade-enter'); // Montando el componete
        return () => {  // Desmontando el componente
            setAnimacion('');
        }
    }, [name]) // Dependencias

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        setContador(contador + 1);

        const timer = setTimeout(() => {
            // Esperar a que termine la animación para desmontar
            setAnimacion('fade-exit');
            setTimeout(() => {
                setCambios(false);
                setAnimacion('');
            }, 500);
        }, 2000);

        return () => clearTimeout(timer);
    }, [usuario]);


    const cambiarNombre = (e) => {
        setNombre('Kimberly S. Brooks')
    }

    const handleChange = (e, setValor) => {
        const { value } = e.target;
        setValor(value);
    };

    const cambiarDatos = (e, setValor) => {
        const { value } = e.target;
        setAnimacion('fade-enter');
        setValor(value);
        setCambios(true)
    };


    return (
        <>
            <Hero>
                <h1>Hooks</h1>
                <hr />
                <p>
                    Los <i>Hooks</i> en React son funciones especiales que te permiten "enganchar" el estado y otras características de React
                    (como el ciclo de vida) desde componentes funcionales, eliminando la necesidad de clases para manejar lógica con estado.
                </p>
            </Hero>

            <div className='container d-grid col-12 gap-2'>

                <Card className={'span-12 d-grid col-12 gap-3'}>

                    <div className="span-12">
                        <h2>useState</h2>
                        <hr className='hr-header' />
                        <p className='mb-1'>Es un Hook que permite a los componentes funcionales tener estado, es decir, manejar datos que cambian con el tiempo y que, al modificarse, provocan que el componente se vuelva a renderizar para reflejar esos cambios en la interfaz de usuario (UI).</p>
                        <p className='m-1'>Ejemplos:</p>
                    </div>

                    <div className="span-12 span-md-6">
                        <BloqueCodigo code={codeCambiarNombre} language='jsx' theme='dracula' />
                        <p className='mt-2 mb-2'>{nombre}</p>
                        <Button onClick={cambiarNombre}  >Cambiar</Button>
                    </div>

                    <div className="span-12 span-md-6">
                        <BloqueCodigo className={'mb-1'} code={codeCambiarValores} language='jsx' theme='dracula' />
                        <Input
                            type='text'
                            name={'input'}
                            onChange={e => handleChange(e, setValores)}
                            value={valores}
                            placeholder='Ingresa el nombre'
                        />
                        <p >{valores}</p>
                    </div>
                </Card>


                <Card className={'span-12 d-grid col-12 gap-3 '}>

                    <div className="span-12">
                        <h2>useEffect</h2>
                        <hr className='hr-header' />
                        <p className='mb-1'>
                            Es un Hook de React que te permite ejecutar efectos secundarios dentro de componentes funcionales.
                            <i> Dicho simple: </i> sirve para hacer cosas <i>"extra"</i> despu&#233;s de que React renderiza un componente.
                        </p>
                        <p className='m-1'>Ejemplos:</p>
                    </div>

                    <div className="span-12 span-md-6">
                        <BloqueCodigo code={codeUseEffect} language='jsx' theme='dracula' />
                    </div>
                    <div className="span-12 span-md-6">
                        <Input
                            type='text'
                            name={'usuario'}
                            onChange={e => cambiarDatos(e, setUsuario)}
                            value={usuario || ''}
                            placeholder='Ingresa un texto...'
                        />
                        <p className={`text-center f-bold ${contador > 10 ? `text-success` : `text-info`}`}>{usuario}</p>
                        {cambios && (<Alert className={`mt-2 ${animacion}`} variant="primary">Has modificado {contador - 1} veces el valor del input</Alert>
                        )}
                    </div>

                </Card>

                <Card className={'span-12 d-grid col-12 gap-3 '}>

                    <div className="span-12">
                        <h2>useRef</h2>
                        <hr className='hr-header' />
                        <p className='mb-1'>Es un hook de React que permite crear una referencia a un valor o a un elemento del DOM que persiste entre renderizados, pero que no provoca un nuevo renderizado cuando su valor cambia.</p>
                        <p className='m-1'>Ejemplos:</p>
                    </div>

                    <div className="span-12 span-md-6">
                        <BloqueCodigo code={codeUseRef} language='jsx' theme='dracula' />
                    </div>
                    <div className="span-12 span-md-6">
                        <ul className='list list--unordered'>
                            <li className='list__item '>Evita que el useEffect se ejecute en el primer render y hace que solo se ejecute cuando usuario cambia después del montaje inicial.</li>
                            <li className='list__item '>Este patrón bloquea la primera ejecución.</li>
                            <li className='list__item '>Solo permite ejecutar el efecto cuando usuario cambia después.</li>
                        </ul>
                    </div>

                </Card>

                <Card className={'span-12 d-grid col-12 gap-3'}>
                    <div className="span-12">
                        <h3>Pr&#225;ctica 1</h3>
                        <hr className='hr-header' />
                        <p className='mb-1'>
                            Recibe como prop el a&#241;o, usa 2 botones para cambiar el a&#241;o anterior y proximo;
                            adem&#225;s de ingresar el a&#241;o mediante el input y que se cambie dinamicamente. 
                            <i> No olvides mostrar el a&#241;o en pantalla</i>
                        </p>
                    </div>

                    <div className="span-12 span-md-8">
                        <BloqueCodigo code={codeCambiarAnio} language='jsx' theme='dracula' />
                    </div>

                    <div className="span-12 span-md-4">
                        <EjemploAnio anio={year} />
                    </div>
                </Card>

                <Card className={'span-12 d-grid col-12 gap-3'}>
                    <div className="span-12">
                        <h3>Pr&#225;ctica 2</h3>
                        <hr className='hr-header' />
                        <p className='mb-1'>
                            Montar un componente al ingresar el nombre <i>usuario</i>, si es distinto desmontar el componente
                        </p>
                    </div>

                    <div className="span-12 span-md-8">
                        <BloqueCodigo code={codeMontarComponente} language='jsx' theme='dracula' />
                    </div>

                    <div className="span-12 span-md-4">
                        <Input
                            type='text'
                            name={'nombre'}
                            onChange={e => cambiarDatos(e, setName)}
                            value={name || ''}
                            placeholder='Ingresa un texto...'
                        />
                        {name === 'usuario' && (<AlertaComponente className={animacion} msg={'montado'} />)}
                    </div>
                </Card>

            </div>
        </>
    )
}