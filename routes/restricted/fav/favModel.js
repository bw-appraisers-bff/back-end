const db = require('../../../api/db-config');


module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};

function find() {
  return db('fav')
};

function findById(id) {
  return db('fav')
    .where({ id })
    .first()
};

function add(obj) {
  return db('fav')
    .insert(obj)
    .then(idArr => findById(idArr[0]))
};

function update(id, changes) {
  return db('fav')
    .where({ id })
    .update(changes, 'id')
    .then(count => findById(id))
};

function remove(id) {
  return findById(id)
    .then(res => {
      return db('fav')
        .where({ id })
        .del()
        .then(() => res)
    })
};