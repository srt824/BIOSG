
import { generarCardsProductos, productosDisponibles } from "./inicio.js"

const btnAgregar = document.getElementById("agregar__producto")
const usuarioLogeado = JSON.parse(sessionStorage.getItem("usuario"))
const agregarProductos = document.getElementById("form__agregar")
const divProductos = document.getElementById("productosDestacados");
const btnModificar = document.getElementById("btn__modificar")

export const eliminarProducto = (id) => {
    const productoEliminar = productosDisponibles.findIndex((producto) => producto.id === id)
    productosDisponibles.splice(productoEliminar, 1)

    localStorage.setItem("productos", JSON.stringify(productosDisponibles))
    generarCardsProductos(JSON.parse(localStorage.getItem("productos")))
}


class Productos{
    constructor(nombre, precio, imagen, plataforma){
        this.id = generarId(),
        this.nombre = nombre,
        this.precio = precio,
        this.imagen = imagen,
        this.plataforma = plataforma
    }
}

const generarId = () => {
    const id = productosDisponibles.map((producto) => { return producto.id })

    const max = Math.max(...id) + 1
    return max;
}

usuarioLogeado?.admin === true ? (btnAgregar.style.display = "block") : (btnAgregar.style.display = "none")

usuarioLogeado?.admin === true ? (btnModificar.style.display = "block") : (btnModificar.style.display = "none")


btnAgregar.addEventListener("click", () => generarVistaAgregar())

const generarVistaAgregar = () => {
    agregarProductos.innerHTML = ""

    agregarProductos.style.display = "block"

    const form = document.createElement("form")

    form.innerHTML = `
        <div>
            <label for="nombre">Nombre:</label>
            <input type="text" name="" id="nombre"/>
        </div>
        <div>
            <label for="precio">precio:</label>
            <input type="text" name="" id="precio"/>
        </div>
        <div>
            <label for="imagen">imagen:</label>
            <input type="text" name="" id="imagen"/>
        </div>
        <div>
            <label for="categoria">categoria:</label>
            <input type="text" name="" id="categoria"/>
        </div>

        <button id="cargar" class="btn btn-primary" type="button">Cargar</button>
        <button id="cerrar" class="btn btn-danger" type="button"> X cerrar</button>
    
    `

    agregarProductos.appendChild(form)

    const btnCargar = document.getElementById("cargar")
    btnCargar.addEventListener("click", (e) => {
        e.preventDefault()
        guardarProducto()
    })

    const btnCerrar = document.getElementById("cerrar")
    btnCerrar.addEventListener("click", (e) => {
        agregarProductos.style.display = "none"
    })

    const guardarProducto = () => {
        const nombre = agregarProductos.children[0][0].value
        const precio = agregarProductos.children[0][1].value
        const imagen = agregarProductos.children[0][2].value
        const categoria = agregarProductos.children[0][3].value

        if(nombre !== "" && precio !== "" && imagen !== "" && categoria !== "") {
            const nuevoProducto = new Productos(nombre, precio, imagen, categoria)
            productosDisponibles.push(nuevoProducto)

            localStorage.setItem("productos", JSON.stringify(productosDisponibles))

            agregarProductos.style.display = "none"

            generarCardsProductos(productosDisponibles)

        }else{
            Swal.fire({
                icon: 'error',
                //title: 'Oops...',
                text: 'Por favor, completá todos los campos',
                //footer: '<a href="">Why do I have this issue?</a>'
            })
        }

    }
}


btnModificar.addEventListener("click", () => {modificarProductosCard()})

const modificarProductosCard = () => {

    divProductos.innerHTML = "";

    productosDisponibles.forEach((producto) => {
      let card = document.createElement("div");
      card.className = "producto";
      card.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
        <p>Imagen: <input type="text" value="${producto.imagen}"></p>
        <p>Nombre: <input type="text" value="${producto.nombre}"></p>
        <p>Precio: <input type="text" value="${producto.precio}"></p>
        <p>Plataforma: <input type="text" value="${producto.plataforma}"></p>
        <div class="card-body">
        <button id="boton${producto.id}" class="btn btn-success">Modificar</button>
        <button id="cancelar${producto.id}" class="btn btn-danger">Cancelar</button>
        </div>
    
        </div>`;
  
      divProductos.appendChild(card);
      const btnAceptar = document.getElementById(`boton${producto.id}`)
      const btnCancelar = document.getElementById(`cancelar${producto.id}`)
  
      btnAceptar.addEventListener("click", (e) => modificarProductos(e,producto.id))
      btnCancelar.addEventListener("click", () => generarCardsProductos(productosDisponibles))
    });
  

}



const modificarProductos = (e, id) => {
    const productoIndice = productosDisponibles.findIndex((producto) => producto.id === id)

    const imagen = e.target.parentElement.parentElement.children[1].children[0].value
    const nombre = e.target.parentElement.parentElement.children[2].children[0].value
    const precio = e.target.parentElement.parentElement.children[3].children[0].value
    const plataforma = e.target.parentElement.parentElement.children[4].children[0].value

    productosDisponibles[productoIndice].nombre = nombre
    productosDisponibles[productoIndice].precio = precio

    productosDisponibles[productoIndice].imagen = imagen
    productosDisponibles[productoIndice].plataforma = plataforma


    localStorage.setItem("productos", JSON.stringify(productosDisponibles))
    generarCardsProductos(productosDisponibles)

}