function mayusMinus(texto) {
    let mayusculas = 0;
    let minusculas = 0;
    let res = '';
    for(let letra of texto){
        if (/[A-Z]/.test(letra)) {
            mayusculas +=1;
        }else{
            minusculas +=1;
        }
    }
    if (mayusculas > minusculas) {
        res = texto.toUpperCase();
    }else{
        res = texto.toLowerCase();
    }
    return res;
}
console.log(mayusMinus('HOLa Soy Deiner SIerra'))