const db = require('../data/dbConfig');

module.exports = {
    add,
    get,
    getBy,
    getById
};

async function add(contact) {
    const [id] = await db('contacts').insert(contact);

    return getById(id);
}

function get() {
    return db('contacts')
        .select('id', 'name', 'phoneNumber', 'email');
}

function getBy(filter) {
    return db('contacts')
        .where(filter);
}

function getById(id) {
    return db('contacts')
        .where({ id })
        .first();
}
