/* -------------------------------------------------------------------------- */
/*                              CLASE 11 - DOM                                 */
/* -------------------------------------------------------------------------- */

/*
En esta actividad vamos a trabajar únicamente con la SELECCIÓN de elementos
del DOM.

No debemos modificar textos, estilos ni comportamientos del sitio.

El objetivo es identificar correctamente los elementos del HTML, elegir
selectores adecuados y comprobar los resultados desde la consola.
*/

/* -------------------------------------------------------------------------- */
/*                        1. SELECCIÓN DE ELEMENTOS                            */
/* -------------------------------------------------------------------------- */

/*
Escribí un selector para cada uno de los siguientes elementos del sitio.

Guardá cada resultado en una constante con un nombre descriptivo.

Luego mostrá cada resultado utilizando console.log().
*/

// 1. Seleccionar el título principal del sitio.

const tituloPrincipal = document.querySelector("h1");

// console.log(tituloPrincipal);
console.log(tituloPrincipal);

// 2. Seleccionar la lista de navegación.

const listaNavegacion = document.querySelector("nav ul");

// console.log(listaNavegacion);
console.log(listaNavegacion);

// 3. Seleccionar el botón "Cambiar tema".

const botonTema = document.querySelector(".tema button");

// console.log(botonTema);
console.log(botonTema);

// 4. Seleccionar el elemento que muestra el clima.

const clima = document.querySelector(".clima");

// console.log(clima);
console.log(clima);

// 5. Seleccionar el elemento que muestra la información del dólar.

const dolar = document.querySelector(".dolar");

// console.log(dolar);
console.log(dolar);

// 6. Seleccionar el contenedor donde se encuentran las noticias.

const contenedorNoticias = document.querySelector(".noticias");

// console.log(contenedorNoticias);
console.log(contenedorNoticias);

// 7. Seleccionar TODOS los artículos del sitio.

const articulos = document.querySelectorAll("article");

// console.log(articulos);
console.log(articulos);

// 8. Seleccionar el título de la primera noticia.

const tituloPrimeraNoticia = document.querySelector("article h2");

// console.log(tituloPrimeraNoticia);
console.log(tituloPrimeraNoticia);

// 9. Seleccionar la imagen de la segunda noticia.

const imagenSegundaNoticia = document.querySelectorAll("article img")[1];

// console.log(imagenSegundaNoticia);
console.log(imagenSegundaNoticia);

// 10. Seleccionar el texto de la tercera noticia.

const textoTerceraNoticia = document.querySelectorAll("article p")[2];

// console.log(textoTerceraNoticia);
console.log(textoTerceraNoticia);

// 11. Seleccionar el footer.

const piePagina = document.querySelector("footer");

// console.log(piePagina);
console.log(piePagina);

/* -------------------------------------------------------------------------- */
/*                      2. SELECTORES MÁS PRECISOS                            */
/* -------------------------------------------------------------------------- */

/*
Hasta ahora trabajamos con querySelector(), querySelectorAll()
y getElementById().

Ahora aparece una nueva necesidad:

¿Cómo hacemos para seleccionar específicamente el SEGUNDO o el TERCER
elemento cuando hay varios similares?

Para resolverlo vamos a investigar :nth-child().
*/

/* -------------------------------------------------------------------------- */
/*                     INVESTIGACIÓN CON IA: :nth-child()                     */
/* -------------------------------------------------------------------------- */

/*
Utilizá una herramienta de Inteligencia Artificial y realizá la siguiente consulta:

"¿Cómo se utiliza :nth-child() en un selector CSS dentro de
document.querySelector() en JavaScript?

Explicamelo de forma simple y mostrame un ejemplo."


Luego respondé con tus palabras:

1. ¿Para qué sirve :nth-child()?

Respuesta:
// sirve para seleccionar un elemento especifico dentro de un conjunto de nodos hermanos.
hay que tener en cuenta que empieza en 1, cuenta dentro de una misma lista de nodos y 
se puede combinar con selectores.

2. ¿Qué representa el número que se escribe entre paréntesis?

Respuesta:
// representa el lugar de un elemento dentro de un contenedor.

3. Escribí un ejemplo diferente al que te dio la IA.

Ejemplo:
 <div class="info">
      <p class="clima">🌤 24.3° Santa Rosa, La Pampa</p>
      <p class="dolar">💸 Dólar hoy: $1.285/$1.305</p>
    </div>
    const obtenerDolar = document.querySelector(".info p:nth-child(2)")
    console.log(obtenerDolar);

IMPORTANTE:

No copies solamente la respuesta de la IA.

Probá el ejemplo y asegurate de poder explicar qué elemento selecciona.
*/

/*
Ahora utilizá lo investigado para resolver las siguientes consignas.

No está permitido modificar el archivo HTML ni agregar nuevas clases o IDs.
*/

// 12. Seleccionar solamente el SEGUNDO article.

const segundoArticulo = document.querySelector("article:nth-child(2)");

// console.log(segundoArticulo);
console.log(segundoArticulo);

// 13. Seleccionar solamente el TERCER article.

const tercerArticulo = document.querySelector("article:nth-child(3)");

// console.log(tercerArticulo);
console.log(tercerArticulo);

// 14. Seleccionar TODAS las imágenes de las noticias.

const imagenesNoticias = document.querySelectorAll("article img");

// console.log(imagenesNoticias);
console.log(imagenesNoticias);

// 15. Seleccionar TODOS los elementos li del menú.

const opcionesMenu = document.querySelectorAll("nav ul li");

// console.log(opcionesMenu);
console.log(opcionesMenu);

// 16. Seleccionar solamente el TERCER elemento li del menú.

const terceraOpcionMenu = document.querySelector("nav ul li:nth-child(3)");

// console.log(terceraOpcionMenu);
console.log(terceraOpcionMenu);

// 17. Seleccionar el botón "Cambiar tema".

const botonDentroTema = document.querySelector(".tema button");

// console.log(botonDentroTema);
console.log(botonDentroTema);
/* -------------------------------------------------------------------------- */
/*                    3. UN ELEMENTO, TRES SELECTORES                         */
/* -------------------------------------------------------------------------- */

/*
Elegí UNO de los elementos del sitio.

Puede ser, por ejemplo:

- el título principal
- el botón de cambio de tema
- el footer
- alguna noticia
- alguna imagen
- algún elemento del menú

Escribí TRES formas diferentes de seleccionar exactamente el mismo elemento.

Las tres deben funcionar.

Podés utilizar los selectores vistos en clase y también :nth-child()
si considerás que tiene sentido.
*/

// Elemento elegido:

// Forma 1:

const forma1 = document.querySelector("header nav ul li:nth-child(2)");

// Forma 2:

const forma2 = document.querySelector("nav ul li:nth-child(2)");

// Forma 3:

const forma3 = document.querySelectorAll("nav ul li")[1];

// console.log(forma1);
console.log(forma1);
// console.log(forma2);
console.log(forma2);
// console.log(forma3);
console.log(forma3);

/*
Ahora respondé:

1. ¿Las tres formas seleccionan exactamente el mismo elemento?

Respuesta: si, la seleccion apunta a "economicas" del listado de noticias.


2. ¿Cuál de las tres elegirías para utilizar en este proyecto?

Respuesta: la primera.


3. ¿Por qué considerás que esa opción es mejor que las otras?

Respuesta: porque es mas exacta que las otras y en caso de que el proyecto se expanda va a dirigirse siempre al elemento deseado.


IMPORTANTE:

No siempre el selector más largo o más específico es el mejor.

Si un selector simple permite identificar correctamente el elemento,
puede ser una mejor opción que otro innecesariamente complejo.
*/

/* -------------------------------------------------------------------------- */
/*                          4. ACTIVIDAD CON IA                                */
/* -------------------------------------------------------------------------- */

/*
Utilizá una herramienta de Inteligencia Artificial.

Elegí UN elemento diferente al utilizado en la actividad anterior.

Pedile a la IA:

"Dame tres formas diferentes de seleccionar [ELEMENTO ELEGIDO]
del siguiente HTML utilizando JavaScript."

Copiá también el HTML del proyecto para que pueda analizarlo.


Pegá debajo las tres soluciones que te dio la IA.
*/

// Selector propuesto por la IA - opción 1:

const selectorIA1 = document.querySelector("article h2");

// Selector propuesto por la IA - opción 2:

const selectorIA2 = document.querySelector(".noticias article:nth-child(1) h2");

// Selector propuesto por la IA - opción 3:

const selectorIA3 = document.querySelectorAll("h2")[0];

// console.log(selectorIA1);
// console.log(selectorIA2);
// console.log(selectorIA3);
console.log(selectorIA1);
console.log(selectorIA2);
console.log(selectorIA3);

/*
Respondé:

1. ¿Las tres soluciones propuestas por la IA funcionan?

Respuesta: ai, funcionan las 3.


2. ¿Las tres seleccionan exactamente el mismo elemento?

Respuesta: si, las 3 apuntan al mismo elemento


3. ¿Cuál de las tres soluciones elegirías?

Respuesta: elegiria la segunda.


4. Explicá por qué elegirías esa opción y no las otras.

Respuesta: por el mismo motivo que en el caso anterior, siempre pensando en que el proyecto pueda ser escalable y porque ademas le aporta claridad al desarrollo iendo mas especifica. 


5. ¿Alguna de las propuestas utiliza algo que todavía no vimos en clase?

Respuesta: no, utiliza las mismas formas.


6. ¿Podrías escribir vos una forma diferente o más simple
de seleccionar el mismo elemento?

Respuesta: Si, por defecto queryselector trae el primer resultado que encuentra, entonces no es necesario aplicar el nth-child.
*/

// Mi propuesta:

const miSelector = document.querySelector(".noticias article h2");

// console.log(miSelector);

console.log(miSelector);

/* -------------------------------------------------------------------------- */
/*                         5. DESAFÍO PERSONAL                                 */
/* -------------------------------------------------------------------------- */

/*
Elegí TRES elementos del HTML que no hayan sido pedidos anteriormente.

Para cada uno:

- indicá qué elemento querés seleccionar;
- escribí el selector;
- guardalo en una constante;
- comprobalo utilizando console.log().
*/

// Elemento 1: el header completo

const desafio1 = document.querySelector("header");

// console.log(desafio1);
console.log(desafio1);

// Elemento 2: la informacion completa del dolar y el clima

const desafio2 = document.querySelector(".info");

// console.log(desafio2);
console.log(desafio2);

// Elemento 3: la primer imagen de las noticias

const desafio3 = document.querySelector(".noticias img");

// console.log(desafio3);
console.log(desafio3);

/* -------------------------------------------------------------------------- */
/*                           6. CIERRE                                         */
/* -------------------------------------------------------------------------- */

/*
Elegí uno de todos los selectores que escribiste durante la actividad.

Explicá:

1. Qué elemento selecciona.
2. Cómo funciona el selector.
3. Por qué elegiste esa forma y no otra.

Respuesta: const terceraOpcionMenu = document.querySelector("nav ul li:nth-child(3)");
el selector indica puntualmente que dentro del header en el nav que contiene una ul que a su vez contiene los li busque el tercero.
elegi esa forma porque me gusta que sea lo mas detallada posible para darle claridad y entendimiento
*/
