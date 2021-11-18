const productos = ["Alimento para gato", "Alimento para perro", "Baños para perro", "Servicio veterinaria gatos", "Servicio veterinaria perros", "Premios para perro", "Juguetes para perros", "Juguetes para gatos"]
console.log(productos);

console.log(productos.length);

productos.push("Educación para perro", "Guarderia para perro", "Guarderia para gatos");
console.log(productos);
console.log(productos.length);

const filtro1 = productos.filter(elemento => elemento.includes("perro"));
const filtro2 = productos.filter(elemento => elemento.includes("gato"));

if(prompt("¿Perro o gato?").toLowerCase() === "perro") {
    alert ("Nuestros productos ofrecidos para usted son" + "\n" + filtro1.join("\n"))
} else {
    alert ("Nuestros productos ofrecidos para usted son" + "\n" + filtro2.join("\n"))   
}
