class Product{
    constructor(id, image, brand, price, stock){
        this.id = id
        this.image = image
        this.brand = brand.toUpperCase()
        this.price = price
        this.stock = parseInt(stock)
    }

    promotionPrice(){
        return("si compras 10 unidades de este producto pagaras ", (this.price*0,80), " por cada unidad")
    }
}
