# Array

los arrays son colecciones o listas de objetos.

``` js
const array = ['texto', 3123, true, ['array anidado'], {objeto: true}]
```

## methodos de los arrays

### forEach

si queremos recorer cada uno de los elementos de un array podemos usar la funcion `forEach`, esta recibe como parametro una funcion callback a la cual se le pasara el item actual, el indice y una copia del array

``` js
const arr = ['uno','dos','tres']

arr.forEach(function(elemento, indice, copia){
    console.log('recorriendo el elemento ,' + indice)
    console.log(elemento)
})
```

### map

Recorre todos los items de manera similar al forEach, adicionalmente retorna un array nuevo que contiene con el valor de lo que se retorne en la funcion que se pase como parametro.

``` js
const arrayInicial = [1,2,3]

function duplicar(num) {
    return num * 2
}

const arrayProcesado = arrayInicial.map(duplicar)
console.log(arrayProcesado) // [2,4,6]
```

*Ejemolo con array de ofjetos*

``` js
const arrayObjetos = [
    { a: 1, b:2 },
    { a: 2, b:3 },
    { a: 3, b:4 },
]

const arrayNumeros = arrayObjetos.map(function(objeto){
    return objeto.a
})

console.log(arrayNumeros) // [1,2,3]
```

### find

encuentra un elemento en un array y retorna el elemento

``` js
const array = ['a','b','c']
let res = array.find(function(item) {
    return item === 'b'
})
console.log(res) // b

const arrayObjetos = [
    { a: 1, b:2 },
    { a: 3, b:4 },
    { a: 2, b:2 },
]

res = arrayObjetos.find(function(item) {
    return item.a === item.b
})
console.log(res) // {a:2,b:2}
```

### findIndex

encuentra un elemento en un array y retorna el indice de el elemento en el array

``` js
const array = ['a','b','c']
let res = array.findIndex(function(item) {
    return item === 'b'
})
console.log(res) // 1

const arrayObjetos = [
    { a: 1, b:2 },
    { a: 3, b:4 },
    { a: 2, b:2 },
]

res = arrayObjetos.findIndex(function(item) {
    return item.a === item.b
})
console.log(res) // 2
```

### filter

return a filtered version of an array

``` js
const array = [1,2,3,4,5]

function esPar(num) {
    return num % 2 === 0
}

const pares = array.filter(esPar)
console.log(pares) // [2,4]
```

### sort

Con Sort podemos ordenar un array, recibe como paramentro una funcion que esta a su vez recibe el valor actual y el valor siguiente, es nuestro deber retornar 1 si el elemento actual es mayor, -1 si es menor o 0 si es igual

``` js
const array = [8,4,5,2,9,1,5,0]

function ordenar(num1, num2) {
    if(num1 > num2) return 1
    if(num1 < num2) return -1
    return 0
}

const ordenados = array.sort(ordenar)
console.log(ordenados) // [2,4]
```