function capi(num) {
    let procesado = parseInt(num.toString().split('').reverse().join(''));
    return procesado === num;
}
console.log(capi(2002))