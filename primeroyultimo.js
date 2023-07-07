function primeroYultimo(numeros) {
    let nuevos_elementos = [];
    nuevos_elementos.push(numeros[0],numeros[numeros.length-1])
    return nuevos_elementos;
}
console.log(primeroYultimo([1,2,3,4,5]))