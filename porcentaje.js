function porcentaje(porcentaje,numero) {
    operacion = (numero * (porcentaje/100));
    return `El ${porcentaje}% de ${numero} es ${operacion}`;
}
console.log(porcentaje(20, 2000))