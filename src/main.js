import data from './data/lol/lol.js';
import { filterRoles } from './data.js';
import { filterLevels } from './data.js';
import { filterChampion } from './data.js';

// VARIABLES GLOBALES - CONVERSION DE LA DATA JSON DE OBJETOS A ARRAYS
const cardcontainer = document.querySelector('.cardContainer');
const AllChampions = Object.entries(data.data);

// FUNCION PARA CARGAR TODOS LOS CAMPEONES
const cargarpagina = document.querySelector('body');
cargarpagina.addEventListener('load', cardChampions(AllChampions))
//console.log(champions);

// FUNCIÓN DE LITERAL STRINGS PARA JALAR LOS 134 CAMPEONES
function cardChampions(data) {
  data.map (element => {
    cardcontainer.innerHTML+=
    `<section class="card-container">
        <div class="cardChampions">
          <article class="card front">
            <img class="img-fluid" alt= "${element[1].name}" src="${element[1].splash}" id="img">
            <div class="cardChampions-container-name">
              <h4 class="card-title">${element[1].name}</h4>
              <img class="seemore-icon" src="img/flecha.png">
            </div>
          </article>
          <article class="card back">
            <h2 id="fontCard">${element[1].id}</h2>
            <p id="fontCard">${element[1].blurb}</p>
            <div class="back-characters">
              <div>
                <strong><p>Habilidades:</p></strong>
                <ul id="fontCard">
                  <li><a id="fontCard">Ataque: ${element[1].info.attack}<a/></li>
                  <li><a id="fontCard">Defensa: ${element[1].info.defense}<a/></li>
                  <li><a id="fontCard">Magia: ${element[1].info.magic}<a/></li>
                  <li><a id="fontCard">Dificultad: ${element[1].info.difficulty}<a/></li>
                </ul>
              </div>
              <div>
                <strong><p>Roles:</p></strong>
                <ul>
                  <li><a id="fontCard">${element[1].tags[0]}<a><li>
                  <li><a id="fontCard">${element[1].tags[1]}<a><li>
                </ul>
              </div>
            </div>
          </article>
      </div>
    </section>`
  });
}

// FUNCION PARA BUSQUEDA DE CAMPEONES
//Parte 1 - Método para enlistar campeones en Datalist
let datalist = document.getElementById("championsLol");
let AllKeyChampions = Object.keys(data.data);

//Parte 2 - Funcion para enlistar opciones de campeones
function createdOptionsDataList(){
  for (let i = 0; i < AllKeyChampions.length; i++) {
    let option = document.createElement("option");
    let txt = document.createTextNode(AllKeyChampions[i]);
    //console.log(txt);
    option.appendChild(txt);
    datalist.insertBefore(option,datalist.lastChild);
  }
}
//Parte 3 - Función para cuando se da click en el input se despliegue el datalist
let inputSearch = document.getElementById('search');
inputSearch.addEventListener('click', createdOptionsDataList());//al dar click en el input se despliega el datalist

//Parte 4 - Función para seleccionar campeón
inputSearch.addEventListener("change" , function() {
  const selectSearch = inputSearch.value;
  console.log(selectSearch);

  //4.a Filtrado de los AllChampions iguales a la opcion seleccionada
  let filteredChampionLol = filterChampion(AllChampions, selectSearch);
  console.log(filteredChampionLol) // meda todos los filtrados que coincidan con los roles
  cardcontainer.innerHTML = '';
  cardChampions(filteredChampionLol);

  // let inputSelectedOptionsChampions = AllChampions.filter(champion => champion[1].id == selectSearch);
  // cardcontainer.innerHTML ="";
  // cardChampions(inputSelectedOptionsChampions);

  const BackAllChampions = document.getElementById('optionAllChampions').value;
  console.log(BackAllChampions); //me da el value del input


  if(filterChampion (AllChampions, selectSearch) == '' || filterChampion (AllChampions, selectSearch) == BackAllChampions){
    cardcontainer.innerHTML = '';
    cardChampions(AllChampions);
    //inputSearch.innerHTML = '';
  }
});

// FUNCION PARA ORDENAR CAMPEONES -SORT PREGUNTAR
  // const orderAsc =Object.entries(data.data);
  // /* orderAsc.sort(); */
  // orderAsc.sort((prev, next) => {
  // if(prev < next) return -1;
  // if(prev > next) return 1;
  // return 0;
  // })
  // console.log(orderAsc);

  // const orderDes = Object.entries(data.data);
  // /* orderDes.reverse(); */
  // orderDes.sort((prev, next) => {
  // if(prev < next) return 1;
  // if(prev > next) return -1;
  // return 0;
  // })
  // console.log(orderDes);


// FUNCIÓN DE FILTRADO Y DESFILTRADO DE ROLES
const selectRoles= document.getElementById('rolesLol');
selectRoles.addEventListener('change', function functSelecRols() {
  let selectedOption = selectRoles.options[selectRoles.selectedIndex].value;
  console.log(selectedOption); //me da la opcion seleccionada

  let filteredRolesLol = filterRoles(AllChampions, selectedOption);
  console.log(filteredRolesLol) // meda todos los filtrados que coincidan con los roles
  cardcontainer.innerHTML = '';
  cardChampions(filteredRolesLol);

  if(selectedOption == "BackAllRoles"){
    cardcontainer.innerHTML = '';
    cardChampions(AllChampions);
  };
});

// FUNCION PARA BUSQUEDA DE NIVELES
const selectLevels= document.getElementById('levelsLol');
selectLevels.addEventListener('change', function functSelecLevels() {
  let selectedLevelOption = selectLevels.options[selectLevels.selectedIndex].value;
  console.log(selectedLevelOption);

  filterLevels(AllChampions, selectedLevelOption, cardcontainer, cardChampions, AllChampions);

  // let filteredLevelLolbajo = AllChampions.filter(element => element[1].info.difficulty <= 3);
  // let filteredLevelLolmoderado = AllChampions.filter(element => element[1].info.difficulty >= 4 && element[1].info.difficulty <= 6);
  // let filteredLevelLolalto = AllChampions.filter(element => element[1].info.difficulty >= 7);


  // if (selectedLevelOption == "Bajo"){
  //   cardcontainer.innerHTML = '';
  //   cardChampions(filteredLevelLolbajo);
  // } else if (selectedLevelOption == "Moderado"){
  //   cardcontainer.innerHTML = '';
  //   cardChampions(filteredLevelLolmoderado);
  // }else if (selectedLevelOption == "Alto"){
  //   cardcontainer.innerHTML = '';
  //   cardChampions(filteredLevelLolalto);
  // } else {
  //   cardcontainer.innerHTML = '';
  //   cardChampions(AllChampions);
  // }
})










