/* class Player {
  constructor(name, health, level, attack, defence) {
    this.name = name;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  sortByRules([...rules]) {
    const proxyObject = { ...this };
    const arrSortByRules = [];

    rules.forEach((rule) => {
      for (const prop in proxyObject) {
        if (proxyObject.hasOwnProperty(prop) && String(prop) === rule) {
          const newProp = { key: rule, value: proxyObject[rule] };
          arrSortByRules.push(newProp);
          delete proxyObject[prop];
        }
      }
    });

    const sortByAlphibite = Object.keys(proxyObject).sort();

    sortByAlphibite.forEach((el) => {
      const nextProp = { key: el, value: proxyObject[el] };
      arrSortByRules.push(nextProp);
    });
    return arrSortByRules;
  }
}
const obj = new Player("мечник", 10, 2, 80, 40);
obj.sortByRules(["name", "level"]); */

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

function orderByProps(object, [...rules]) {
  const proxyObject = { ...object };
  const arrSortByRules = [];

  rules.forEach((rule) => {
    for (const prop in proxyObject) {
      if (String(prop) === rule) {
        const newProp = { key: rule, value: proxyObject[rule] };
        arrSortByRules.push(newProp);
        delete proxyObject[prop];
      }
    }
  });

  /* rules.forEach((rule) => {
    if (rule in proxyObject) {
      const item = { key: rule, value: proxyObject[rule] };
      delete proxyObject[rule];
      arrSortByRules.push(item);
    }
  }); */

  const sortByAlphibite = Object.keys(proxyObject).sort();

  sortByAlphibite.forEach((el) => {
    const nextProp = { key: el, value: proxyObject[el] };
    arrSortByRules.push(nextProp);
  });

  console.log(arrSortByRules);
  return arrSortByRules;
}

orderByProps(obj, ['name', 'level']);

export default orderByProps;
