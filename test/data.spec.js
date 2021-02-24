import { filterChampion , filterRoles, filterLevels , sortChampionsDes, sortChampionsAsc, attack, attackStats} from '../src/data.js';

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
  }],
]

const selected = [
 [
  "Nami", {
    id: "Nami",
    info: {
      difficulty: 5,
    },
    tags: ["Support", "Mage"],
}],
]

const selectedAlto =[
  [
    "Rumble", {
      id: "Rumble",
      info: {
        difficulty: 10,
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

const championsSortDes = [
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

const championsSortAsc = [
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
  test('Shoul return champions from za order', () => {
    expect(sortChampionsDes(champions, "za")).toEqual(championsSortDes);
  });
});
//TEST PARA FILTRAR EN ORDEN ASCENDENTE
describe('Should return sortChampionsAsc as function', () => {
  it('is a function', () => {
    expect(typeof sortChampionsAsc).toBe('function');
  });
  test('Shoul return champions from az order', () => {
    expect(sortChampionsAsc(champions, "az")).toEqual(championsSortAsc);
  });
});
// TEST PARA DAÑO DE ATAQUE SEGÚN VALORES INGRESADOS
describe('Should return attack as function', () => {
  it('is a function', () => {
    expect(typeof attack).toBe('function');
  });
  test('Shoul return champions in decending order', () => {
    expect(attack(31.208, 10.72)).toEqual(28.186416184971097);
  });
});

const championsarmor = [24.04, 19.72, 25.88]

const championsattackdamage = [46, 51.208, 61.036]

const champions3 = [37.084811351177045, 42.7731373204143, 48.48744836352082]

// TEST PARA DAÑO DE ATAQUE SEGÚN DATA LOL ESTADISTICA
describe('Should return attackStats as function', () => {
  it('is a function', () => {
    expect(typeof attackStats).toBe('function');
  });
  test('Shoul return champions in decending order', () => {
    expect(attackStats(championsattackdamage, championsarmor)).toEqual(champions3);
  });
});




