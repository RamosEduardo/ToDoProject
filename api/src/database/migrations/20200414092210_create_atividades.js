exports.up = (knex) => {
  return knex.schema.createTable('atividades', (atividade) => {
      atividade.increments();
      atividade.string('titulo').notNullable();
      atividade.integer('status').notNullable();
      atividade.string('descricao');
      atividade.integer('endereco_id');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('atividades');
};