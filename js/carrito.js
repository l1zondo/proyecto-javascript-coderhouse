console.dir(document.body)

const carrito=[];

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
    <img class="card-img-top"src="${producto.imagen}"alt="imagen">
          <h5 class="card-title">${producto.titulo}</h5>
          <p class="card-text">${producto.precio}</p>     
          <a href="#" id="miBoton"${producto.boton} class="btn btn-primary id="">COMPRAR</a>
        </div>`;

        cartas.append(carta);
}
let tabla=document.createElement("table");
tabla.className="table table-striped";
let tablaBody=document.createElement("tbody");
for(const producto of productos){
  tablaBody.innerHTML+=`
  <tr>
    <td>${producto.id}</td>
    <td>${producto.titulo}</td>
    <td>${producto.precio}</td>
    </tr>
  `;
}
tabla.append(tablaBody);
let articuloInferior=document.getElementById("inferior");
articuloInferior.append(tabla);

let miBoton=document.getElementById("miBoton");

miBoton.onclick=()=>{
  console.log("agregaste el producto a tu carrito");
  carrito.push(productos);
  console.log(carrito);
}
   