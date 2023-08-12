const express = require('express');
const router = express.Router();
const pesquisasController = require('../src/controller/lugarController.js');

router.get('/lugares', pesquisasController.buscar);

module.exports = router;