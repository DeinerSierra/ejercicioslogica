function angulo(num) {
    let res = 'Angulo Completo';
    if (num < 90) {
        res = 'Angulo Agudo';
    } else if(num === 90) {
        res = 'Angulo Recto';
    }else if(num > 90 && num < 180) {
        res = 'Angulo Obtuso';
    }else if(num === 180) {
        res = 'Angulo Llano';
    }else if(num > 180 && num < 360) {
        res = 'Angulo Concavo';
    }
    return res;
}
console.log(angulo(187))