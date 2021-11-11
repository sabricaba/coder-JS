let metodoPago = prompt("Elija metodo de pago efectivo/tarjeta")

function calculo (metodoPago) {
    let precio = parseInt(prompt("Ingrese precio"));
    switch (metodoPago) {
        case "efectivo":
            return precio;
            break;
        case "EFECTIVO":
            return precio;
            break;
        case "Efectivo":
            return precio;
            break;
        case "eFECTIVO":
            return precio;
            break;
        case "tarjeta":
            return precio*(1+0.21);
            break;
        case "TARJETA":
            return precio*(1+0.21);
            break;
        case "Tarjeta":
            return precio*(1+0.21);
            break;
        case "tARJETA":
            return precio*(1+0.21);
            break;
        default:
            return "Error en metodo de pago";
            break;
    }
}

function mostrar (mensaje) {
    if (mensaje != "Error en metodo de pago") {
        alert("Su precio a abonar es " + mensaje);
    } else { 
        alert("Error en metodo de pago")
    }
}

let resultado = calculo(metodoPago);
mostrar(resultado);