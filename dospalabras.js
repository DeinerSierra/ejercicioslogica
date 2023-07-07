function dosPalabras(elementos) {
    let nuevos_elementos = [];
    for(palabra of elementos){
        if (palabra.split(' ').length >= 2) {
            nuevos_elementos.push(palabra);
        }
    }
    return nuevos_elementos;
}
console.log(dosPalabras(['hola','san francisco','ciudad real','deiner']))