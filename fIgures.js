console.group ("cuadrados")

function perimetroCuadrado(lado) {
    return lado * 4 
}

function areaCuadrado(lado) {
    return lado * lado
}
console.groupEnd();

console.group("triangulos")
function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura ){
    return (base * altura) / 2;
}

console.groupEnd();

console.group("Circulos")

const radioCirtulo = 4;

function diametro (radio){
    return radio * 2;
}

const pi = Math.PI;


function circunferencia (radio){
    const diametro1 = diametro(radio)
    return diametro1 * pi
}

function area (radio){
    return (radio * radio) * pi
}

// interaccion con html
function calcularPerimetroCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
}

function calcularAreaCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value)
    alert(area);
}
