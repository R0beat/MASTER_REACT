import { v4 as uuidv4 } from 'uuid';

export const patternCurp = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
export const patternRfc = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))[A-Z0-9]{3}$/;
export const patternTelefono = /^[0-9]{10}$/;
export const patternCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const patternPasswordUsuarios = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/;
export const patternPasswordLogin = /^.{8,}$/;
export const patternCodigoPostal = /^\d{5}-\d{4}|\d{5}$/;

export const generarCadenaAlfanumerica = (totalCaracteres = 8) => uuidv4().replace(/-/g, '').slice(0, totalCaracteres);
export const validarExpresionRegular = (pattern, valor) => pattern.test(valor);

export const arregloTieneCadenasDuplicadas = (arr) => {
    const conjunto = new Set(arr);
    return conjunto.size !== arr.length;
}

export const handleChangeGeneralInputs = (setValores, name, value) => {
    setValores(prevSesion => {
        const keys = name.split(".");
        if (keys.length === 2) {
            return {
                ...prevSesion,
                [keys[0]]: {
                    ...prevSesion[keys[0]],
                    [keys[1]]: value
                }
            };
        } else {
            return {
                ...prevSesion,
                [name]: value
            };
        }
    });
};

export const handleChangeObjectInputs = (setValores, catalogo, campoFiltro, name, value, estructuraPorDefecto = { "clave": "", "valor": "" }) => {

    let elementoSeleccionado = catalogo.find(x => x[campoFiltro] === value);

    if (!elementoSeleccionado) {
        elementoSeleccionado = estructuraPorDefecto;
    }

    setValores(prevSesion => {
        const keys = name.split(".");
        if (keys.length === 2) {
            return {
                ...prevSesion,
                [keys[0]]: {
                    ...prevSesion[keys[0]],
                    [keys[1]]: elementoSeleccionado
                }
            };
        } else {
            return {
                ...prevSesion,
                [name]: elementoSeleccionado
            };
        }
    });
};