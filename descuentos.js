function valorOriginal (precio){
    return precio
    
}

function descuentoValor (precio,descuento){
    const discountValue = valorOriginal(precio) * (100 - descuento) /100
    console.log(discountValue)
    return discountValue
}

function calcularValorDescuento () {
    const input = document.getElementById("InputValor");
    const value = input.value
    const descuento = document.getElementById("InputDescuento");
    const discount = descuento.value
    
    const discount1 = descuentoValor(value, discount)
    alert(discount1)
}
