function maxmin(elementos) {
    let ordenados = elementos.sort((a,b)=>a-b);
    return {
        bajo:ordenados[0],
        alto:ordenados[ordenados.length - 1]
    }
}
console.log(maxmin([1,5,8,2,9]))