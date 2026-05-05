export const guardarEnStorage = (key, data) => { localStorage.setItem(key, JSON.stringify(data)); };

export const obtenerLocalStorage = (key) => { return JSON.parse(localStorage.getItem(key)) || []; };