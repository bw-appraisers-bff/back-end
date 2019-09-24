
exports.seed = function(knex) {
  return knex('fav')
    .then(function () {
    
      return knex('fav').insert([
        {userID: 1, houseID: 1, name: 'Cool house', interestLevel: 75},
        {userID: 2, houseID: 2, name: 'Nice view from patio', interestLevel: 80},
        {userID: 3, houseID: 3, name: 'Great interior', interestLevel: 100},
        // {userID: 4, houseID: 0, name: 'Public transportation aAccessible', interestLevel: 91},
        // {userID: 5, houseID: 12, name: 'Great view', interestLevel: 88},
        // {userID: 6, houseID: 13, name: 'Dog loves it', interestLevel: 73},
      ]);
    });
};
