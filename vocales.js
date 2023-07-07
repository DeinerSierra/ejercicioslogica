function vocales(texto) {
    let coincidencias = texto.match(/[aeiou]/gi);
    return coincidencias ? coincidencias.length : 0;
}
console.log(vocales('deinersierramendoza'))