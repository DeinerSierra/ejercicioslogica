function calcular(dias) {
    let year = Math.floor(dias / 365);
    let dias_restantes = (dias % 365);
    let month = Math.floor(dias_restantes / 30);
    dias_restantes = (dias_restantes%30);
    return `Equivale a ${year} años, ${month} meses y ${dias_restantes} dias`;
}
console.log(calcular(920));