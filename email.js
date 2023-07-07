function comprobarEmail(email) {
    let testear_email = /[^\w+@\w+\.\w+$]/gi.test(email);
    return testear_email;
}
console.log(comprobarEmail('deiner.sierra@gmail.com'))