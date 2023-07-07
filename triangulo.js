function triangulo(num) {
    let mitad = Math.floor(num - 1)
    let resultado = "";
    for (let fila = 0; fila < num; fila++) {
        let nivel = '';
        for (let columna = 0; columna < (2 * num - 1); columna++) {
            if (mitad - fila <= columna && mitad + fila >= columna) {
                nivel += '*';
            } else {
                nivel += ' ';
            }
            
        }
        resultado += nivel+ '\n';
        
    }
    return resultado;
}
console.log(triangulo(4))