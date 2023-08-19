const express = require('express');
const router = express.Router();
const cidadeController = require('../src/controller/cidadeController.js');

router.get('/cidades', cidadeController.listar);
router.get('/cidades/:nome', cidadeController.obterPorNome);

module.exports = router;




