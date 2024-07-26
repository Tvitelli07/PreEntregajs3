
let carrito = [];
let total = 0;


function agregarAlCarrito(producto) {
    carrito.push(producto);
    total += producto.precio;
    actualizarCarrito();
}


function eliminarDelCarrito(indice) {
    total -= carrito[indice].precio;
    carrito.splice(indice, 1);
    actualizarCarrito();
}


function actualizarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.innerHTML = '';

    carrito.forEach((producto, indice) => {
        const item = document.createElement('div');
        item.classList.add('carrito-item');
        item.innerHTML = `
            <p>${producto.nombre} - $${producto.precio}</p>
            <button onclick="eliminarDelCarrito(${indice})" class="btn btn-danger btn-sm">Eliminar</button>
        `;
        carritoContainer.appendChild(item);
    });

    const totalContainer = document.getElementById('total-container');
    totalContainer.innerHTML = `<strong>Total: $${total}</strong>`;
}


document.querySelectorAll('.btn-primary').forEach((button, index) => {
    button.addEventListener('click', () => {
        const producto = obtenerProductoPorIndice(index);
        agregarAlCarrito(producto);
    });
});


function obtenerProductoPorIndice(indice) {
    const productos = [...Indumentaria, ...Zapatillas, ...Accesorios];
    return productos[indice];
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrito();
});
