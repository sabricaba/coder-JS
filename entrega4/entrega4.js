let precio = parseInt(prompt("Ingrese precio"));
let cuota = parseInt(prompt("Ingrese cantidad de cuotas"));

function interes(cuota) {
    switch(cuota){
        case 1:
            return 0;
        case 3:
            return 0.15;
        case 6:
            return 0.25;
        case 12:
            return 0.45;
        case 18:
            return 0.50;
        default:
            return "Cuotas incorrecta";
    }
}

let int = interes(cuota);

function resultado () {
    if (typeof int === 'string') {
        return "Error";
    } else {
        return (precio*(1+int))/cuota;
    }
}

function mostrar(mensaje) {
    if(mensaje = "Error") {
        alert("Error");
    } else {
        alert("Su cuota será de " + mensaje);
    }
}

let resultadoMensaje = resultado();
mostrar(resultadoMensaje);
