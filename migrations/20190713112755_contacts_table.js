
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', contacts => {
    contacts
      .increments();

    contacts 
      .string('username', 128)
      .notNullable()
      .unique();
    
    contacts
      .string('userEmail', 128)
      .notNullable()
      .unique();

    contacts
      .string('contactName', 128)
      .notNullable();

    contacts
      .string('contactEmail', 128)
      .notNullable()
      
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('contacts');
};
