import React, { useState } from 'react'
import { BloqueCodigo, Button, Card, Hero, Input } from '../../../components'
import { EjemploAnio } from '../components';

const ejemplo1 = `const [nombre, setNombre] = useState('Michael L. Simon');

const cambiarNombre = (e) => {
    setNombre('Kimberly S. Brooks')
}


return(
    <Button onClick={cambiarNombre}>Cambiar</Button>   
);`;

const ejemplo2 = `const [valores, setValores] = useState('');

const handleChange = (e) => {
    const { value } = e.target;
    setValores(value);
};

return(
   <Input type='text' onChange={handleChange} value={valores}/>   
);`;

const ejemplo3 = `const fecha = new Date(); // Definimos la fecha actual
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
const fecha = new Date();
const year = fecha.getFullYear();

export const Hooks = () => {

    const [nombre, setNombre] = useState('Michael L. Simon');
    const [valores, setValores] = useState('');
    const [usuario, setUsuario] = useState('Michael L. Simon');

    const cambiarNombre = (e) => {
        setNombre('Kimberly S. Brooks')
    }

    const handleChange = (e, setValor) => {
        const { value } = e.target;
        setValor(value);
    };

    const modificarNombre=()=>{

    }

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

                <Card className={'span-12 d-grid col-12 gap-2'}>

                    <div className="span-12">
                        <h2>useState</h2>
                        <hr className='hr-header' />
                        <p className='mb-1'>Es un Hook que permite a los componentes funcionales tener estado, es decir, manejar datos que cambian con el tiempo y que, al modificarse, provocan que el componente se vuelva a renderizar para reflejar esos cambios en la interfaz de usuario (UI).</p>
                        <p className='m-1'>Ejemplos:</p>
                    </div>

                    <div className="span-12 span-md-6">
                        <BloqueCodigo code={ejemplo1} language='jsx' theme='dracula' />
                        <p className='mt-2 mb-2'>{nombre}</p>
                        <Button onClick={cambiarNombre}  >Cambiar</Button>
                    </div>

                    <div className="span-12 span-md-6">
                        <BloqueCodigo className={'mb-1'} code={ejemplo2} language='jsx' theme='dracula' />
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


                <Card className={'span-12 d-grid col-12 gap-2'}>
                    <div className="span-12">
                        <h3>Pr&#225;ctica 1</h3>
                        <hr className='hr-header' />
                        <p className='mb-1'>
                            Recibe como prop el a&#241;o usar 2 botones para cambiar el a&#241;o anterior y proximo;
                            adem&#225;s de ingresar el a&#241;o mediante el input y que se cambie dinamicamente.
                            <i>No olvides mostrar el a&#241;o en pantalla</i>
                        </p>
                    </div>

                    <div className="span-12 span-md-8">
                        <BloqueCodigo code={ejemplo3} language='jsx' theme='dracula' />
                    </div>

                    <div className="span-12 span-md-4">
                        <EjemploAnio anio={year} />
                    </div>
                </Card>

                <Card className={'span-12 d-grid col-12 gap-2'}>

                    <div className="span-12">
                        <h2>useEffect</h2>
                        <hr className='hr-header' />
                        <p className='mb-1'>Es un Hook que permite a los componentes funcionales tener estado, es decir, manejar datos que cambian con el tiempo y que, al modificarse, provocan que el componente se vuelva a renderizar para reflejar esos cambios en la interfaz de usuario (UI).</p>
                        <p className='m-1'>Ejemplos:</p>
                    </div>

                    <div className="span-12 span-md-6">
                        <BloqueCodigo code={ejemplo1} language='jsx' theme='dracula' />
                        <p className='mt-2 mb-2'>{nombre}</p>
                        <Button onClick={modificarNombre}  >Cambiar</Button>
                    </div>

                
                </Card>

            </div>
        </>
    )
}
