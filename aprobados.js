function suspensos(alumnos) {
    let aprobados = 0;
    let suspenso = 0;
    for(alumno of alumnos){
        if (alumno[1] >= 5) {
            aprobados++;
        }else{
            suspenso++;
        }
    }
    return{
        "aprobados": aprobados,
        "suspensos": suspensos
    }
}