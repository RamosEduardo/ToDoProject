exports.up = knex => {
  return knex.schema.createTable('users', table  => {
      table.increments();
      table.string('name');
      table.string('email').notNullable();
      table.string('senha').notNullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTable('users');
};