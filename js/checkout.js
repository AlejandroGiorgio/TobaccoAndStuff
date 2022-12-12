const welcome2 = document.getElementById("welcome2")
welcome2.innerText = "Estas cerca de completar tu compra !"

function returnBasket() {
    let HTMLtable = ""
    const tbody = document.querySelector("tbody")
    const basket = JSON.parse(localStorage.getItem("myBasket"))

    if (basket.length > 0) {
        basket.forEach(product => HTMLtable += makeBasket(product))
        tbody.innerHTML = HTMLtable
    }
}
returnBasket()

const buttonDelete = document.querySelectorAll("button.button.button-outline.button-delete")

function buttonsDel() {
    buttonDelete.forEach(btn => {
        btn.addEventListener("click", () => {
            let result = basket.findIndex(prod => prod.id === parseInt(btn.id))
            basket.splice(result, 1)
            localStorage.setItem("myBasket", JSON.stringify(basket))
            location.reload()
        })
    })
}


function totalPrice() {
    total = 0
    priceCart = []
    const basket2 = JSON.parse(localStorage.getItem("myBasket"))
    basket2.forEach(product => priceCart.push(product.price))
    priceCart.forEach(price => (total += price))
    return total
}

buttonsDel()

const tagTotalPrice = document.getElementById("totalPrice")
tagTotalPrice.innerText = `${totalPrice()} $`

const form = document.getElementById("form")

function submitForm(){form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const username = document.getElementById("formName").value
    const email = document.getElementById("formMail").value
    const adress = document.getElementById("address").value
    const cp = document.getElementById("cp").value
    Swal.fire({
        icon:"success",
        title:'¡Compra Finalizada ' + username +'! se envio el pedido a: '+adress+' y los datos de la factura han sido correctamente enviados a:',
        padding: "60px",
        text: email,
    })
    if (basket.length > 0) {
        localStorage.clear()
        setTimeout(() => location.replace("index.html"), 6000);
    }
    else{
      toast(`No has ingresaro productos a la canasta`, "green")
    }
})}

submitForm()
