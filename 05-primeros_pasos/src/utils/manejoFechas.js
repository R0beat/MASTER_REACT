import { DateTime } from 'luxon';

export const formatDate = (isoDate, format) => {

    if (!isoDate || isoDate.trim() === "") {
        return "Fecha no proporcionada";
    }

    const date = DateTime.fromISO(isoDate, { zone: 'America/Mexico_City' });

    const parts = {
        year: date.year,
        month: date.month.toString().padStart(2, '0'),
        day: date.day.toString().padStart(2, '0'),
        hour: date.hour.toString().padStart(2, '0'),
        minute: date.minute.toString().padStart(2, '0'),
        second: date.second.toString().padStart(2, '0')
    };

    const monthNames = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    switch (format) {
        case 'yyyy-mm-dd':
            return `${parts.year}-${parts.month}-${parts.day}`;
        case 'hh:MM - dd mm, yyyy':
            return `${parts.hour}:${parts.minute} hrs - ${parts.day} ${monthNames[parseInt(parts.month) - 1]}, ${parts.year}`;
        case 'yyyy-mm-dd a las hh:MM:ss':
            return `${parts.year}-${parts.month}-${parts.day} a las ${parts.hour}:${parts.minute}:${parts.second}`;
        case 'dd-mm-yyyy':
            return `${parts.day}-${parts.month}-${parts.year}`;
        case 'dd de mm de yyyy':
            return `${parts.day} de ${monthNames[parseInt(parts.month) - 1]} de ${parts.year}`;
        case 'dd mm, yyyy':
            return `${parts.day} ${monthNames[parseInt(parts.month) - 1]}, ${parts.year}`;
        case 'mes':
            return monthNames[parseInt(parts.month) - 1];
        case 'año':
            return parts.year;
        case 'hh:MM':
            return `${parts.hour}:${parts.minute}`;
        default:
            return `${isoDate}`;
    }
}

export const obtenerPartesFechaYYYYMMDD = (fecha) => {
    const monthNames = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    if (!fecha) {
        return "Fecha no proporcionada";
    }

    const parts = fecha.split("-");

    return {
        "day": parts[2],
        "month": monthNames[parseInt(parts[1]) - 1],
        "year": parts[0]
    };
}

export const formatDateYYYYMMDD = (dateYYYYMMDD, format) => {

    if (!dateYYYYMMDD) {
        return "Fecha no proporcionada";
    }

    const parts = obtenerPartesFechaYYYYMMDD(dateYYYYMMDD);

    switch (format) {
        case 'yyyy-mm-dd':
            return `${parts.year}-${parts.month}-${parts.day}`;
        case 'dd-mm-yyyy':
            return `${parts.day}-${parts.month}-${parts.year}`;
        case 'dd de mm de yyyy':
            return `${parts.day} de ${parts.month} de ${parts.year}`;
        case 'dd mm, yyyy':
            return `${parts.day} ${parts.month}, ${parts.year}`;
        case 'mes':
            return parts.month;
        case 'año':
            return parts.year;
        default:
            return `${dateYYYYMMDD}`;
    }
}

export const obtenerFechaActualISO = () => {
    const date = DateTime.now().setZone('America/Mexico_City');
    const formato = "yyyy-MM-dd'T'HH:mm:ss";
    const fechaFormateada = date.toFormat(formato);
    return `${fechaFormateada}Z`;
}

export const obtenerFechaActualYYYYMMDD = () => {
    const date = DateTime.now().setZone('America/Mexico_City');
    return date.toFormat('yyyy-MM-dd');
}

export const obtenerFechaActualDDMMYYYY = () => {
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    return `${day}-${month}-${year}`;
}

export const validarFechas = (fechaInicial, fechaFinal) => {
    const fechaInicio = DateTime.fromISO(fechaInicial, { zone: 'America/Mexico_City' });
    const fechaFin = DateTime.fromISO(fechaFinal, { zone: 'America/Mexico_City' });
    return fechaInicio < fechaFin;
};

export const fechaEstaEntre = (fechaObjetivo, fechaInicio, fechaFin) => {
    const fObjetivo = DateTime.fromISO(fechaObjetivo, { zone: 'America/Mexico_City' });
    const fInicio = DateTime.fromISO(fechaInicio, { zone: 'America/Mexico_City' });
    const fFin = DateTime.fromISO(fechaFin, { zone: 'America/Mexico_City' });

    return fObjetivo >= fInicio && fObjetivo <= fFin;
};