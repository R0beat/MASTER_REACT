import { createSlice, } from '@reduxjs/toolkit';

const configuracionUsuario = { "configuracion": { "temaInterfaz": "1" } }

const initialState = {
    error: null,
    styleApp: localStorage.getItem("styleApp") || configuracionUsuario.configuracion.temaInterfaz,
    loadingGeneral: false,
    messageLoadingGeneral: '',
    nivelDeAcceso: ''
};

const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        setStyleApp: (state, action) => {
            state.styleApp = action.payload;
            localStorage.setItem("styleApp", action.payload);
        },
        setLoadingGeneral: (state, action) => {
            const { show, message } = action.payload;
            state.loadingGeneral = show;
            state.messageLoadingGeneral = message;
        },
        getError: (state, action) => {
            const { status, message, errors } = action.payload;
            state.error = { status: status || 'unknown', message: message || 'Error desconocido', errors: errors || null };
        },
        clearError: (state) => {
            state.error = null;
        },
        setNivelDeAcceso: (state, action) => {
            state.nivelDeAcceso = action.payload;
        }
    }
});

export const { setStyleApp, setLoadingGeneral, getError, clearError, setNivelDeAcceso} = systemSlice.actions;
export default systemSlice.reducer;