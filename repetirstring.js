function repetir(texto, num_rep) {
    let res = '';
    for (let i = 0; i < num_rep; i++) {
        res += `-${texto}`;
        
    }
    return res;
}
console.log(repetir('Deiner',5));