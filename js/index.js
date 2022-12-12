const container = document.getElementById("container")
const welcome = document.getElementById("welcome")
const cart = []
const URL = 'DB/products.json'
const products = []

welcome.innerText = ("Esperamos tu respuesta")

fetch(URL)
    .then((response) => data = response.json())
    .then((data) => products.push(...data))
    .then(() => chargeProducts(products))
    .then(() => buttonAdd())
    .catch(error => container.innerHTML = returnError())

function chargeProducts(array) {
    let content = ""
    if (array.length > 0) {
        array.forEach(product => {
            content += returnCard(product)
        })
        container.innerHTML = content
    }
}

Swal.fire({
    title: 'Eres mayor de edad?',
    icon: 'question',
    showDenyButton: true,
    confirmButtonText: 'Si',
    denyButtonText: `No`,
    padding: "60px"
}).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        Swal.fire({
            title: 'Bienvenido/a! Puedes comprar en la tienda. Agrega tus productos a la canasta y confirma tu compra',
            icon: 'info',
            padding: "60px"
        })
        welcome.innerText = "Te damos la bienvenida al sitio"

        chargeProducts(products)

        function buttonsAct() {
            const buttonAdd = document.querySelectorAll("button.button.button-outline.button-add")
            buttonAdd.forEach(btn => {
                btn.addEventListener("click", () => {
                    let result = products.find(prod => prod.id === parseInt(btn.id))
                    cart.push(result)
                    localStorage.setItem("myBasket", JSON.stringify(cart))
                    toast(`${result.brand} se ha añadido a la canasta`, "green")
                })
            })
        }

        buttonsAct()

        function filterProducts() {
            if (inputSearch.value.trim() !== "") {
                let result = products.filter(product => product.brand.toUpperCase().includes(inputSearch.value.toUpperCase().trim()))
                if (result.length > 0) {
                    chargeProducts(result)
                    buttonsAct()
                } else {
                    toast("No se han encontrado coincidencias.", "red")
                }
            }
        }
        inputSearch.addEventListener("search", () => {
            if (inputSearch.value.trim() !== "") {
                filterProducts()
            } else {
                chargeProducts(products)
                buttonsAct()
            }
        })

    } else if (result.isDenied) {
        Swal.fire({
            title: "No puedes comprar en la tienda por ser menor de edad. Regresa cuando hayas crecido :D",
            icon: 'warning',
            padding: "70px"
        })
        welcome.innerText = "Acceso denegado"
        container.innerHTML = returnUnderAge()
    }
})

const toast = (text, bgcolor) => {
    Toastify({
        text: text,
        duration: 3000,
        close: true,
        gravity: "botton", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: { background: bgcolor || 'green', fontSize: '20px' }
    }).showToast();
}