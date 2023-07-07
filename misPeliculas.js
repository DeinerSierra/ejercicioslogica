const peliculas = [
    {
        titulo:"El señor de los anillos",
        director:"Peter jackson",
        vista: true
    },
    {
        titulo:"Avatar",
        director:"James Cameron",
        vista: true
    },
    {
        titulo:"La Liga de la justicia",
        director:"Zack Snyder",
        vista: false
    },
    {
        titulo:"Los Vengadores",
        director:"Joe Russo",
        vista: true
    }

];

function misPeliculas(peliculas) {
    for(let pelicula of peliculas){
        let paramostrar =`"${pelicula.titulo} de ${pelicula.director}"`;
        if (pelicula.vista) {
            console.log("ya has visto: ", paramostrar);
        }else{
            console.log("no has visto: ", paramostrar);
        }
    }
    return peliculas;
}
misPeliculas(peliculas);