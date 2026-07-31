// 1. Array de objetos con todos los productos del menú
const productos = [
    {
        id: "h1",
        nombre: "Hamburguesa de la casa",
        categoria: "hamburguesa",
        precio: 50000,
        descripcion:
            "Una jugosa carne de res a la parrilla con queso cheddar tibio y derretido, cubierta con lechuga fresca y tomate, dentro de un pan brioche suave.",
        imagen: "https://www.burgerfi.com/wp-content/uploads/2025/01/classic-meat-burger-with-fries-scaled.webp",
    },
    {
        id: "h2",
        nombre: "Hamburguesa BBQ Bacon",
        categoria: "hamburguesa",
        precio: 34000,
        descripcion:
            "Carne de res 100% a la parrilla con tiras de tocineta crujiente, queso americano, cebolla caramelizada y abundante salsa BBQ.",
        imagen: "https://chefeel.com/chefgeneralfiles/2021/07/front-view-burger-on-stand-scaled.jpg",
    },
    {
        id: "h3",
        nombre: "Hamburguesa Doble Cheese",
        categoria: "hamburguesa",
        precio: 38000,
        descripcion:
            "Dos carnes de res perfectamente selladas, doble porción de queso cheddar fundido, pepinillos, cebolla y nuestra salsa especial.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWWKQbK9tNrpyr9OmOl-IHfWi7G9YRkco7zDKuJc4aw&s=10",
    },
    {
        id: "p1",
        nombre: "Pizza de Pepperoni",
        categoria: "pizza",
        precio: 32500,
        descripcion:
            "Su base de masa crujiente, salsa de tomate roja, queso mozzarella fundido y rodajas de un embutido especiado de cerdo y res.",
        imagen: "https://cdn.blog.paulinacocina.net/wp-content/uploads/2024/10/receta-pizza-de-pepperoni-facil-1729847335.jpg",
    },
    {
        id: "p2",
        nombre: "Pizza Hawaiana",
        categoria: "pizza",
        precio: 34000,
        descripcion:
            "Deliciosa combinación de queso mozzarella, jamón y trozos de piña fresca sobre una masa crujiente con salsa de tomate tradicional.",
        imagen: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/recipe_pics_v2/medium/hawaiian_pizza.jpg",
    },
    {
        id: "p3",
        nombre: "Pizza Cuatro Quesos",
        categoria: "pizza",
        precio: 36000,
        descripcion:
            "Una mezcla irresistible de mozzarella, parmesano, cheddar y queso azul, horneada sobre una masa artesanal con un ligero toque de orégano.",
        imagen: "https://www.infobae.com/resizer/v2/BTS3SYGZVRCNNJME5QYF63XBTA.jpg?auth=7df3445b0c3a9afe65c363e716c13baae1cef118de4a6f2c9e3e402b9faebf64&smart=true&width=1200&height=1200&quality=85",
    },
    {
        id: "b1",
        nombre: "Limonada de Coco",
        categoria: "bebida",
        precio: 12500,
        descripcion:
            "Refrescante mezcla de limón natural, crema de coco y hielo triturado, perfecta para acompañar cualquier plato del menú.",
        imagen: "https://whiskedawaykitchen.com/wp-content/uploads/2021/05/limonada-de-coco-4-scaled.jpg",
    },
    {
        id: "b2",
        nombre: "Malteada de Chocolate",
        categoria: "bebida",
        precio: 16000,
        descripcion:
            "Cremosa malteada preparada con helado de chocolate, leche fría y crema batida, decorada con salsa de chocolate.",
        imagen: "https://sazonsula.com/wp-content/uploads/2022/06/receta-malteada-de-cafe-sazon-sula.jpg",
    },
    {
        id: "po1",
        nombre: "Cheesecake de Fresa",
        categoria: "postres",
        precio: 18900,
        descripcion:
            "Suave pastel de queso sobre una base de galleta de mantequilla, cubierto con una deliciosa salsa de fresas naturales.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWnaMap4fRHw3wmBfKX6QA3u18zUpgHHh6gUGxgCDQAeoB8t8g8GPtQUyC&s=10",
    },
    {
        id: "po2",
        nombre: "Pastel Tres Leches",
        categoria: "postres",
        precio: 20900,
        descripcion:
            "Esponjoso bizcocho bañado en una deliciosa mezcla de leche condensada, leche evaporada y crema de leche, cubierto con crema batida.",
        imagen: "https://www.modernhoney.com/wp-content/uploads/2024/10/Tres-Leches-Cake-18-500x500.jpg",
    },
];

// Estado global del carrito
let carrito = [];

// Elementos del DOM
const contenedorProductos = document.getElementById("contenedorProductos");
const listaCarrito = document.getElementById("listaCarrito");
const elementoSubtotal = document.getElementById("subtotal");
const botonesFiltro = document.querySelectorAll(".filtro");

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos(productos);
    configurarFiltros();
});

// 2. Función para pintar las tarjetas dinámicamente
function mostrarProductos(lista) {
    contenedorProductos.innerHTML = "";

    lista.forEach((prod) => {
        const div = document.createElement("div");
        div.className = "col-12 col-md-6 col-lg-4 d-flex align-items-stretch";
        div.innerHTML = `
            <div class="card w-100 shadow-sm border-0">
                <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}" style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="card-title fw-bold">${prod.nombre}</h5>
                        <p class="card-text text-muted small">${prod.descripcion}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <span class="fs-5 fw-bold text-dark">$${prod.precio.toLocaleString("es-CO")}</span>
                        <button class="btn btn-primary btn-agregar" data-id="${prod.id}">
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        `;
        contenedorProductos.appendChild(div);
    });
}

// 3. Filtrado por categorías
function configurarFiltros() {
    botonesFiltro.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const categoria = e.currentTarget.getAttribute("data-categoria");

            if (categoria === "todas") {
                mostrarProductos(productos);
            } else {
                const filtrados = productos.filter(
                    (p) => p.categoria === categoria,
                );
                mostrarProductos(filtrados);
            }
        });
    });
}

// 4. Delegación de eventos para agregar al carrito
contenedorProductos.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-agregar")) {
        const id = e.target.getAttribute("data-id");
        const productoEncontrado = productos.find((p) => p.id === id);
        agregarAlCarrito(productoEncontrado);
    }
});

function agregarAlCarrito(producto) {
    const existe = carrito.find((item) => item.id === producto.id);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    renderizarCarrito();
}

// 5. Controles dentro del carrito lateral
listaCarrito.addEventListener("click", (e) => {
    const id = e.target.closest("[data-id]")?.getAttribute("data-id");
    if (!id) return;

    if (e.target.classList.contains("btn-mas")) {
        const item = carrito.find((p) => p.id === id);
        if (item) item.cantidad++;
    } else if (e.target.classList.contains("btn-menos")) {
        const item = carrito.find((p) => p.id === id);
        if (item) {
            item.cantidad--;
            if (item.cantidad === 0) {
                carrito = carrito.filter((p) => p.id !== id);
            }
        }
    } else if (e.target.closest(".btn-quitar")) {
        carrito = carrito.filter((p) => p.id !== id);
    }

    renderizarCarrito();
});

// 6. Actualización visual de la barra lateral y subtotal
function renderizarCarrito() {
    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        listaCarrito.innerHTML =
            '<p class="text-muted text-center py-4">Tu carrito está vacío</p>';
        elementoSubtotal.textContent = "$0";
        return;
    }

    let subtotal = 0;

    carrito.forEach((prod) => {
        subtotal += prod.precio * prod.cantidad;

        const itemDiv = document.createElement("div");
        itemDiv.className =
            "cart-item d-flex align-items-center py-3 border-bottom";
        itemDiv.setAttribute("data-id", prod.id);

        itemDiv.innerHTML = `
            <div class="flex-grow-1">
                <h6 class="mb-1">${prod.nombre}</h6>
                <p class="mb-2 text-muted small">$${prod.precio.toLocaleString("es-CO")} c/u</p>
                <div class="d-flex align-items-center justify-content-between">
                    <div class="border rounded d-flex align-items-center">
                        <button class="btn btn-sm btn-menos border-0 px-2">−</button>
                        <span class="px-2 fw-bold">${prod.cantidad}</span>
                        <button class="btn btn-sm btn-mas border-0 px-2">+</button>
                    </div>
                    <button class="btn btn-sm btn-outline-danger btn-quitar">
                        <i class="bi bi-trash3"></i>
                    </button>
                </div>
            </div>
        `;
        listaCarrito.appendChild(itemDiv);
    });

    elementoSubtotal.textContent = `$${subtotal.toLocaleString("es-CO")}`;
}

let filtroActivo = null;

function configurarFiltros() {
    botonesFiltro.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            const categoria = e.currentTarget.getAttribute("data-categoria");

            if (filtroActivo === categoria) {
                filtroActivo = null;
                removerClaseActiva();
                mostrarProductos(productos);
                return;
            }

            if (categoria === "todas") {
                filtroActivo = null;
                removerClaseActiva();
                mostrarProductos(productos);
            } else {
                filtroActivo = categoria;
                removerClaseActiva();
                e.currentTarget.classList.add("active");

                const filtrados = productos.filter(
                    (p) => p.categoria === categoria
                );
                mostrarProductos(filtrados);
            }
        });
    });
}

function removerClaseActiva() {
    botonesFiltro.forEach((b) => b.classList.remove("active"));
}