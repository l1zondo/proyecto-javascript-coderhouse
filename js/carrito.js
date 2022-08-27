console.dir(document.body)

const productos=[{id: 1, titulo:"camisa vaquita", precio:4500,imagen:"../img/camisa-vaquita.jpg"},

{id: 2, titulo:"jean elastizado azul", precio:5000, imagen:"../img/Jean-hombre.jpg"},

{id: 3, titulo:"remera emoji", precio:2500, imagen:"../img/remera-mujer.jpg"},

{id: 4, titulo:"remera mickey mouse", precio:2500 ,imagen:"../img/mickey-chicos.jpg"},
];
 console.log(productos)

 let cartas=document.getElementById("cartas");
for(const producto of productos){
    let carta=document.createElement("div");
    carta.className="card col-md-2";
    carta.innerHTML=`
    <div class="card-body">
    <img class="card-img-top"src="${producto.imagen}"alt="imagen de jean">
    <img class="card-img-top"src="${producto.imagen}"alt="imagen">
          <h5 class="card-title">${producto.titulo}</h5>
          <p class="card-text">${producto.precio}</p>     
          <a href="#" class="btn btn-primary id="">COMPRAR</a>
        </div>`;

        cartas.append(carta);
}
let boton = document.getElementById([producto.id]) 
 document.getElementById("boton"), boton.addEventListener("click",() => {
 console.log ("agregaste al carrito")
 miCarrito.push (producto);
 });




productos.forEach(producto) 
document.getElementById(btn$[boton.id]).addEventListener("click", function(){

    agregarAlCarrito(producto)

    })
