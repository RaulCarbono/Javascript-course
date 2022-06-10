function descuentoValor (precio,descuento){
    const discountValue = 100 - descuento;
    const precioConDescuento = (precio * discountValue) /100;
    
    return precioConDescuento
}

function calcularValorDescuento () {
    const input = document.getElementById("InputValor");
    const value = input.value
    const descuento = document.getElementById("InputDescuento");
    const discount = descuento.value
    
    const discount1 = descuentoValor(value, discount)
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son $" + discount1
}
