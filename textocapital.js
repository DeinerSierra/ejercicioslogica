function capital(texto) {
    let res = '';
    for(letra in texto){
        if (texto[letra - 1] === ' ' || parseInt(letra) === 0) {
            res += texto[letra].toUpperCase();
        }else{
            res += texto[letra];
        }
    }
    return res;
}
console.log(capital('hola soy deiner sierra'))