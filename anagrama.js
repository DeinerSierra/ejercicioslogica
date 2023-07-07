function limpiarTexto(texto) {
    return texto.replace(/[^\w]/gi,'').toLowerCase().split('').sort().join('');
}
function anagramas(text1, text2) {
    return limpiarTexto(text1) === limpiarTexto(text2);
}
console.log(anagramas('Deiner.-#w','deiner:-_#'))