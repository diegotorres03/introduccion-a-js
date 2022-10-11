
const array = [8,4,5,2,9,1,5,0]

function ordenar(num1, num2) {
    if(num1 > num2) return 1
    if(num1 < num2) return -1
    return 0
}

const ordenados = array.sort(ordenar)
console.log(ordenados) // [2,4]