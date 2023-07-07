function permutacion(secuencia,num) {
    for (let i = 0; i < num; i++) {
        if (secuencia.indexOf(i+1) < 0) {
            return false;
        }
        
    }
    return true;
}
console.log(permutacion([1,2,3,4,5],5))