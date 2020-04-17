const connection = require('../database/connection');

module.exports = {

    async index(req, res) {

        // const atividades = await connection('atividades').select('*').rightOuterJoin('enderecos','enderecos.id', 'atividades.endereco_id')

        const atividades = await connection('atividades').select('*');

        // atividades.forEach(atividade => {
        //   if (atividade.endereco_id) {
        //     const teste = connection('enderecos').select('*')
        //     console.log(teste);
            
        //   }
        // })

        return res.status(200).json({ atividades })
    },

    async create(req, res) {
      
      const { title, status, descricao, endereco_id} = req.body;

      const id = await connection('atividades').insert({
        titulo: title,
        status: 1,
        descricao,
        endereco_id
      });

      return res.status(200).json({id});
    },

    async update(req, res) {
      
      const { title, status, descricao, endereco_id} = req.body;
      const { id } = req.params; 

      await connection('atividades')
      .where('id',id)
      .update({
        titulo: title,
        status,
        descricao,
        endereco_id
      })

      return res.status(200).json('Sucess');
    },

    async delete(req, res) {
      const { id } = req.params;

      await connection('atividades')
      .where('id',id)
      .delete()

      res.status(200).send('Sucess Removed')
    }
}