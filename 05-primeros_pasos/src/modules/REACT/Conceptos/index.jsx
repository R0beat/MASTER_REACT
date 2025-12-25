import React from 'react'
import { BloqueCodigo } from '../../../../components/BloqueCodigo'
import { Section } from '../../../../components/Section';

const codeString = `//Este es un ejemplo de codigo
    function sum(a, b) {
      return a + b;
    }
    console.log(sum(2, 3));`
    .trim();

export const Conceptos = () => {

    return (
        <div className='d-grid col-12 gap-2 container'>
            <div className="span-12 span-md-6">
                <BloqueCodigo code={codeString} language='javascript' theme='' />
            </div>
            <Section
                className="span-12 span-md-6"
                title="Componentes"
                content="Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada."
                variant="gray"
            />
        </div>
    )

}
