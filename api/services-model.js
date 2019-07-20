const db = require('../data/dbConfig');

module.exports = {
  add,
  get,
  getBy,
  getById
};

async function add(service) {
  const id = await db('services').insert(service);
  return id;
}

function get() {
  return db('services')
    .select('services');
}

function getBy(filter) {
  return db('services')
    .where(filter);
}

function getById(id) {
  return db('services')
    .where({ id })
    .first();
}