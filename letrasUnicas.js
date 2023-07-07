function unicas(texto) {
    let contadores = {};
    let resultado = [];
    let letras = texto.split('').filter(letra => letra.trim().length > 0)
    for(letra of letras){
        if (!contadores[letra]) {
            contadores[letra]=1;
        } else {
            contadores[letra]++;
        }
    }
    for(letra in contadores){
        if (letra[contadores]>1) {
            delete contadores[letra];
        }else{
            resultado.push(letra)
        }
    }
    return [resultado, resultado[0]];
}
console.log(unicas('Hola soy deiner sierra'))