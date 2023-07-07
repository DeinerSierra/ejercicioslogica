function masRepetido(datos) {
    let mapa = {};
    let repetido = '';
    let cantidad = 0;
    if (typeof datos === "string") {
        datos =  datos.split(' ')
    }
    for(let elemento of datos){
        if (mapa[elemento]) {
            mapa[elemento] += 1;
        } else {
            mapa[elemento] = 1;
        }
    }
    for(let elemento in mapa){
        if (mapa[elemento] > cantidad) {
           cantidad = mapa[elemento];
           repetido = elemento;  
        }
    }
    return `${repetido} ${cantidad}`

}
console.log(masRepetido('Hola soy deiner Sierra deiner sierra mendoza'))