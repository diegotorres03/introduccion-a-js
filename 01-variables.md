# Variables

Las variables son espacios donde podemos guardar valores.
Es como una cajita donde podemos poner diferentes tipos de datos.

en JavaScript vamos a definir las variables de la siguiente forma
```js
let variableName = 'a value'
```

## valores primitivos
los [valores primitivos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values) que se pueden guardar en variables son:
- [strings]() o cadenas de texto, son los mensajes de texto que apareceran tal como los escribimos, estos se caracterizan por in entre comillas 

```js
let str1 = 'comillas simples'
let str2 = "comillas dobles"
let str3 = `comillas inclinadas`
```
- [number]() los valores numericos no requieren ni commillas ni otro caracter especial, los decimales se denombran con punto `.` y para separar miles se puede usar `_`
```js
let num1 = 100.24
let num2 = 10_000_000
```
- [boolean]() los valores booleanos representan verdadero o falso
```js
let verdadero = true
let falso = false
```
- [undefined]()
- [null]()
- []()


### como saber el typo de una variable?
para obtener el typo de una variable podemmos usar la palabra `typeof` seguido del nombre de la variable,
```js
let variable = 'esto es un string'
console.log(typeof variable) // imprime string

variable = 19
console.log(typeof variable) // imprime number

// [ ] hacer el resto

``` 

# Constantes
Las constantes, funcionan exactamente igual a las variables, con la unica diferencia que el valor solo se puede asignar una sola ves cuando se crea, si se intenta cambiar su valor despues tirara un error.
```js
const numero1 = 10
const numero2 = 23

const suma = function(num1, num2) { 
    return num1 + num2
}

const resultado = suma(numero1, numero2)
const typoDato = typeof resultado // retorna 'number'

```