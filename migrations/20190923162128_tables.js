
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
      tbl.increments();
      tbl.text('username', 256)
      // minimal length 
        .notNullable()
        .unique()
        tbl.string('password', 256).notNullable();
        // minimal length 
  })
  .createTable('houses', tbl => {
    tbl.increments();
    tbl.integer('zipCode', 5)
      .notNullable()
    tbl.integer('yearBuilt', 4)
        .notNullable()
    tbl.integer('squareFootage', 5)
    // float?
        .notNullable()
    tbl.integer('bedrooms', 2)
        .notNullable()
    tbl.float('bathrooms', 2)
        .notNullable()
     
})
.createTable('fav', tbl => {
    tbl.integer('userID', 3)
        .unsigned()
        .notNullable()
        .references('id').inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    tbl.integer('houseID', 3)
        .unsigned()
        .notNullable()
        .references('id').inTable('houses')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    tbl.string('name', 256)
        .notNullable()
    tbl.integer('interestLevel', 3)
    tbl.primary(['userID', 'houseID'])
    })
    
};

exports.down = function(knex) {
  return knex.schema 
  .dropTableIfExists('fav')
  .dropTableIfExists('houses')
  .dropTableIfExists('users')
};
