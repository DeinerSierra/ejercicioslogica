function dividir(array_principal,division) {
    let arreglos = [];
    for (let element of array_principal) {
        let ultimo = arreglos[arreglos.length - 1];
        if (!ultimo || ultimo.length === division) {
            arreglos.push([element])
        }else{
            ultimo.push(element)
        }
        
    }
    return arreglos;
}
console.log(dividir([1,2,3,4,5],2))