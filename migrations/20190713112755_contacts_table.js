
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users => {
    users
      .increments();

    users 
      .string('username', 128)
      .notNullable()
      .unique();

    users
      .string('contactName', 128)
      .notNullable();

    users
      .string('contactEmail', 128)
      .notNullable()
      
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
