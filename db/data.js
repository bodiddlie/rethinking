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

  const data = {
    people,
  };

  return { data };
};
