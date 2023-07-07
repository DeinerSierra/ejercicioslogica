function cuentaLetras(texto) {
    let consonantes = 0;
    let vocales = 0;
    let textoLimpio = '';
    textoLimpio = texto.split('').filter(letra => /[áéíóú\w]/gi.test(letra.trim()) && isNaN(letra)).join('');
    for(letra of textoLimpio) {
       
        if (/[áéíóúaeiou]/gi.test(letra)) {
            vocales++;
        }else{
            consonantes++
        }
    }
    return [consonantes, vocales]

}
let letras = cuentaLetras('Hola')
console.log(letras[0])
console.log(letras[1])
