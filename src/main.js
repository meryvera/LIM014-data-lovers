import data from './data/lol/lol.js';
import { filterChampion,filterRoles,filterLevels,sortChampionsDes} from './data.js';

// VARIABLES GLOBALES - CONVERSION DE LA DATA JSON DE OBJETOS A ARRAYS
const cardcontainer = document.querySelector('.cardContainer');
const AllChampions = Object.entries(data.data);

// FUNCION PARA CARGAR TODOS LOS CAMPEONES
const cargarpagina = document.querySelector('body');
cargarpagina.addEventListener('load', cardChampions(AllChampions))

// FUNCIÓN DE LITERAL STRINGS PARA JALAR LOS 134 CAMPEONES
function cardChampions(data) {
  data.map (element => {
    cardcontainer.innerHTML+=
    `<section class="card-container">
        <div class="cardChampions">
          <article class="card front">
            <img class="img-fluid" alt= "${element[1].name}" src="${element[1].splash}" id="img">
            <h4 class="card-title">${element[1].name}
            <a class="circulo" href="#"><img class="seemore-icon" src="img/flecha.png"></a></h4>
          </article>
          <article class="card back">
            <h2 id="fontCard">${element[1].id}</h2>
            <p class="fonth2" id="fontCard">${element[1].blurb}</p><hr>
            <p><strong>Habilidades:<strong></p>
            <ul class="lista" id="fontCard">
              <li><a id="fontCard">Ataque: ${element[1].info.attack}<a/></li>
              <li><a id="fontCard">Defensa: ${element[1].info.defense}<a/></li>
              <li><a id="fontCard">Magia: ${element[1].info.magic}<a/></li>
              <li><a id="fontCard">Dificultad: ${element[1].info.difficulty}<a/></li>
            </ul><hr>
            <p>Roles:</p>
            <ul class="lista2">
              <li><a id="fontCard">${element[1].tags[0]}<a><li>
              <li><a id="fontCard">${element[1].tags[1]}<a><li>
            </ul>
          </article>
      </div>
    </section>`
  });
}

//I. FUNCION PARA BUSQUEDA DE CAMPEONES
//Parte 1 - Método para enlistar campeones en Datalist
let datalist = document.getElementById("championsLol");
let AllKeyChampions = Object.keys(data.data); 

//Parte 2 - Funcion para enlistar opciones de campeones
function createdOptionsDataList(){
  for (let i = 0; i < AllKeyChampions.length; i++) {
    let option = document.createElement("option");
    let txt = document.createTextNode(AllKeyChampions[i]);
    option.appendChild(txt);
    datalist.insertBefore(option,datalist.lastChild);
  }
}
//Parte 3 - Función para cuando se da click en el input se despliegue el datalist
let inputSearch = document.getElementById('search');
inputSearch.addEventListener('click', createdOptionsDataList());

//Parte 4 - Función para seleccionar campeón
inputSearch.addEventListener("change" , function() {
  const selectSearch = inputSearch.value;

  //4.1 - Filtrado y Sort de los AllChampions 
  let filteredChampionLol = filterChampion(AllChampions, selectSearch);
  const AllChampionsSort = sortChampionsDes(AllChampions);

  cardcontainer.innerHTML = '';
  cardChampions(filteredChampionLol);
  if (selectSearch === "Orden Descendente"){
    cardcontainer.innerHTML = ''; 
    cardChampions(AllChampionsSort); 
  }else if(selectSearch === "Todos los Campeones"){ 
   cardcontainer.innerHTML = '';   
   cardChampions(AllChampions); 
  } 
}); 
  
//II. FUNCIÓN DE FILTRADO Y DESFILTRADO DE ROLES */
const selectRoles= document.getElementById('rolesLol');
selectRoles.addEventListener('change', function functSelecRols() { 
  let selectedOption = selectRoles.options[selectRoles.selectedIndex].value; 
  let filteredRolesLol = filterRoles(AllChampions, selectedOption); 

  cardcontainer.innerHTML = ''; 
  cardChampions(filteredRolesLol); 
  if(selectedOption == "BackAllRoles"){ 
    cardcontainer.innerHTML = ''; 
    cardChampions(AllChampions); 
  }
}); 

//III. FUNCION PARA BUSQUEDA DE NIVELES 
const selectLevels= document.getElementById('levelsLol'); 
selectLevels.addEventListener('change', function functSelecLevels() { 
  let selectedLevelOption = selectLevels.options[selectLevels.selectedIndex].value; 
  let filteredLevelsLol = filterLevels(AllChampions, selectedLevelOption); 

  if (selectedLevelOption == "Bajo"){ 
    cardcontainer.innerHTML = ''; 
    cardChampions(filteredLevelsLol); 
  } else if (selectedLevelOption == "Moderado"){ 
    cardcontainer.innerHTML = ''; 
    cardChampions(filteredLevelsLol); 
  }else if (selectedLevelOption == "Alto"){ 
    cardcontainer.innerHTML = ''; 
    cardChampions(filteredLevelsLol); 
  } else { 
    cardcontainer.innerHTML = ''; 
    cardChampions(AllChampions); 
  } 
}) 


















