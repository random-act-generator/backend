exports.up = function (knex, Promise) {
    return knex.schema.createTable('contacts', contacts => {
        contacts
            .increments();

        contacts
            .string('name', 128)
            .notNullable()
            .unique();

        contacts
            .string('phoneNumber', 128)
            .notNullable()
            .unique();

        contacts
            .string('email', 128)
            .notNullable()
            .unique();


    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('contacts');
};