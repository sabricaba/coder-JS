$(document).ready(() => {console.log("documento cargado");

const nombre =  prompt("¿Cual es su nombre?");

$(`body`).prepend(`<h1 id="compreYa">No pierda estas super oportunidades ${nombre}, compre ya!</h1>`);
$(`body`).prepend(`<h3>Bienvenid@ ${nombre}</h3>`);

$("#compreYa").css({
    "color": "red",
    "font-size":"30px",
    height: `50px`,
    opacity: 1,});

const productos = [
    {id:1, producto:"Alimento", precio:500},
    {id:2, producto:"Baño", precio:250},
    {id:3, producto:"Veterinaria", precio:800},
    {id:4, producto:"Juguetes y premios", precio:550},
    {id:5, producto:"Guarderia", precio:1000},
    {id:6, producto:"Educación", precio:770},
];

$(`#prodcutos`).append(`<p>Nuestros productos son:</p>`);

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
    $(`#productos`).append(crearLista(productos));
}

app();

$(`.boton`).on('click', ()=> {
    console.log("compraste un elemento");
});
$("body").append(`<button id="botonProductos">Mostrar productos</button>`);
$("#botonProductos").css({
    "width": "200px",
    "height": "70px",
    "font-size": "20px",
    "font-weight": "bold"

});
$("#productos").hide();
$("#botonProductos").click(()=> {
    $("#productos").toggle();
});
$(`#compreYa`).animate({
    height: `70px`,
    opacity: 0.5,
    'font-size': '50px'
}, 3000, () =>{$(`#compreYa`).animate({
    'font-size': '30px',
    height: `50px`,
    opacity: 1,
});
});

});