function escalera(num) {
    let escalera_completa = "";
    for (let nivel = 1; nivel <= num; nivel++) {
        let escalones = "";
        for (let escalon = 0; escalon <= nivel; escalon++) {
            escalones += '[-]'
            
        }
        escalera_completa += escalones +'\n';
    }
    return escalera_completa;
}
console.log( escalera(5))