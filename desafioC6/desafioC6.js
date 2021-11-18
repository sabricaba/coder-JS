const productos = [
    {id:1, producto:"Alimento", precio:500},
    {id:2, producto:"Baño", precio:250},
    {id:3, producto:"Veterinaria", precio:800},
    {id:4, producto:"Juguetes y premios", precio:550},
    {id:5, producto:"Guarderia", precio:1000},
    {id:6, producto:"Educación", precio:770}
];

console.log(productos);
console.log(productos.length);

productos.sort((a,b) => a.precio - b.precio);
console.table(productos);

productos.sort((a,b) => {
    if(a.producto > b.producto){
        return 1;
    } 
    if(a.producto < b.producto){
        return -1;
    }   
});
console.table(productos);