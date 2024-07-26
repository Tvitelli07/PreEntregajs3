
// Variables globales para el carrito y el total
let carrito = [];
let total = 0;

// Función para agregar un artículo al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    total += producto.precio;
    actualizarCarrito();
}

// Función para eliminar un artículo del carrito
function eliminarDelCarrito(indice) {
    total -= carrito[indice].precio;
    carrito.splice(indice, 1);
    actualizarCarrito();
}

// Función para vaciar todo el carrito
function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}

// Función para actualizar el carrito y mostrar el total
function actualizarCarrito() {
    const productosCarrito = document.getElementById('productos-carrito');
    productosCarrito.innerHTML = '';

    carrito.forEach((producto, indice) => {
        const item = document.createElement('div');
        item.classList.add('carrito-item');
        item.innerHTML = `
            <p>${producto.nombre} - $${producto.precio}</p>
            <button onclick="eliminarDelCarrito(${indice})" class="btn btn-danger btn-sm">Eliminar</button>
        `;
        productosCarrito.appendChild(item);
    });

    const totalContainer = document.getElementById('total-container');
    totalContainer.innerHTML = `<strong>Total: $${total}</strong>`;
}

// Event listener para los botones de agregar al carrito
document.querySelectorAll('.card-gen .btn-primary').forEach((button, index) => {
    button.addEventListener('click', () => {
        const producto = obtenerProductoPorIndice(index);
        agregarAlCarrito(producto);
    });
});

// Función para obtener el producto por índice
function obtenerProductoPorIndice(indice) {
    const productos = [...Indumentaria, ...Zapatillas, ...Accesorios];
    return productos[indice];
}

// Mostrar/Ocultar carrito
document.getElementById('ver-carrito').addEventListener('click', () => {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.style.display = carritoContainer.style.display === 'none' ? 'block' : 'none';
});

// Event listener para el botón de vaciar carrito
document.getElementById('vaciar-carrito').addEventListener('click', () => {
    vaciarCarrito();
});

// Inicializar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrito();
});
// se actualiza el carrito