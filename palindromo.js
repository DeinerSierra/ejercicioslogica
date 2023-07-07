function palindormo(texto) {
    let textoInvertido = texto.split('').reverse().join('');
    return textoInvertido === texto;

}
console.log("Es palindromo:" + palindormo('otto'));