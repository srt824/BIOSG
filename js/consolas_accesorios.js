
//import { comprarProducto } from "./carrito.js";



const btnCarritoConsola = document.getElementById("btnCarritoConsola");
const lista = document.getElementById("consolas__accesorios");

fetch('/consolas.json')
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

        const comprarBtn = document.getElementById(`comprar${producto.id}`)
        comprarBtn.addEventListener("click", () => comprarProducto(producto.id))

        });
    })