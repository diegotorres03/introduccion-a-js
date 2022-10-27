# Objetos
Los objetos son una agrupacion de variables y funciones
las variables les llamamos `propiedades` y a las funciones les llamamos `metodos`.

En JavaScript podemos crear objetos "literales" o usar constructores

### Objeto literal
este se crea y se asigna directamente a una variavble o se usa de retorno en una funcion o como parametro de una funcion, cuando hacemos estos objetos literales la idea es que estamos creando un solo objeto, si necesitamos multiples objetos es mejor usar constructores
```js
const objetoLiteral = {
    propiedad: 'esto es una propiedad',
    metodo: function(parametro1, parametro2) {
        console.log(parametro1, parametro2)
    },
}

console.log(objetoLiteral.propiedad)
objetoLiteral.metodo()
```










