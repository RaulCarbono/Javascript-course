function descuentoValor (precio,descuento){
    const discountValue = 100 - descuento;
    const precioConDescuento = (precio * discountValue) /100;
    
    return precioConDescuento
}

function onClickCalcularValorDescuento () {
    const inputPrice = document.getElementById("InputValor");
    const priceValue = inputPrice.value

    const inputDiscount = document.getElementById("InputDescuento");
    const discountValue1 = inputDiscount.value
    
    const priceDiscount = descuentoValor(priceValue, discountValue1)
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son $" + priceDiscount
}
