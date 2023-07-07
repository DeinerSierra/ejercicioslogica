function masUsado(texto) {
    let mapa = {};
    let max_rep = 0;
    let letramas_rep = '';
    for(let letra of texto){
        if (!mapa[letra]) {
            mapa[letra] = 1;
        }else{
            mapa[letra]++;
        }
    }
    for ( let letra in mapa) {
        if (mapa[letra].toString().trim().length ===1 && mapa[letra] > max_rep) {
            max_rep = mapa[letra]
            letramas_rep = letra
        }
        
    }
    return `${letramas_rep}=${max_rep}`;
}
console.log(masUsado('deinersierramendoza'))