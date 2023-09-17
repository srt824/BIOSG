

const lista = document.getElementById("todosLosProductos");

fetch('/productos.json')
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
                <button id="comprar${producto.id}" class="btn btn-primary">comprar</button>
            </div>
        </div>
        `;

        lista.append(card);

        const btnReservar = document.getElementById(`comprar${producto.id}`)
        btnReservar.addEventListener("click", () => comprarProducto(producto.id))

        });
    })

