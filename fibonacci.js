function fibo(num) {
    let serie = [0,1];
    for (let i = 2; i <= num; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
        
    }
    return [serie,serie[num]];
}
console.log("Serie completa: ",fibo(10)[0]);
console.log("Resultado de la serie: ",fibo(10)[1]);