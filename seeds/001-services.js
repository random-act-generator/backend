
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('services').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('services').insert([
        { id: 1, service: 'Make a donation in their name.' },
        { id: 2, service: 'Take them to religious/spiritual venue of their choice' },
        { id: 3, service: 'Clean their gutters' },
        { id: 4, service: 'Babysit their kids/pet on an evening out of their choice' },
        { id: 5, service: 'Cook them dinner' }
      ]);
    });
};
