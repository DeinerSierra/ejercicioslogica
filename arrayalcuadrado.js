function calcular(elementos) {
    let num_cuadrados = elementos.filter(numero => typeof numero ==="number");
    let res = num_cuadrados.map(num => Math.pow(num,2))
    return res;
}
console.log(calcular([12,13,5,"dos"]));