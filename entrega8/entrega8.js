
const productos = [
    {id:1, producto:"Alimento", precio:500},
    {id:2, producto:"Baño", precio:250},
    {id:3, producto:"Veterinaria", precio:800},
    {id:4, producto:"Juguetes y premios", precio:550},
    {id:5, producto:"Guarderia", precio:1000},
    {id:6, producto:"Educación", precio:770},
];

function crearItem(item) {
    const li = document.createElement("li");
    li.innerHTML = `Producto: ${item.producto} / Precio: $${item.precio}`;
    return li;
}

function crearLista(items) {
    const contenedor = document.createElement("ul");

    for (let item of items) {
        contenedor.appendChild(crearItem(item));
    }

    return contenedor;
}

function app() {
    document.body.appendChild(crearLista(productos));
}

app();




