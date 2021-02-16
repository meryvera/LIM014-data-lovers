// FUNCION MODULO DE FILTRADO DE CAMPEONES
export const filterChampion = (data, selected) =>{
  let filteredChampion = data.filter(champion => champion[1].id == selected);
  return filteredChampion;
}

// FUNCION MODULO DE FILTRADO DE ROLES
export const filterRoles = (data, selected) => {
  let filteredRoles = data.filter(data => data[1].tags[0] == selected || data[1].tags[1] == selected);
  return filteredRoles;
};

// FUNCION MODULO DE FILTRADO DE NIVELES
export const filterLevels = (data, selected, cardcontainer, cardChampions, AllChampions) => {
  let filteredLevelLolbajo = data.filter(data => data[1].info.difficulty <= 3);
  let filteredLevelLolmoderado = data.filter(data => data[1].info.difficulty >= 4 && data[1].info.difficulty <= 6);
  let filteredLevelLolalto = data.filter(data => data[1].info.difficulty >= 7);
  if (selected == "Bajo"){
    cardcontainer.innerHTML = '';
    cardChampions(filteredLevelLolbajo);
  } else if (selected == "Moderado"){
    cardcontainer.innerHTML = '';
    cardChampions(filteredLevelLolmoderado);
  }else if (selected == "Alto"){
    cardcontainer.innerHTML = '';
    cardChampions(filteredLevelLolalto);
  } else {
    cardcontainer.innerHTML = '';
    cardChampions(AllChampions)
  }
};

