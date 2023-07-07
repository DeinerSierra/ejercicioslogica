function existePropiedad(objeto,propiedad) {
    if (typeof objeto === 'object' && typeof propiedad === "string" 
        && objeto.hasOwnProperty.call(objeto,propiedad)) {
        return true;
    }
    return false;
}
let usuario = {
    nombre:"Deiner",
    apellido:"Sierra"
}
console.log(existePropiedad(usuario,"nombre"))