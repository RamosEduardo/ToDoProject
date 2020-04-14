exports.up = (knex) => {
  return knex.schema.createTable('enderecos', (endereco) => {
      endereco.increments();
      endereco.string('cep').notNullable();
      endereco.string('rua').notNullable();
      endereco.string('numero').notNullable();
      endereco.string('bairro').notNullable();
      endereco.string('cidade').notNullable();
      endereco.string('estado').notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('enderecos');
};