
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('houses')
    .then(function () {
      // Inserts seed entries
      return knex('houses').insert([
        {zipCode: 90210, yearBuilt: 1960, squareFootage: 1000, bedrooms: 10, bathrooms: 5.5},
        {zipCode: 10024, yearBuilt: 1975, squareFootage: 2500, bedrooms: 1, bathrooms: 0.5},
        {zipCode: 60007, yearBuilt: 1920, squareFootage: 5200, bedrooms: 3, bathrooms: 2},
      ]);
    });
};
