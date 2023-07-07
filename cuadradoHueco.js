function cuadrado(numero) {
    let lado = "";
    let vertical = "";
    for (let i = 0; i < numero; i++) {
      lado += "*";
    }
    
    let dibujo = lado + "\n";
    console.log(dibujo, 'Primer lado de arriba')  
    for (let i = 2; i < numero; i++) {
        vertical += "*";//primer lador vertical
        for (let x = 0; x < numero - 2; x++) {
          vertical += "=";
        }
        vertical += "*";//ultimo lado vertical
        
        dibujo += vertical + "\n";
        vertical = "";
        
    }
  
    dibujo += lado;
    return dibujo;
  }
  
  console.log(cuadrado(6));
  