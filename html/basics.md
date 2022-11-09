# Introduccion a HTML

## Que significa HTML
HTML son las siglas para `Hyper Text Transfer Protocol`, basicamente texto con esteroides.
Es un lenguaje q se origino para estructurar y enlazar documentos sientificos, con los a~os y la la llegada de JavaScript, su uso empezo a cambiar de documentos a ser el lenguaje con el que se define la estructura de las paginas web.
En la actualidad para documentos, se usa mas `MarkDown`, que son los archivos `.md`, asi como este mismo doc que estamos leyendo.

## Base de un documento HTML
En Editores como VSCode se puede escribir `html:5` + Enter y esto nos trae una base que podemos usar para no tener q escribit todo a mano.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>El titulo que aparecera en el tab del navegador</title>
</head>
<body>
    <!-- esto es un comentario, no aparecera en el navegador -->
    <p>Dentro del body es donde normalmente voy a escribir my html</p>
</body>
</html>
```

## Etiquetas
Como hemos visto, en html vemos unas palabras entre los sumbolos `<>`.
Esto se llama una etiqueta, las usamos para darle forma y funcionalidad a nuestro documento.

Veamos unos ejemplos de etiquetas

### titulos o headers 
hay 7 tags, de `h1` a `h7`. estos van a hacer titulos siendo h1 el mas grande y h7 el mas peque~o
```html
<h1>Super Titulo</h1>
<h2>Super Titulo</h2>
<h4>Super Titulo</h4>
<h5>Super Titulo</h5>
<h6>Super Titulo</h6>
<h7>Super Titulo</h7>

```

### Salto de linea
```html
este es un salto de linea normal
<br>
este dibuja una rallita
<hr> 
```

### Para enfatizar o resaltar
```html
<b>contenido resaltado</b> contenido normal
<i>esto es italica</i>
<em>pa hacer enfasis<em>
```


### listas
```html
<ol>
    <li>item #1</li>
    <li>item #2</li>
    <li>item #3</li>
    <li>item #4</li>
</ol>

<ul>
    <li>item A</li>
    <li>item B</li>
    <li>item C</li>
    <li>item D</li>
</ul>

```

### Links entre documentos
con la etiqueta `<a>` podemos referenciar otras partes en el mismo documento o apuntar a diferentes documentos, sean en el mismo servidor o en un servidor externo
```html


```


### Etiquetas semanticas
Cuando queremos estructurar mejor nuestros documentos, podemos usar etiquetas semanticas para darle un poco mas de contexto a lo que estamos haciendo, por ejemplo:
- para un menu podemos usar la etiqueta `<nav></nav>`
- `<article>` repedenta contenido autocontenido e undependiente, puede ser usado para:
    - Forum posts
    - Blog posts
    - User comments
    - Product cards
    - Newspaper articles
- `<section>` define una seccion en un documento


## Etiquetas no semanticas
- `<div>`
- `<span>` 