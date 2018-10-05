const Chance = require('chance');
const chance = new Chance();

module.exports = () => {
  const people = [];

  for (let i = 1; i <= 20; i++) {
    people.push({
      id: i,
      name: chance.name(),
      count: chance.rpg('1d6', { sum: true }),
    });
  }

  /*
  const people = [
    { id: 1, name: 'Bart Simpson', count: 0 },
    { id: 2, name: 'Lisa Simpson', count: 0 },
    { id: 3, name: 'Waylon Smithers', count: 0 },
    { id: 4, name: 'Montgomery Burns', count: 0 },
    { id: 5, name: 'Hans Moleman', count: 0 },
    { id: 6, name: 'Seymour Skinner', count: 0 },
  ];
  */

  const data = {
    people,
  };

  return { data };
};
