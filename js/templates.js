const basket = JSON.parse(localStorage.getItem("myBasket")) || []

function returnCard({ id, image, brand, price, stock }) {
    return `<div class="card" id="card ${id}">
                <div class="card-image"><img src = "images/${image}" alt="Imagen del producto"></div>
                <div class="card-brand">Marca: ${brand}</div>
                <div class="card-price">$ ${price}</div>
                <div class="card-stock"> Stock: ${stock} unidades </div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${id}" title="Click para agregar '${brand}' al carrito"><img src="images/basket-color.png"></button>
                </div>
            </div>`
}


function makeBasket(product) {
    return `<tr>
                <td class="centrar img-xx-large"><img src = "images/${product.image}" alt="Imagen del producto"></td>
                <td>${product.brand}</td>
                <td>${product.price}</td>
                <td><button class="button button-outline button-delete" id="${product.id}" title="Remover de la canasta de compra">QUITAR 🗑</button></td>
            </tr>`
}


function returnError() {
    return `<div class="card-error">
                <h2>Error de conexión</h2>
                <h3>No se pudieron cargar los productos</h3>
                <h3>Intenta nuevamente en unos instantes</h3>
            </div>`
}



function returnUnderAge() {
    return `<div class="card-error">
                <h2>¿QUE HACES EN ESTE SITIO?</h2>
                <h3>No deberias fumar ni beber</h3>
                <h3>Fumar es MALO</h3>
            </div>`
}


function purchaseDone() {
    return `<div class="card-succes">
                <h2>Tu compra ha sido realizada</h2>
                <h3>los detalles de tu factura han sido enviados al mail enviado</h3>
                <h3>¡Gracias por tu compra!</h3>
            </div>`
}