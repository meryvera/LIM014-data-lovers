// FUNCION MODULO DE FILTRADO DE CAMPEONES
export const filterChampion = (data, selected) =>{
  let filteredChampion = data.filter(champion => champion[1].id == selected);
  return filteredChampion;
}

// FUNCION PARA ORDEN ZA
export const sortChampionsDes = (data, selected) =>{
  switch (selected){
    case "za":
      return data.reverse()
         }
  };

// FUNCION PARA ORDEN AZ
export const sortChampionsAsc = (data, selected) =>{
  switch (selected){
    case "az":
      return data.sort()
         }
  };


// FUNCION MODULO DE FILTRADO DE ROLES
export const filterRoles = (data, selected) => {
let filteredRoles = data.filter(data => data[1].tags[0] == selected || data[1].tags[1] == selected);
return filteredRoles;
};

// FUNCION MODULO DE FILTRADO DE NIVELES
export const filterLevels = (data, selected) => {
  switch (selected){
    case "Bajo":
      return data.filter(data => data[1].info.difficulty <= 3);
    case "Moderado":
      return data.filter(data => data[1].info.difficulty >= 4 && data[1].info.difficulty <= 6);
    case "Alto":
      return data.filter(data => data[1].info.difficulty >= 7);
  }
  };

// FUNCION MODULO DE CÁLCULO DE DAÑO DE ATAQUE
export const attack = (ataque, armadura) => {
  let attackCalculate = (ataque*100) / (100 + armadura);
  return attackCalculate ;
}

// FUNCION MODULO DE CÁLCULO DE DAÑO DE ATAQUE BÁSICO ESTADÍSTICA
// export const attackStats = (ataque, armadura) => {
//   let newArraycalculate=[]
//   for(let i=0; i < ataque.length; i++){
//     let attackCalculate = (ataque[i]*100) / (100 + armadura[i]);
//     newArraycalculate.push(attackCalculate)
//   }
//   return newArraycalculate;
// }








