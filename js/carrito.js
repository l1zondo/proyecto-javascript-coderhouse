// TABLA CARRITO

let tabla=document.createElement("table");
document.getElementById("tablabody")
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

// Suma de productos al carrito con JSON
function agregarAlCarrito(producto){
    carrito.push(producto);
    Swal.fire(
        'Producto: '+producto.titulo,
        'Agregado al carrito',
        'success',
    );
        document.getElementById('tablabody').innerHTML +=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
    localStorage.setItem('carrito',JSON.stringify(carrito));}
 productos.forEach(productos=>{
           document.getElementById(`btn${productos.id}`).addEventListener('click',function(){
             agregarAlCarrito(productos)})})
    
  // Boton finalizar
    let finalizar=document.getElementById('finalizar');
    finalizar.onclick=()=>{
        checkOut = carrito.reduce ((ac,el) => ac + el,0);
        Swal.fire({
            title: 'Pedido confirmado!',
            text: 'Estamos preparando todo para el envio',
            imageAlt: 'ok',
          });
          document.getElementById('tablabody').remove();
          localStorage.removeItem("carrito",JSON.stringify(carrito));
        };
            