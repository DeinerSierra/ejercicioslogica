function fizzbuzz(num) {
    let res = '';
    let i = 1;
    while (i <= num) {
        if (i % 3 === 0 && i % 5 === 0) {
            res = `${i} FizzBuzz`;
        } else if (i % 3 === 0) {
            res = `${i} Fizz`;
        } else if (i % 5 === 0) {
            res = `${i} Buzz`;
        } else {
            res = i.toString();
        }
        console.log(res);
        i++;
    }
}

fizzbuzz(100);
