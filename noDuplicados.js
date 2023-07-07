function noDuplicados(elementos) {
    elementos = elementos.filter(elemento =>{
        return typeof elemento === "number"
    })
    return Array.from(new Set(elementos));
}
console.log(noDuplicados([1,2,3,4,5,5,"uno","dos","Hola"]))