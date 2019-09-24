const db = require('../../../api/db-config');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db('houses')
};

function findById(id) {
  return db('houses')
    .where({ id })
    .first()
};

function add(obj) {
  return db('houses')
    .insert(obj)
    .then(idArr => findById(idArr[0]))
};

function update(id, changes) {
  return db('houses')
    .where({ id })
    .update(changes, 'id')
    .then(count => findById(id))
};

function remove(id) {
  return findById(id)
    .then(res => {
      return db('houses')
        .where({ id })
        .del()
        .then(() => res)
    })
};