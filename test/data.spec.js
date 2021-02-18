import { filterChampion , filterRoles, filterLevels , sortChampionsDes} from '../src/data.js';

const champions = [
  [
    "MissFortune", {
    id: "MissFortune",
    info: {
      difficulty: 1
    },
    tags: ["Marksman"],
  }],
 [
  "Nami", {
    id: "Nami",
    info: {
      difficulty: 5
    },
    tags: ["Support", "Mage"],         
}],
[
"Rumble", {
  id: "Rumble",
  info: {
    difficulty: 10
  },
  tags: ["Fighter", "Mage"],
}]
]

const selected = [ 
 [
  "Nami", {
    id: "Nami",
    info: {
      difficulty: 5
    },
    tags: ["Support", "Mage"],      
}],
]

const selectedAlto =[
  [
    "Rumble", {
      id: "Rumble",
      info: {
        difficulty: 10
      },
      tags: ["Fighter", "Mage"],
    }]
]

const selectedBajo = [
  [ 
    "MissFortune", {
    id: "MissFortune",
    info: {
      difficulty: 1
    },
    tags: ["Marksman"],
  }], 
]

const championsSort = [
  [
    "Rumble", {
      id: "Rumble",
      info: {
        difficulty: 10
      },
      tags: ["Fighter", "Mage"]
    }],
    [
      "Nami", {
        id: "Nami",
        info: {
          difficulty: 5
        },
        tags: ["Support", "Mage"], 
    }],
    [
      "MissFortune", {
      id: "MissFortune",
      info: {
        difficulty: 1
      },
      tags: ["Marksman"],
    }],
]
//TEST PARA FILTRAR CAMPEONES
describe('Should return filterChampion as function', () => {
  it('is a function', () => {
    expect(typeof filterChampion).toBe('function');
  });
  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => filterChampion()).toThrow(TypeError);
    expect(() => filterChampion(0)).toThrow(TypeError);
    expect(() => filterChampion(null, [])).toThrow(TypeError);
    expect(() => filterChampion(0, 0)).toThrow(TypeError);
  });
  test('Should return a champion filtering for id', () => {
    expect(filterChampion(champions, "Nami")).toEqual(selected);
  });
})
//TEST PARA FILTRAR POR ROLES
describe('Should return filterRoles as function', () => {
  it('is a function', () => {
    expect(typeof filterRoles).toBe('function');
  });
  test('Should return each champion filtering for Support option', () => {
    expect(filterRoles(champions, "Support" )).toEqual(selected);
  });
})
//TEST PARA FILTRAR POR NIVELES
describe('Should return filterLevels as function', () => { 
it('is a function', () => { 
expect(typeof filterLevels).toBe('function'); 
}); 
test('Should return champions with low difficulty', () => { 
expect(filterLevels(champions, "Bajo" )).toEqual(selectedBajo); 
 }); 
test('Should return champions with moderate difficulty', () => { 
expect(filterLevels(champions, "Moderado" )).toEqual(selected); 
  }); 
test('Should return champions with high difficulty ', () => { 
expect(filterLevels(champions, "Alto" )).toEqual(selectedAlto); 
  }); 
  });
//TEST PARA FILTRAR EN ORDEN DESCENDENTE
describe('Should return sortChampionsDes as function', () => {
it('is a function', () => {
expect(typeof sortChampionsDes).toBe('function');
});
test('Shoul return champions in decending order', () => {
expect(sortChampionsDes(champions, "descendente")).toEqual(championsSort);
  });
});