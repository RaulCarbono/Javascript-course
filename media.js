function calcularMediaAritmeica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    )
return promedioLista1 = sumaLista1 / lista.length
 }

function calcularMedia(lista) {
   for (let i = 0; i < lista.length; i++)
    a= lista.sort()
mitadLista = a.length/2 
ispair(mitadLista)
    if (ispair(a.length)) {
        const element1 = a[mitadLista-1]
        const element2 = a[mitadLista]

        return hola = calcularMediaAritmeica([element1,element2]);
    }

} 

function ispair(number) {
    if (number % 2 === 0 ) {
        return true;
    } else {
        return false;
    }
}

let mediana; 

// if (ispair(lista1.length)) {
//  const element1 = lista1[mitadLIsta1 - 1];
//  const element2 = lista1[mitadLIsta1];

//  const promedioElement1y2 = calcularMediaAritmeica([
//     element1, 
//     element2
//  ]);

//  mediana = promedioElement1y2;

// } else {
//     mediana = lista1[mitadLIsta1]
// }
