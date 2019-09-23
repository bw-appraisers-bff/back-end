
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fav').del()
    .then(function () {
      // Inserts seed entries
      return knex('fav').insert([
        {userID: 1, houseID: 1, name: 'Cool house', interestLevel: 75},
        {userID: 1, houseID: 2, name: 'Nice view from patio', interestLevel: 80},
        {userID: 2, houseID: 1, name: 'Great interior', interestLevel: 100},
        {userID: 2, houseID: 2, name: 'Public transportation aAccessible', interestLevel: 91},
        {userID: 2, houseID: 3, name: 'Great view', interestLevel: 88},
        {userID: 3, houseID: 3, name: 'Dog loves it', interestLevel: 73},
      ]);
    });
};
