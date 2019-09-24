
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('prices')
    .then(function () {
      // Inserts seed entries
      return knex('prices').insert([
        {houseID: 1, price: 90000},
        {houseID: 2, price: 80500},
        {houseID: 3, price: 72340},
      ]);
    });
};
