export const GuardarEnStorage = (elemento, item) => {

    let elementos = JSON.parse(localStorage.getItem(item))

    Array.isArray(elementos) ? elementos.push(elemento) : elementos = [elemento]

    localStorage.setItem(item, JSON.stringify(elementos));

    return elemento
}