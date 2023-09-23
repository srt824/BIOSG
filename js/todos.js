

const lista = document.getElementById("todosLosProductos");

fetch('/data.json')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((producto) => {
        let card = document.createElement("div");
        
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.plataforma}</p>
                <p class="card-text">$${producto.precio}</p>
                <button id="comprar${producto.id}" class="btn btn-primary">Comprar</button>
            </div>
        </div>
        `;

        lista.append(card);

        const btnComprar = document.getElementById(`comprar${producto.id}`)
        btnComprar.addEventListener("click", () => comprarProducto(producto.id))

        });
    })



/*let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];


const traerProductos = async () => {
    const res = await fetch("./data.json");
    const data = await res.json();

    /*data.forEach((producto) => {
        let card = document.createElement("div");

        card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.plataforma}</p>
                <p class="card-text">$${producto.precio}</p>
                <button id="comprar${producto.id}" class="btn btn-primary">comprar</button>
            </div>
        </div>
        `;
        lista.append(card);

        /*const btnReservar = document.getElementById(`comprar${producto.id}`)
        btnReservar.addEventListener("click", () => agregarProducto(producto.id))


    }
}
*/
/*



const agregarProducto = ((idProducto) => {
    const producto = data.find((producto) => producto.id === idProducto)


    const { nombre, precio, imagen, id } = producto

    const productoCarrito = carrito.find((producto) => producto.id === idProducto)

    if(productoCarrito === undefined){
        const nuevoProductoCarrito = {
            id: id,
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            cantidad: 1
        }

        carrito.push(nuevoProductoCarrito)

        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    }else{
        const indexProductoCarrito = carrito.findIndex((producto) => producto.id === idProducto)

        carrito[indexProductoCarrito].cantidad++
        carrito[indexProductoCarrito].precio = precio * carrito[indexProductoCarrito].cantidad

        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
})
*/
