const express = require('express');
const router = express.Router();
const estilosController = require('../src/controller/estiloController.js');

/**
 * @swagger
 * tags:
 *   name: Estilos
 *   description: Endpoints relacionados aos estilos
 */

/**
 * @swagger
 * /estilos:
 *   get:
 *     summary: Listar estilos
 *     tags: [Estilos]
 *     responses:
 *       200:
 *         description: Lista de estilos
 */
router.get('/estilos', estilosController.listar);
/**
 * @swagger
 * /estilos/{id}:
 *   get:
 *     summary: Obter estilo por ID
 *     tags: [Estilos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do estilo a ser obtido
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Estilo encontrado
 *       404:
 *         description: Estilo não encontrado
 */
router.get('/estilos/:id', estilosController.obterPorId);

module.exports = router;




