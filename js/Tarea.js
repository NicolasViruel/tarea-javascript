let codigoUsuario = parseInt(prompt("ingrese su numero")) 
let codigoNumero = 100
let message


if (codigoUsuario < 100 ){
    message= "Frio Frio, el numero que escogiste es muy bajo"
    console.log( message);
}else if (codigoUsuario > 100 ){
    message = "El numero que escogiste esta fuera de rango"
    console.log( message);
}else if (codigoUsuario == 100){
    message = "Es correcto Ganaste"
    console.log( message);
}