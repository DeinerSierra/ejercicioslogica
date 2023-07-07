function media(numeros) {
    let suma = numeros.reduce((valorAcumulado,numeroActual)=>{
        return valorAcumulado+numeroActual;
    })
    let media = suma / numeros.length;
    return media;
}
console.log(media([1,3,5,6,8,9,6]))