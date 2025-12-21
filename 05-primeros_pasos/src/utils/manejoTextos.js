// export const capitalizarTexto = (texto) => {
//   if (!texto) return '';
//   return texto
//     .toLowerCase()
//     .replace(/\b\w/g, letra => letra.toUpperCase());
// }


export const capitalizarTexto = (texto) => {
  if (!texto) return '';

  const excepciones = ['de', 'del', 'la', 'y', 'en']; // palabras que no van capitalizadas si no son la primera
  const abreviaturas = {
    'num.': 'Núm.',
    'no.': 'No.',
  };

  return texto
    .toLowerCase()
    .split(' ')
    .map((palabra, i) => {
      const palabraLimpia = palabra.toLowerCase();

      // Si es una abreviatura conocida
      if (abreviaturas[palabraLimpia]) {
        return abreviaturas[palabraLimpia];
      }

      // Si es una palabra de las excepciones y no es la primera
      if (i !== 0 && excepciones.includes(palabraLimpia)) {
        return palabraLimpia;
      }

      // Capitaliza normalmente
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    })
    .join(' ');
}
