function coincidencias(frase, busqueda) {
    let textoLimpio = frase.toLowerCase().replace(/[!¡?¿.,;+]/gi, '');
    let cantidad = 0;
    if (textoLimpio.includes(busqueda.toLowerCase())) {
      let palabras = textoLimpio.split(' ');
      let mapa = {};
      for (let palabra of palabras) {
        if (mapa[palabra]) {
          mapa[palabra]++;
        } else {
          mapa[palabra] = 1;
        }
      }
      cantidad = mapa[busqueda.toLowerCase()] || 0;
    }
    return cantidad;
  }
  
  console.log("El número de coincidencias en la frase es:", coincidencias('Hola, soy Deiner Sierra sierra mendoza mendoza Deiner deiner', 'Deiner'));
  