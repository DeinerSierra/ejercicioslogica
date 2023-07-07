function impares(num1, num2) {
    let contador = 0;
    while (num1 < num2) {
        if (num1 % 2 !== 0) {
            contador +=1
        }
        num1++
    }
    return contador;
}
console.log('Los numeros imperes son',impares(1, 100))