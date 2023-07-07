function invertir(num) {
    let numerostring = String(Math.abs(num));
    let numeroInvertido = ''
    for(numero of numerostring ){
        numeroInvertido = numero + numeroInvertido;

    }
    return num<0 ? -Number(numeroInvertido) : Number(numeroInvertido)
}
console.log(invertir(-76))