//import { example } from './data.js';
import data from './data/lol/lol.js';
import { filterRols } from './data.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//HABILITANDO EL DROPDOWN DE BOTON ROLES Y NIVELES
const roles = document.querySelector('.roles');
const rolesIcon = document.querySelector('#rolesIcon');
rolesIcon.onclick = function (){
  roles.classList.toggle('is-active')
}
const levels = document.querySelector('.levels');
const levelsIcon = document.querySelector('#levelsIcon');
levelsIcon.onclick = function (){
  levels.classList.toggle('is-active')
}


//querySelector del section en html para cargar los card
const cardcontainer = document.querySelector('.cardContainer');
//Con Object.entries devuelvo el array a usar con su par key-value
const champions = Object.entries(data.data);
console.log(champions);
//usamos map para recorrer el array y a la vez almacenarlos valores de la función para reusar de ser el caso.
champions.map (element => {
//imprimimos elementos contenedores de las card en pantalla.
cardcontainer.innerHTML+=
 `<section class="card-container">
    <div class="cardChampions">
      <article class="card front">
        <img class="img-fluid" alt= "${element[1].name}" src="${element[1].splash}" id="img">
        <h4 class="card-title">${element[1].name}
        <a style="float: right;" href="#"><img class="seemore-icon" src="img/flecha.png"></a></h4>
      </article>
      <article class="card back">
        <h2 id="fontCard">${element[1].id}</h2>
        <p id="fontCard">${element[1].blurb}</p>
        <ul id="fontCard">Habilidades:
          <li><a id="fontCard">Ataque: ${element[1].info.attack}<a/></li>
          <li><a id="fontCard">Defensa: ${element[1].info.defense}<a/></li>
          <li><a id="fontCard">Magia: ${element[1].info.magic}<a/></li>
          <li><a id="fontCard">Dificultad: ${element[1].info.difficulty}<a/></li>
        </ul>
        </article>
   </div>
 </section>`

  //  console.log(cardcontainer);
})


console.log(example, data);





