console.group ("cuadrados")
const ladoCuadrado = 5;
console.log("Laod del cuadrado miden " + ladoCuadrado + " Cm");

const perimetroCuadrado = ladoCuadrado * 4; 
console.log("el perimetro del cuadrado es " + perimetroCuadrado + "Cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("EL area del cuadrado es " + areaCuadrado + " Cm")
console.groupEnd();

console.group("triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "los lados de mi triangulo son : "+ 
    ladoTriangulo1 
    + "cm " 
    + ladoTriangulo2 + 
    "cm " 
    + baseTriangulo 
    + "cm "
    );
const alturaTriangulo = 5.5;


console.log("La altura del triangulo es  " + alturaTriangulo + " Cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log("EL perimetro del triangulo " + perimetroTriangulo + " Cm")


const areaTriangulo = (baseTriangulo + alturaTriangulo /2)
console.log("EL area del triangulo es " + areaCuadrado + " Cm")

console.groupEnd();

console.group("Circulos")

const radioCirtulo = 4;
console.log("EL radio del circulo es " + radioCirtulo + " Cm")

const pi = Math.PI;
console.log("PI es" + pi + " Cm")

const diametro = radioCirtulo *2;
console.log("EL circunferencia del circulo es " + diametro + " Cm")

const circunferencia = diametro * pi;
console.log("la circunferencia del cuadrado es  " + circunferencia + " Cm")

const area =  (radioCirtulo * radioCirtulo) *pi
console.log("el area del circulo es " + area + "Cm")
