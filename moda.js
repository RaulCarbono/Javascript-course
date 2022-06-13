const lista1 = [
    100, 
    200,
    500,
    40000000,
];


const mitadLIsta1 = lista1.length/2 

function ispair(number) {
    if (number % 2 === 0 ) {
        return true;
    } else {
        return false;
    }
}

let mediana; 

if (ispair(lista1.length)) {

} else {
    mediana = lista1[mitadLIsta1]
}


