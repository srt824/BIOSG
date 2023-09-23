import { eliminarProducto } from "./admin.js";
import { comprarProducto } from "./carrito.js";


const userLogin = document.getElementById("userLogin")
const divProductos = document.getElementById("productosDestacados");
const filterInput = document.getElementById("filter__input")
const filterLista = document.getElementById("filter__lista")
const filterNombre = document.getElementById("filter__nombre")
const filterPrecio = document.getElementById("filter__precio")

localStorage.setItem("productos", JSON.stringify(productosDestacados));
export let productosDisponibles = JSON.parse(localStorage.getItem("productosDestacados"));

let usuarioLogeado = JSON.parse(sessionStorage.getItem("usuario"))

document.addEventListener("DOMContentLoaded" , () => {

    if(usuarioLogeado === null){
        const a = document.createElement("a")
        a.href = "./html/usuarios.html"
        a.innerHTML = "Login"
        userLogin.appendChild(a)
    }else{
        const p = document.createElement("p")
        const close = document.createElement("button")

        p.innerHTML = `Bienvenido ${usuarioLogeado.user}`
        close.id = "cerrar__sesion"
        close.innerHTML = "cerrar sesion"
        close.addEventListener("click", () => {
            Swal.fire(`Gracias por comprar en nuestra tienda ${usuarioLogeado.user}. Usuario deslogeado.`)
            
            sessionStorage.removeItem("usuario")
            location.reload()
        })

        userLogin.appendChild(p)
        userLogin.appendChild(close)
    }
    generarCardsProductos(productosDisponibles)
})

export const generarCardsProductos = (productosDestacados) => {
    divProductos.innerHTML = "";

    productosDestacados.forEach((producto) => {

        const { imagen , nombre, plataforma, precio, id } = producto

        let card = document.createElement("div")
        
        card.className = "producto";
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${imagen}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${plataforma}</p>
                <p class="card-text">$${precio}</p>
                <button id="comprar${id}" class="btn btn-primary">Comprar</button>

                ${
                    usuarioLogeado?.admin === true ? `<button id="eliminar${id}" class="btn btn-danger">Eliminar</button>` : ""
                }
            </div>
        </div>
        `;

        divProductos.appendChild(card)

        const btnComprar = document.getElementById(`comprar${id}`)
        btnComprar.addEventListener("click", () => comprarProducto(id))

        if(usuarioLogeado?.admin === true) {
            const btnEliminar = document.getElementById(`eliminar${id}`)
            btnEliminar.addEventListener("click", () => eliminarProducto(id))
        }

        
    });
};


//filtro

filterInput.addEventListener("keyup", (e) => {
    const productosFilter = productosDisponibles.filter((producto) => producto.nombre.toLowerCase().includes(e.target.value))
    
    productosDisponibles = productosFilter

    if(e.target.value !== ""){
        generarCardsProductos(productosFilter)
    }else{
        productosDisponibles = JSON.parse(localStorage.getItem("productosDestacados"))
        generarCardsProductos(productosDisponibles)
    }
})



filterLista.addEventListener("click", (e) => {
    const productosFilter = productosDisponibles.filter((producto) => producto.plataforma.toLowerCase().includes(e.target.innerHTML.toLowerCase()))
    
    productosDisponibles = productosFilter

    if(e.target.innerHTML !== "Todos"){
        generarCardsProductos(productosFilter)
    }else{
        productosDisponibles = JSON.parse(localStorage.getItem("productosDestacados"))
        generarCardsProductos(productosDisponibles)
    }
})



filterNombre.addEventListener("click", (e) => {
    filtrarPorNombre(e.target.innerHTML)
})

const filtrarPorNombre = (orden) => {
    let productos

    if(orden === "Ascendente") {
        productos = productosDisponibles.sort((a, b) => {
            if(a.name.toLowerCase() > b.nombre.toLowerCase()) {
                return 1
            }else if (a.name.toLowerCase < b.nombre.toLowerCase()) {
                return -1
            }else {
                return 0
            }
        })
    }else if (orden === "Descendente") {
        productos = productosDisponibles.sort((a, b) => {
            if(a.name.toLowerCase() < b.nombre.toLowerCase()) {
                return 1
            }else if (a.name.toLowerCase > b.nombre.toLowerCase()) {
                return -1
            }else {
                return 0
            }
        })
    }

    generarCardsProductos(productos)
}



filterPrecio.addEventListener("click", (e) => {
    const orden = e.target.innerHTML
    let productos

    if(orden === "Ascendente") {
        productos = productosDisponibles.sort((a, b) => a.precio - b.precio)
    }else if (orden === "Descendente") {
        productos = productosDisponibles.sort((a, b) => b.precio - a.precio)
    }

    generarCardsProductos(productos)

})


  

    