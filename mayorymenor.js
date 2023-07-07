function mayorMenor(num1,num2) {
    let res = "";
    if (num1 === num2) {
        res = "Los numeros son iguales"
    }else if (num1 > num2){
        res = "El numero mayor es: "+num1+"\n";
        res += "El numero menor es: "+num2;
    }else if (num1 < num2){
        res = "El numero mayor es: "+num2+"\n";
        res += "El numero menor es: "+num1;
    }else{
        res='Introduce numeros correctos';
    }
    return res;
}
console.log(mayorMenor(20,30))