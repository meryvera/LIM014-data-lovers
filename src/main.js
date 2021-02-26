import data from './data/lol/lol.js';
import { filterChampion,filterRoles,filterLevels,sortChampionsDes, sortChampionsAsc,attack, /* attackStats */} from './data.js';

// VARIABLES GLOBALES - CONVERSION DE LA DATA JSON DE OBJETOS A ARRAYS
const cardcontainer = document.querySelector('.cardContainer');
const wrapper = document.querySelector('.wrapper');
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
    const AllChampionsDes = sortChampionsDes(AllChampions , selectSearch);
    const AllChampionsAsc = sortChampionsAsc (AllChampions , selectSearch);

    cardcontainer.innerHTML = '';
    cardChampions(filteredChampionLol);
    if (selectSearch === "za"){
      cardcontainer.innerHTML = '';
      cardChampions(AllChampionsDes);
    }else if(selectSearch === "az"){
    cardcontainer.innerHTML = '';
    cardChampions(AllChampionsAsc);
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

//V. FUNCION PARA BOTON HACKS - CONOCEDORES
const a_semiExperts = document.getElementById('a_semiExperts');
a_semiExperts.addEventListener('click', functSemiExperts)

function functSemiExperts () {//creo qe event prevent default va a aca cuando arriba la funcion no tiene ()
  wrapper.innerHTML = `
    <div class="containerData">
      <h2 class="h2-conocedores">Cálculo de daño de ataque</h2>
      <section class="datos">
        <img src="img/input.png" class="champion">
        <form name="formulario" class="containerForm">
          <label class="labels">Ingresa el daño de ataque o poder de habilidad</label>
          <input class="input" type="number" name="ataque" id="ataqueHabilidad" placeholder="Ataque o Habilidad"><br>
          <label class="labels">Ingresa armadura o Resistencia mágica</label>
          <input class="input" type="number" name="armadura" id="armaduraResistencia" placeholder="Armadura o resistencia mágica"><br>
          <button class="submit" id="boton-calcular">Calcular</button>
          <input class="input" id="resultado" placeholder="Resultado">
        </form>
      </section>
      <section>
        <canvas class="canvas" id="myChart" width="900" height="700"></canvas>
      </section>
    </div>

  `
  //HACK CONOCEDORES - FUNCION PARA HACER CÁLCULO DE CALCULO BÁSICO DE 1 ATAQUE
  const botonCalcular = document.getElementById('boton-calcular');
  botonCalcular.addEventListener('click', function(event) {
    event.preventDefault();
    const ataque = parseFloat(document.getElementById('ataqueHabilidad').value);
    /* console.log(ataque); */
    const armadura = parseFloat(document.getElementById('armaduraResistencia').value);
   /*  console.log(armadura); */
    const resultado = document.getElementById('resultado');
   /*  console.log(resultado); */

    let calcular = attack(ataque, armadura)
      /* console.log(typeof attack); */

      resultado.value = calcular;
  })

  // HACK CONOCEDORES -CÁLCULO DE CALCULO BÁSICO DE 1 ATAQUE
  //  const valoresArmor= AllChampions.map(item => item[1].stats.armor)
  //  /* console.log(valoresArmor)  */
  //  const valoresAtaque = AllChampions.map(item2 =>item2[1].stats.attackdamage)
  //  let calculateDamage = attackStats(valoresAtaque, valoresArmor);
  //   console.log(calculateDamage)

/*    const ctx = document.querySelector('#myChart').getContext('2d');
   new Chart(ctx,{

       type :'line',
       data : {
         labels: AllKeyChampions,
         datasets:[
           {
             label: 'Promedio',
             borderColor:'yellow',
             data : calculateDamage,
           },
           {
           label: 'Armor',
           borderColor:'rgb(194, 144, 45)',
           data : valoresArmor,
         },
         {
          label: 'attackdamage',
           borderColor:'red',
           data : valoresAtaque,
         }
       ]
       },
         options:{
           scales:{
             xAxes:[{
               gridLines:{
                 display:false,
               }
             }]
           },
           title:{
             display: true,
             text: 'Cálculo Básico de un ataque',
             fontSize: 30,
             padding: 30,
             fontColor: 'rgb(194, 144, 45)',
             fontFamily:'Rozha One',
           },
           legend:{
             position:'bottom',
             labels:{
               padding:20,
               boxWidth:15,
               fontFamily:'system-ui',
               fontColor: 'white',
               fontSize: 15,
             }
           },
           layout:{
             padding:{
               right:50,
               top:150,
               bottom:50,
               left:50,
             }
           },
           tooltips:{
             mode:'x',
           },
           elements:{
             line: {
               borderWidth:2,
               fill:false,
             },
             point:{
               radius:4,
               borderWidth:4,
               backgroundColor:'white',
               hoverRadius: 8,
               hoverBorderWidth: 4,
             }
           }
         }
     })
   Chart(); */
}

//FUNCIÓN DE MENÚ HAMBURGUESA
    document.querySelectorAll(".more")[0].addEventListener("click",menu);

    function menu(event){
      event.preventDefault();
      const allElements = document.querySelector('.menu');
      console.log(allElements);
      allElements.classList.toggle('is-active');

    }
