function invertir(texto) {
    let invertido = '';
    for( let letra of texto){
        console.log(letra + invertido)
        invertido = letra + invertido;
    }
    return invertido;
}
console.log(invertir('Hola mundo desde js'))