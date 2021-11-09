let miNombre = prompt("Ingrese su nombre")

if(!miNombre == " ") {
    alert ("Hola " + miNombre);
}else{
    prompt ("Por favor ingrese su nombre");
}

let misMascotas = parseInt(prompt("¿Cuantas mascostas tiene usted?"))

if(misMascotas <= 0) {
    alert("Usted necesita una mascota");
}else if ((misMascotas => 1) && (misMascotas <= 3)){
    alert ("Usted es una persona feliz");
}else{
    alert ("Usted tiene demasiado amor");
} 
