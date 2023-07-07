const usuarios = [
    {
        nombre:"Deiner",
        jobbies:["Programacion","Redes"]
    },
    {
        nombre:"Wendy",
        jobbies:["Ver Tv","Estudiar"]
    },
    {
        nombre:"Ronaldo",
        jobbies:["Fiestas","Futbol"]
    },
];
function jobbies(elementos) {
    let mapa = {};
    for(elemento of elementos){
        for(jobbie of elemento.jobbies){
            if (!mapa[jobbie]) {
                mapa[jobbie]=1;
            } else {
                mapa[jobbie]+=1;
            }
        }
    }
    return mapa;
}
console.log(jobbies(usuarios))