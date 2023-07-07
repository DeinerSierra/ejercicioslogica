function cuadrado(num) {
    return num*num
}
function mostrar(num) {
    for (let i = 0; i <= num; i++) {
        console.log(cuadrado(i))
        
    }
}
console.log(mostrar(50))