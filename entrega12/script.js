const nombre =  prompt("¿Cual es su nombre?")

$(`body`).append(`<h3>Bienvenid@ ${nombre}</h3>`);

const productos = [
    {id:1, producto:"Alimento", precio:500},
    {id:2, producto:"Baño", precio:250},
    {id:3, producto:"Veterinaria", precio:800},
    {id:4, producto:"Juguetes y premios", precio:550},
    {id:5, producto:"Guarderia", precio:1000},
    {id:6, producto:"Educación", precio:770},
];

$(`body`).append(`<p>Nuestros productos son:</p>`);

function crearBoton(id) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = 'Comprar';
    btn.className = 'boton'
    return btn;
}

function crearItem(item) {
    const li = document.createElement("li");
    li.innerHTML = `Producto: ${item.producto} / Precio: $${item.precio}`;
    li.appendChild(crearBoton());
    return li;
}

function crearLista(items) {
    const contenedor = document.createElement("ul");

    for (let item of items) {
        contenedor.append(crearItem(item));
    }

    return contenedor;
}

function app() {
    $(`body`).append(crearLista(productos));
}

app();
$(`.boton`).on('click', function(){
    console.log("compraste un elemento")
});