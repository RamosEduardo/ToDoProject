const express = require('express');
const cors = require('cors');
const routes = express.Router();

const AtividadeController = require('../controller/AtividadeController');
const EnderecoController = require('../controller/EnderecoController');

routes.use(express.json());
routes.use(cors());

routes.post('/atividades', AtividadeController.create);
routes.get('/atividades', AtividadeController.index);
routes.put('/atividades/:id', AtividadeController.update);
routes.delete('/atividades/:id', AtividadeController.delete);

routes.post('/enderecos', EnderecoController.create);
routes.get('/enderecos', EnderecoController.index);
routes.put('/enderecos/:id', EnderecoController.update);
routes.delete('/enderecos/:id', EnderecoController.delete);

module.exports = routes;