function recortar(texto, hasta) {
    let res = "";
    if (typeof texto === 'string' && typeof hasta ==='number') {
        res = texto.substring(0, hasta)
    }else{
        res = 'Introduce bien los datos';
    }
    return res;
}
console.log(recortar('Deiner Sierra Mendoza',5))