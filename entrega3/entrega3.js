let nombre = prompt ("Hola! Ingrese su nombre")
while (nombre != "ESC") {
    alert ("Hola " + nombre + ", practiquemos las tablas")
    break;
}

let num = parseInt(prompt(nombre + ", por favor ingrese un numero del 1 al 10"))
for (i = 1; i <= 10; i++) {
    alert("El resultado de " + i + " * " + num + " es " + num*i);
}

alert ("Excelente alumn@")
let edad = parseInt(prompt("Ahora ingrese su edad"))
switch (edad) {
    case (0<=edad<12):
        alert ("Usted es super inteligente");
        break;
    case (12<=edad<18):
        alert ("Usted es normal");
        break;
    case (18<=edad<101):
        alert ("Usted deberia ya saber las tablas");
        break;
}


