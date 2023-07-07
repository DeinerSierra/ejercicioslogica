function divisor(num, divisor) {
    let divisores = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0 && i % divisor === 0) {
            return divisores=i;
        }
    }
    return divisores;
}

console.log(divisor(20, 3));
