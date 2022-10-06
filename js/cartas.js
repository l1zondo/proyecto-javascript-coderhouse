// TARJETAS EN CARRITO
let cartas=document.getElementById("cartas");
for(const producto of productos){
    let carta=document.createElement("div");
    carta.className="card col-md-2";
    carta.innerHTML=`
    <div class="card-body">
    <img class="card-img-top"src="${producto.imagen}"alt="imagen">
          <h5 class="card-title">${producto.titulo}</h5>
          <p class="card-text">${producto.precio}</p>     
          <button id='btn${producto.id}' class='btn btn-primary'>Comprar</button>
                </li>`

        cartas.append(carta);
}