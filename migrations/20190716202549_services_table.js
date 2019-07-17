exports.up = function (knex, Promise) {
  return knex.schema.createTable('services', services => {
      services
          .increments();

      services
          .string('service', 128)
          .notNullable()
          .unique();

      


  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('services');
};