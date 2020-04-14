const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        const atividades = await connection('atividades').select('*');
        return res.status(200).json({ atividades })
    },

    async create(req, res) {
      
        const { titulo, status, descricao, endereco_id} = req.body;

        await connection('atividades').insert({
          titulo,
          status: 1,
          descricao,
          endereco_id
        });

        return res.status(201).json('Sucess');
    },

    async update(req, res) {
      
      const { titulo, status, descricao, endereco_id} = req.body;
      const { id } = req.params; 

      await connection('atividades')
      .where('id',id)
      .update({
        titulo,
        status,
        descricao,
        endereco_id
      })

      return res.status(200).json('Sucess');
  }
}