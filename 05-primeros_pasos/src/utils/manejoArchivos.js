export const obtenerDatosArchivo = (file) => {
    if (!file) return null;

    const [nombre, extension] = file.name.toLowerCase().split(".");
    return {
        nombre: nombre || "",
        extension: extension || "",
        tamanio: file.size || 0,
    };
};

export const convertirABase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(",")[1]); // Obtener solo la parte Base64
        reader.onerror = reject;
        reader.readAsDataURL(file); // Leer el archivo como Data URL
    });
};