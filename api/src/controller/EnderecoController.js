const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const enderecos = await connection('enderecos').select('*');
    return res.json({ enderecos })
  },

  async create(req, res) {
    
    const { cep, rua, numero, bairro, cidade, estado} = req.body;

    await connection('enderecos').insert({
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado
    });

    return res.status(201).send('Sucess');
  },

  async update(req, res) {
    
    const { cep, rua, numero, bairro, cidade, estado} = req.body;
    const { id } = req.params;

    await connection('enderecos')
    .where('id',id)
    .update({
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado
    });

    return res.status(200).send('Sucess');
  },

  async delete(req, res) {
    const { id } = req.params;

    await connection('enderecos')
    .where('id',id)
    .delete()

    res.status(200).send('Sucess Removed')

  }

}