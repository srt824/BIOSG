


/*let precio = (parseInt(prompt("Ingrese precio: ")))
let cuotas = (parseInt(prompt("Ingrese la cantidad de cuotas: ")))

function pagoEnCuotas(precio, cuotas){
    if (cuotas === 1)
        precio = precio;
    else if (cuotas === 2)
        precio *= 1.2;
    else if (cuotas === 3)
        precio *= 1.35;
    else if (cuotas === 4)
        precio *= 1.5;
    else if (cuotas === 5)
        precio *= 1.7
    else if (cuotas === 6)
        precio *= 1.9;  
    else
        alert("Sólo puedes seleccionar desde 1 hasta 6 cuotas.")
        //console.log("Sólo puedes seleccionar desde 1 hasta 6 cuotas.")

    if (cuotas > 0 && cuotas <= 6)
        alert("El monto total a pagar es: " + precio + " en " + cuotas + " cuotas ")
        //console.log("El monto total a pagar es: " + precio + " en " + cuotas + " cuotas "); 
} 
    

pagoEnCuotas(15000, 2); 
        
        
switch (cuotas) {
    case 1:

        precio = precio
        break;
    case 2:
        precio *= 1.2
        break;
    case 3:
        precio *= 1.35
        break;
    case 4:
        precio *= 1.5
        break;
    case 5:
        precio *= 1.7
        break;
    case 6:
        precio *= 1.9
        break;
} 

if (cuotas > 0 && cuotas <= 6) {
    alert("El monto total a pagar es: " + precio + " en " + cuotas + " cuotas ")
    //console.log("El monto total a pagar es: " + precio + " en " + cuotas + " cuotas ");
}else{
    alert("Sólo puedes seleccionar desde 1 hasta 6 cuotas.") 
    //console.log("Sólo puedes seleccionar desde 1 hasta 6 cuotas.") 
} */



import { productosDisponibles } from "./inicio.js";

JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito", JSON.stringify([]))

document.addEventListener("DOMContentLoaded", () => {
    dibujarCarrito();
})

let carrito = JSON.parse(sessionStorage.getItem("carrito"))
const listaCarrito = document.getElementById("items");
const footCarrito = document.getElementById("totales");
const btnCarrito = document.getElementById("btnCarrito");
const carritoTable = document.getElementById("carrito");


btnCarrito.addEventListener("click", () => {
    dibujarCarrito()
    if(carritoTable.style.display === "block"){
        carritoTable.style.display = "none"
    }else{
        carritoTable.style.display = "block"
        dibujarCarrito()
    }
})


export const comprarProducto = (idProducto) => {
    const producto = productosDisponibles.find((producto) => producto.id === idProducto)


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
        carrito[indexProductoCarrito].price = price * carrito[indexProductoCarrito].cantidad
        
        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    }

    carrito = JSON.parse(sessionStorage.getItem("carrito"))

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Usted agregó el producto ${producto.nombre} al carrito`,
        showConfirmButton: false,
        timer: 2500
    })

}

const dibujarCarrito = () => {
    listaCarrito.innerHTML = ''
    
    carrito.forEach(producto => {
        const { imagen, nombre, cantidad, precio, id } = producto

        let body = document.createElement("tr")

        body.className = "producto__carrito"

        body.innerHTML = `
        <th><img id="fotoProductoCarrito" src="${imagen}" class="card-img-top"</th>
        <td>${nombre}</td>
        <td>${cantidad}</td>
        <td>${precio / cantidad}</td>
        <td>${precio}</td>
        <td>
            <button id="+${id}" class="btn btn-success">+</button>
            <button id="-${id}" class="btn btn-danger">-</button>
        </td>
        `

        listaCarrito.append(body)

        const btnAgregar = document.getElementById(`+${id}`);
        const btnRestar = document.getElementById(`-${id}`);

        btnAgregar.addEventListener("click", () => aumentarCantidad(id));
        btnRestar.addEventListener("click", () => restarCantidad(id));

        
    });

    dibujarFooter();
}


const dibujarFooter = () => {
    if(carrito.length > 0){
        footCarrito.innerHTML = ""

        let footer = document.createElement("tr")

        footer.innerHTML = `
        <th><b>Totales:</b></th>
        <td></td>
        <td>${generarTotales().cantidadTotal}</td>
        <td></td>
        <td>${generarTotales().costoTotal}</td>
        
        <button class="btn btn-primary">Comprar</button>
        <td></td>
        <button class="btn btn-danger">Cancelar</button>
        `

        footCarrito.append(footer)
    }else{
        footCarrito.innerHTML = "<h3>No hay productos en el carrito</h3>"
    }

}

const generarTotales = () => {
    const costoTotal = carrito.reduce((total, { precio }) => total + precio, 0)
    const cantidadTotal = carrito.reduce((total, { cantidad }) => total + cantidad, 0)

    return {
        costoTotal: costoTotal,
        cantidadTotal: cantidadTotal
    }
}

const aumentarCantidad = (id) => {
    const indexProductoCarrito = carrito.findIndex((producto) => producto.id === id)
    const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad

    carrito[indexProductoCarrito].cantidad++
    carrito[indexProductoCarrito].precio = precio*carrito[indexProductoCarrito].cantidad

    sessionStorage.setItem("carrito", JSON.stringify(carrito))

    dibujarCarrito();

}

const restarCantidad = (id) => {
    const indexProductoCarrito = carrito.findIndex((producto) => producto.id === id)
    const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad

    carrito[indexProductoCarrito].cantidad--
    carrito[indexProductoCarrito].precio = precio*carrito[indexProductoCarrito].cantidad

    if(carrito[indexProductoCarrito].cantidad === 0) {
        carrito.splice(indexProductoCarrito, 1)
    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito))

    dibujarCarrito();
}



