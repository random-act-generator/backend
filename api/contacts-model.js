const db = require('../data/dbConfig');

module.exports = {
    add,
    get,
    getBy,
    getById,
    update,
    remove,
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


function update(id, changes) {
    return db('contacts')
        .where({ id })
        .update(changes)
        .then(count => {
            if (count > 0) {
                return findById(id);
            } else {
                return null;
            }
        });
}

function remove(id) {
    return db('contacts')
        .where({ id })
        .del();
}
