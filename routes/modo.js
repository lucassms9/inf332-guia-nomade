const express = require('express');
const router = express.Router();
const modosController = require('../src/controller/modoController.js');

/**
 * @swagger
 * tags:
 *   name: Modos
 *   description: Endpoints relacionados aos modos
 */

/**
 * @swagger
 * /modos:
 *   get:
 *     summary: Listar modos
 *     tags: [Modos]
 *     responses:
 *       200:
 *         description: Lista de modos
 */
router.get('/modos', modosController.listar);
/** 
 * @swagger
 * /modos/{id}:
 *   get:
 *     summary: Obter modo por ID
 *     tags: [Modos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do modo a ser obtido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Modo encontrado
 *       404:
 *         description: Modo não encontrado
 */
router.get('/modos/:id', modosController.obterPorId);

module.exports = router;