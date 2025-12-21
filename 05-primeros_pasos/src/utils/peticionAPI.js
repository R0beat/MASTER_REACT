import axios from 'axios';
import { mostrarAlertaSimple } from "./alertas";

export const consultarApiRequest = async (baseURL, endpoint, method = 'GET', data = null, utilizarToken = false, tokenPersonal = null) => {

    const tokenAPI = sessionStorage.getItem('token');
    let showErrorPage = false;
    let cabeceras = {
        'Content-Type': 'application/json'
    }

    if (utilizarToken) {
        cabeceras['Authorization'] = tokenAPI;
    } else {
        if (tokenPersonal) {
            cabeceras['Authorization'] = `Bearer ${tokenPersonal}`;
        }
    }

    const baseAPI = axios.create({
        baseURL: baseURL,
        headers: cabeceras
    });

    // interceptor de respuesta para manejar errores
    baseAPI.interceptors.response.use(response => response, error => {
        const { status } = error.response || {};
        switch (status) {
            case 401:
                mostrarAlertaSimple('Sesión expirada', 'Parece que su sesión ha expirado, vuelve a iniciar sesión para continuar con tus actividades.', 'info');
                break;
            case 403:
                mostrarAlertaSimple('Acceso no autorizado', 'Acceso denegado. El usuario no tiene acceso al servicio solicitado.', 'error');
                break;
            case 404:
                mostrarAlertaSimple('Recurso no encontrado', 'Lo sentimos, no hemos encontrado el recurso solicitado. Por favor, verifica que la información ingresada sea correcta.', 'warning');
                break;
            case 500:
                mostrarAlertaSimple('Conexión no establecida', 'Actualmente estamos experimentando dificultades técnicas con nuestro servicio. Por favor, intenta realizar esta acción más tarde. Lamentamos los inconvenientes y agradecemos tu paciencia.', 'error');
                break;
            default:
                if (error.code === 'ECONNABORTED' || error.code === 'ERR_NETWORK' || error.message === "Network Error") {
                    mostrarAlertaSimple('Conexión no establecida', 'Actualmente estamos experimentando dificultades técnicas con nuestro servicio. Por favor, intenta realizar esta acción más tarde. Lamentamos los inconvenientes y agradecemos tu paciencia.', 'error');
                } else {
                    showErrorPage = true;
                    throw error;
                }
        }
        return Promise.reject(error);
    });

    // realizar la peticion al api
    try {
        const response = await baseAPI({ url: endpoint, method, data });
        return response.data;
    } catch (error) {
        const apiError = error.response?.data;

        // verifica si existe la estructura personalizada del error por parte del API
        const errorMessage = apiError?.message || error.message || 'Ocurrió un error inesperado';
        const errorCode = apiError?.code || 'Unknown_Code';
        const statusCode = apiError?.statusCode || error.response?.status;
        const errors = apiError?.errors || [];

        // lanza un error personalizado con los detalles del error
        throw new Error(JSON.stringify({
            message: errorMessage,
            code: errorCode,
            status: statusCode,
            errors: errors,
            showErrorPage: showErrorPage
        }));
    }

};
