function todosSubString(palabra) {
    let substrings = [];
    for(letra in palabra){
        let comienzo = parseInt(letra);
        for (let i = 0; i < palabra.length - comienzo; i++) {
            let final = parseInt( i) + parseInt(comienzo );
            substrings.push(palabra.substring(comienzo, final));
            
        }

    }
    return substrings.filter(elemento => elemento.length > 0);
}
console.log(todosSubString('Hola'))