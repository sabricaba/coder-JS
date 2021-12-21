$(document).ready(() => {console.log("documento cargado");

const nombre =  prompt("¿Cual es su nombre?");

$(`body`).prepend(`<h1 id="compreYa">No se pierda esta oportunidad, compre!</h1>`);
$(`body`).prepend(`<h3 id="usuario">Bienvenid@ ${nombre}</h3>`);

$("#compreYa").css({
    "color": "black",
    "font-size":"30px",
    height: `50px`,
    opacity: 1,});

    const urlget = "http://127.0.0.1:5500/productos.json";
    $("#botones").prepend('<button id="btnCierreCatalogo" >Cierre catalogo</button>');
    $("#btnCierreCatalogo").click(() => {
        $("#catalogo").html(" ")
    });

    $("#botones").prepend('<button id="btnCatalogo" >Catalogo</button>');
$("#btnCatalogo").click(() => {
    $.get(urlget, (respuesta, estado) => {
        if(estado === "success"){
            let catalogo = respuesta
            $("#catalogo").html(" ")
            for (const auto of catalogo){
                $("#catalogo").append(`<div>
                <h3>${auto.producto}</h3>
                <img class="image" src="${auto.image}" ">
                </div>`)
            }
        }
});
});


const productos = [
    {id:1, producto:"Alimento para gato", precio:1550, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0g8eGxjj7CvakIVDcT9yAA8GPnP9NKN2KQ&usqp=CAU"},
    {id:2, producto:"Alimento para perro", precio:1675, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHVfUlFiBVU4kGe_MQhcvHy9wn8fnNXhbKg&usqp=CAU"},
    {id:3, producto:"Baños para perro", precio:1075, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAPMcd1wvI3UtpHkGfbBbuIuMhkq998sGSQ&usqp=CAU"},
    {id:4, producto:"Servicio veterinaria", precio:1350, image: "http://1.bp.blogspot.com/-pL78OThyv_c/Ve4OnTZWF4I/AAAAAAAAAAM/Gx73N1UKfA4/s1600/perrogato.jpg"},
    {id:5, producto:"Premios", precio:550, image:"https://www.mundoperro.net/wp-content/uploads/Golosinas-y-premios-para-perros.jpg"},
    {id:6, producto:"Juguetes", precio:1950, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTF2GdIvUO9jcG3LP39XMWFWNWIfWpIMZlmA&usqp=CAU"}
];
$(`#productos`).append(`<p>Nuestros productos son:</p>`);

function crearBoton(id) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = 'Comprar';
    btn.className = 'boton'
    return btn;
}

function crearItem(item) {
    const li = document.createElement("li");
    li.innerHTML = `Item: ${item.producto} / Precio: $${item.precio}`;
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
$("body").append(`<button id="botonProductos" >Mostrar precios</button>`);
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