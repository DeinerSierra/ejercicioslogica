function deochoenocho(num) {
    let resultado = `-- Numeros del ${num} al 0 -- \n`;
    while (num > 0) {
        resultado+=`n° ${num} \n`;
        num-=8;
    }
    if (num <= 0) {
        resultado+=`n° 0 \n`;
    }
    resultado+=`--FIN--`;
    return resultado;

}
console.log(deochoenocho(100))