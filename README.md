# Proyecto Data Lovers - LOL

**Tabla de Contenido:**

1. [Resumen del Proyecto](#id1)
2. [League of Legends (LOL) - Base de datos elegida](#id2)
3. [Investigación del Usuario Objetivo](#id3)
4. [Historias de Usuario](#id4)
5. [Crear prototipos para obtener feedback e iterar](#id5)
6. [Proyecto Duplas](#id6)
<div id='id1' />
<div id='id2' />
<div id='id3' />
<div id='id4' />
<div id='id5' />
<div id='id6' />

------------


##### 1. Resumen del Proyecto:
En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que descubras que tu usuario necesita.

Como entregable final tendrás una página web que permita **visualizar la data, filtrarla, ordenarla y hacer algún cálculo agregado**. Con cálculo agregado nos referimos a distintos cálculos que puedes hacer con la data para mostrar información aún más relevante para los usuarios (promedio, el valor máximo o mínimo, etc).

Esta vez te proponemos una serie de datos de diferentes _temáticas_ para que explores y decidas con qué temática te interesa trabajar.

Una vez que definas tu área de interés, busca entender quién es tu usuario
y qué necesita saber o ver exactamente; luego podrás construir la interfaz que le ayude a interactuar y entender mejor esos datos.

------------
##### 2. League of Legends (LOL) - Base de datos elegida:
Decidimos trabajar está temática de juego porque nos pareció super interesante la información que encontramos en la investigación.
* [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este set de datos muestra la lista de campeones en una liga del
  juego League of Legends (LoL).
  - [Investigación con jugadores de LoL](src/data/lol/README.md)

------------
##### 3. Investigación del Usuario Objetivo
![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/po1.png)
![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/PO2.png)
![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/PO3.png)
![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/po6.png)
![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/po7.png)
![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/po9.png)

------------
##### 4. Historias de Usuario
Para la creación de Historias de Usuario y determinar a nuestros usuarios potenciales realizamos encuestas online vía zoom con conocidos, familiares y amigos entre principiantes y conocedores del juego.

Realizamos una pregunta abierta para dividir a nuestro público objetivo:
  + ¿Conoces League of Legends, cuánto sabes del juego?**

Dependiendo la respuesta hicimos 3 preguntas más para cada tipo de usuario:

**Principiantes:**
  + ¿Qué sabes de League of Legends?
  + ¿Te gustaría jugarlo?
  + ¿Con que información te gustaría contar para empezar a jugarlo?

**Conocedores:**
  + ¿Juegas actualmente, o cuándo fue la última vez que lo jugaste?
  + ¿Que información te parece relevante conocer para avanzar en el juego?
  + ¿Qué información específica te gustaría conocer para mejorar en el juego?

Como resultado creamos las siguientes HU:

###### Historia de usuario 1
  + COMO: Jugador LOL
  + QUIERO: Poder visualizar a los campeones
  + PARA: Saber quiénes son

###### Criterios mínimos de aceptación
  - El usuario al entrar a la página de inicio podrá visualizar los cards de los 140 campeones con sus nombres.
  - Por defecto el el botón "campeones" del navegador principal está marcado y activo.

  ![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/HU1.jpeg)

  ###### Test de Usabilidad y Cierre Historia 1
  **Creación de Interfaz:**

  * Header: Logo y botones de navegación

  * Main: Banner / Barra de filtro para campeones (roles , nivel de dificultad)

  * Card: Carga de data Json para mostrar en pantalla, manipulación de arrays y objetos.

  **Testeo:**
  * Mejorar el logo de la página porque el nombre se pierde por el tamaño.

  * El botón "+" debe respetar el patrón de jerarquía de color (no usar negro) y darle padding al lado derecho.


###### Historia de usuario 2
  + COMO: Jugardor LOL
  + QUIERO: Elegir a un campeón
  + PARA: Conocer más a detalle al campeón

###### Criterios mínimos de aceptación
  - El usuario podrá filtrar en la galería los cards de los campeones:
  - Digitando el nombre de cada campeón en el input buscador
  - Mediante una lista desplegable (datalist)
  - Esta lista filtrada se mostrará en orden alfabético.
  - La lista además tendrá una opción para desfiltrar lo que previamente había seleccionado el usuario.

  ###### Cierre Historia 2
**Creación de Barra de filtro de Campeones:**

* Main: Barra de filtro para campeones.
* Creación de datalist e input.
* Realizamos la función de filter para obtener los id de los campeones.
* La lista además tendrá una opción para desfiltrar lo que previamente había seleccionado el
usuario.
* Testeo unitario conforme.

###### Historia de usuario 3
  + COMO: Jugardor LOL
  + QUIERO: Visualizar el nombre de los campeones en orden descendente
  + PARA: Conocer más a detalle al campeón

###### Criterios mínimos de aceptación
  - El usuario podrá filtrar en la galería los cards de los campeones:
  - Digitando el nombre de cada campeón en el input buscador
  - Mediante una lista desplegable (datalist)
  - Esta lista filtrada se mostrará en orden descendente.
  - La lista además tendrá una opción para desfiltrar lo que previamente había seleccionado el
usuario.

  ###### Cierre Historia 3
**Creación de opción con orden descendente para el filtro de Campeones:**

* Main: Barra de filtro para campeones.
* Creación de opción descendente en datalist.
* Realizamos la función de filter para obtener los id de los campeones.
* La lista además tendrá una opción para desfiltrar lo que previamente había seleccionado el
usuario.
* Testeo unitario conforme.

![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/HU2.2.png)

###### Historia de usuario 4
  + COMO: Jugador LOL
  + QUIERO: Conocer los roles de los compeones
  + PARA: Identificar las habilidades que tiene cada uno

###### Criterios mínimos de aceptación
  - El usuario podrá hacer click en un botón desplegable.
  - Esta lista desplegada mostrará los 6 distintos roles que cumplen los campeones.
  - La lista además tendrá una opción para desfiltrar lo que previamente había seleccionado el usuario.
  - La lista se mostrará en orden alfabético.

    ###### Cierre Historia 4
**Creación de Barra de filtro Roles de Campeones:**

* Main: Barra de filtro por roles para campeones.
* Creación de select con los roles de los campeones(ataque, tirador, asesino, magos, tanques y soporte).
* Realizamos la función de filter para obtener los tags de roles de los campeones.
* La lista además tendrá una opción para desfiltrar lo que previamente había seleccionado el
usuario.
* La lista se mostrará en orden alfabético.
* Testeo unitario conforme.

![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/HU3.png)

###### Historia de usuario 5
  + COMO: Jugador LOL
  + QUIERO: Conocer los niveles de dificultad
  + PARA: Saber cuáles campones son los ofensivos y defensivos.

###### Criterios mínimos de aceptación
  - El usuario podrá hacer click en un botón desplegable.
  - Esta lista desplegada mostrará los 3 distintos niveles de dificultad que cumplen los campeones.
  - La lista además tendrá una opción para desfiltrar lo que previamente había seleccionado el usuario.
  - La lista se mostrará en orden de jerarquía (de alta a baja)

    ###### Cierre Historia 5
**Creación de Barra de filtro Roles de Campeones:**

* Main: Barra de filtro por niveles para campeones.
* Creación de select con los niveles de los campeones(bajo, moderado y alto).
* Los niveles fueron separados por intervalos de dificultad (bajo (1-3), moderado(4-6) y alto (7-10)).
* Realizamos la función de filter para obtener los info.difficulty de los campeones.
* La lista además tendrá una opción para desfiltrar lo que previamente había seleccionado el
usuario.
* La lista se mostrará en orden alfabético.
* Testeo unitario conforme.

![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/HU4.png)


###### Historia de usuario 6
  + COMO: Jugador LOL
  + QUIERO: Elegir a un campeón
  + PARA: Conocer más a detalle al campeón

###### Criterios mínimos de aceptación
  - El usuario después de filtrar a 1 campeón digitando su nombre o mediante la selección del scroll, la pantalla mostrará sólo al campeón elegido.
  - El usuario podrá visualizar un botón "más" dentro del card para que de click y el card se volteará.
  - El usuario después de dar click el card se volteará para mostrar detalle de la información.

      ###### Cierre Historia 6
**Flip de cards en pantalla:**
* Main: Barra de filtro para campeones.
* Mostramos en pantalla los cards con efecto flip para mostrar tanto la imagen, nombre, blurb, roles y habilidades de cada campeón.
* Realizamos la función de filter para obtener los id de los campeones.
* La lista además tendrá una opción para desfiltrar lo que previamente había seleccionado el
usuario.
* Testeo unitario conforme.

![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/HU2.1.png)

###### Historia de usuario 7
  + COMO: Jugador LOL
  + QUIERO: Adquirir hacks del juego
  + PARA: Tener un buen performance de juego

###### Criterios mínimos de aceptación
  - El usuario podrá encontrar en el header un botón "hacks".
  - El usuario al darle click, el botón se activará mediante un borde dorado.
  - El botón mostrará una lista desplegable con 2 opciones (principiantes y conocedores)

      ###### Cierre Historia 7
**Creación de botones de hacks para el juego(principiantes y conocedores):**
* Header: Barra de navegación.
* Creación de botones hacks por niveles de jugadores (principantes y jugadores(estadíticas)).

![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/HU1.jpeg)

###### Historia de usuario 8
  + COMO: Jugador LOL principiante
  + QUIERO: Conocer más del juego
  + PARA: Empezar a jugar

###### Criterios mínimos de aceptación
  - El usuario al dar click a la opción de principiante lo llevará a otra vista.
  - Dicha vista tendrá toda la información introductoria para saber de qué trata el juego (videos, foros y links).
  - El usuario podrá ver siempre la barra del header para poder navegar fácilmente en todo el site.- El usuario al dar click a la opción de principiante lo llevará a otra vista.
  - Dicha vista tendrá toda la información introductoria para saber de qué trata el juego (videos, foros y links).
  - El usuario podrá ver siempre la barra del header para poder navegar fácilmente en todo el site.

      ###### Cierre Historia 8
**Link a la página oficial de LOL para principiantes:**
* Header: Barra de navegación.
* Link con la ruta a la página oficial para principiantes.

![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/principiantes.png)

###### Historia de usuario 9
  + COMO: Jugador LOL intermedio
  + QUIERO: Mejorar mi técnica de juego
  + PARA: Calcular su daño de ataque

###### Criterios mínimos de aceptación
  - El usuario al dar click a la opción de conocedores lo llevará a otra vista.
  - Dicha vista tendrá una calculadora en tiempo real para promediar el daño de ataque de los jugadores.
  - El usuario podrá ver siempre la barra del header para poder navegar fácilmente en todo el site.

      ###### Cierre Historia 9
**En el botón de conocedores crearemos una calculadora en tiempo real:**
* Header: Barra de navegación.
* Botón con la opción de Conocedores.
* El usuario encontrará 3 input:
* Input 1: Ingresará los valores del Ataque ó habilidad de su campeón.
* Input 2: Ingresará los valores de Armadura ó Resistencia Mágica.
* Encontrará un botón de calcular al cual deberá hacerle click.
* Input 3: Arrojará el resultado promedio del cálculo.

![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/calculo%20da%C3%B1o%20de%20ataque.png)

###### Historia de usuario 10
  + COMO: Jugador LOL intermedio
  + QUIERO: Mejorar mi técnica de juego
  + PARA: Visualizar estadísticas de los promedio básicos de ataque de los campeones.

###### Criterios mínimos de aceptación
  - El usuario al dar click a la opción de conocedores lo llevará a otra vista.
  - Dicha vista mostrará una estadística en donde se encontrarán los promedios del daño de ataque básico de los campeones.
  - El usuario podrá ver siempre la barra del header para poder navegar fácilmente en todo el site.

  ###### Cierre Historia 10
**En el botón de conocedores crearemos una calculadora ent tiempo real:**
* Header: Barra de navegación.
* Botón con la opción de Conocedores.
* El usuario visualizará 3 línea de información:
* Línea 1: Mostrará el Ataque básico de cada campeón en orden alfabético.
* Línea 2: Mostrará la Armadura básica de cada campeón en orden alfabético.
* Línea 3: Mostrará el promedio básico del daño de ataque en relación a estos 2 valores de cada campeón en orden alfabético.

![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/estadistica.jpeg)

###### Historia de usuario 11
  + COMO: Jugador LOL
  + QUIERO: Un link que me lleve a la plataforma oficial del Juego
  + PARA: Empezar a jugar!

###### Criterios mínimos de aceptación
  - El usuario podrá ver un botón que lo invite a jugar.
  - El usuario al dar click al botón "Jugar" , éste se activará y mostrará un borde dorado.
  - El usuario podrá aterrizar a la plataforma de juego oficial para empezar sus partidas.

   ###### Cierre Historia 11
**Creación de botón jugar que redirija a lap página oficial de LOL**
* Header: Barra de navegación.
* Creación de botón jugar que redirija a lap página oficial de LOL.

![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/HU1.jpeg)

------------
##### 5. Crear prototipos para obtener feedback e iterar.
###### &hearts;Prototipos de baja fidelidad:
Luego de información recabada realizamos nuestros prototipos en papel, los cuales no tienen el aspecto real de la interfaz que testeamos pero cuentan con la información que permite la interacción entre la interfaz y el usuario.

[Prototipo 1](http://https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/prototipo1.png "Prototipo 1") / [Prototipo 2](http://https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/Prototipo2.jpg "Prototipo 2") / [Prototipo 3](http:/https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/Prototipo%202.1.jpg/ "Prototipo 3") / [Prototipo 4](http://https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/Prototipo%202.2.jpg "Prototipo 4")

###### &hearts;Prototipos de alta fidelidad:
Para el prototipado de alta fidelidad utilizamos figma el cual utilizamos para el test, el cual refleja la interfaz real en la mayor medida posible.
En este diseño aplicamos los principios de **diseño visual:**
Resaltamos el **tamaño** en los card para captar la atención del usuario a primera vista, pues, es el foco central de nuestro producto y la información necesaria para los jugadores.
El diseño se basó en los **colores** utilizados en la plataforma oficial de LOL, esto con el fin de darle el look and feel del videojuego real, resaltando las tonalidades grises y negras asociadas al conocimiento, fuerza y poder, **contrastándolo** con dorados basicamente en los botones quenavegación, que representa alegría. Tratamos de darle **proximidad** al diseño con el fin de agrupar los cards y ordenar las distribuciones de contenido, buscando generar una **alineación** adecuada y evitar que esta **repetición** de contenido genere mucho peso al diseño.

[Jeraquía Visual](http://https://blog.aulaformativa.com/fundamentos-del-diseno-como-crear-jerarquia-visual/ "Jeraquía Visual") / [Significado de los colores en Marketing](http://https://blog.aulaformativa.com/fundamentos-del-diseno-como-crear-jerarquia-visual/ "Significado de los colores en Marketing")

![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/figma%20primero.png)

**&raquo;Modelo 1-Final / Cambios:**

Luego de los feedback respectivos anotamos los cambios a realizar en cuanto al diseño.

![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/cambios.png)

[Ver Figma 1](https://www.figma.com/proto/LGfFj76Uzyb6LRqmhSncEK/Untitled?node-id=0%3A3&scaling=scale-down "Figma 1")



**&raquo;Modelo 2-Final / Cambios:**

Luego de los cambios indicados en el feedback, así quedó nuestro diseño:

![](https://github.com/kelmita22/LIM014-data-lovers/blob/main/src/img/Figma%20final.png)

[Ver Figma 2](https://www.figma.com/proto/egNsFr51yxKeatjB5HQki0/Untitled?node-id=0%3A3&scaling=scale-down "Figma 2")

------------

**6.Proyecto Duplas:**
- [Mery Vera](https://github.com/meryvera "Mery Vera")
- [Kelly Márquez](https://github.com/kelmita22 "Kelly Márquez")
