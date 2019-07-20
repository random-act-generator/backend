const db = require('../data/dbConfig');

module.exports = {
    add,
    get,
    getBy,
    getById,
    update,
    remove,
};

async function add(service) {
    const [id] = await db('services').insert(service);

    return getById(id);
}

function get() {
    return db('services')
        .select('id', 'service');
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


function update(id, changes) {
    return db('services')
        .where({ id })
        .update(changes)
        .then(count => {
            if (count > 0) {
                return getById(id);
            } else {
                return null;
            }
        });
}

function remove(id) {
    return db('services')
        .where({ id })
        .del();
}
