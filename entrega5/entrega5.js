class Producto {
    constructor (formato, precio, metodoPago) {
        this.formato = formato.toLowerCase();
        this.precio = precio;
        this.metodoPago = metodoPago.toLowerCase();
    }
    
    calculoPx() {
        if(this.metodoPago==="efectivo") {
            this.precio = this.precio
        } else {
            this.precio = this.precio*1.21
        }
    }
}

const venta1 = new Producto(prompt("¿Digital o Impreso?"), parseInt(prompt("Precio")), prompt("¿Efectivo o Tarjeta?"));
venta1.calculoPx();

console.log(venta1.precio);