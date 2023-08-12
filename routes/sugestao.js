const express = require('express');
const router = express.Router();
const sugestoesController = require('../src/controller/sugestaoController.js');

/**
 * @swagger
 * tags:
 *   name: Sugestões
 *   description: Rotas relacionadas a sugestões
 */

/**
 * @swagger
 * /sugestoes/{modo}/{estilo}:
 *   get:
 *     summary: Obter sugestões com base no modo e estilo
 *     tags: [Sugestões]
 *     parameters:
 *       - name: modo
 *         in: path
 *         description: Modo de sugestão (por exemplo, "trabalho")
 *         required: true
 *         schema:
 *           type: string
 *       - name: estilo
 *         in: path
 *         description: Estilo de sugestão (por exemplo, "nomadedigital")
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 */
router.get('/sugestoes/:modo/:estilo', sugestoesController.sugerir);
/**
 * @swagger
 * /sugestoes/:
 *   get:
 *     summary: Filtrar sugestões
 *     tags: [Sugestões]
 *     parameters:
 *       - name: profissao
 *         in: query
 *         description: Profissão para filtrar sugestões (opcional)
 *         schema:
 *           type: string
 *       - name: idade
 *         in: query
 *         description: Idade para filtrar sugestões (opcional)
 *         schema:
 *           type: number
 *       - name: valormedio
 *         in: query
 *         description: Valor médio para filtrar sugestões (opcional)
 *         schema:
 *           type: number
 *     responses:
 *       '200':
 *         description: OK
 */

router.get('/sugestoes/', sugestoesController.filtrar);
/**
 * @swagger
 * /sugestoes/{modo}/{estilo}/happy-hour:
 *   get:
 *     summary: Obter sugestões de happy hour com base no modo e estilo
 *     tags: [Sugestões]
 *     parameters:
 *       - name: modo
 *         in: path
 *         description: Modo de sugestão (por exemplo, "trabalho")
 *         required: true
 *         schema:
 *           type: string
 *       - name: estilo
 *         in: path
 *         description: Estilo de sugestão (por exemplo, "nomadedigital")
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 */
router.get('/sugestoes/:modo/:estilo/happy-hour', sugestoesController.happyHour);
/**
 * @swagger
 * /sugestoes/{modo}/{estilo}/lugares:
 *   get:
 *     summary: Obter sugestões de lugares com base no modo e estilo
 *     tags: [Sugestões]
 *     parameters:
 *       - name: modo
 *         in: path
 *         description: Modo de sugestão (por exemplo, "trabalho")
 *         required: true
 *         schema:
 *           type: string
 *       - name: estilo
 *         in: path
 *         description: Estilo de sugestão (por exemplo, "nomadedigital")
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 */
router.get('/sugestoes/:modo/:estilo/lugares', sugestoesController.lugares);
/**
 * @swagger
 * /sugestoes/{modo}/{estilo}/acomodacoes:
 *   get:
 *     summary: Obter sugestões de acomodacoes com base no modo e estilo
 *     tags: [Sugestões]
 *     parameters:
 *       - name: modo
 *         in: path
 *         description: Modo de sugestão (por exemplo, "trabalho")
 *         required: true
 *         schema:
 *           type: string
 *       - name: estilo
 *         in: path
 *         description: Estilo de sugestão (por exemplo, "nomadedigital")
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 */
router.get('/sugestoes/:modo/:estilo/acomodacoes', sugestoesController.acomodacoes);
/**
 * @swagger
 * /sugestoes/{modo}/{estilo}/eventos:
 *   get:
 *     summary: Obter sugestões de eventos com base no modo e estilo
 *     tags: [Sugestões]
 *     parameters:
 *       - name: modo
 *         in: path
 *         description: Modo de sugestão (por exemplo, "trabalho")
 *         required: true
 *         schema:
 *           type: string
 *       - name: estilo
 *         in: path
 *         description: Estilo de sugestão (por exemplo, "nomadedigital")
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 */
router.get('/sugestoes/:modo/:estilo/eventos', sugestoesController.eventos);
/**
 * @swagger
 * /sugestoes/{modo}/{estilo}/experiencias:
 *   get:
 *     summary: Obter sugestões de experiencias com base no modo e estilo
 *     tags: [Sugestões]
 *     parameters:
 *       - name: modo
 *         in: path
 *         description: Modo de sugestão (por exemplo, "trabalho")
 *         required: true
 *         schema:
 *           type: string
 *       - name: estilo
 *         in: path
 *         description: Estilo de sugestão (por exemplo, "nomadedigital")
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 */
router.get('/sugestoes/:modo/:estilo/experiencias', sugestoesController.experiencias);
/**
 * @swagger
 * /sugestoes/{modo}/{estilo}/alimentacao:
 *   get:
 *     summary: Obter sugestões de alimentacao com base no modo e estilo
 *     tags: [Sugestões]
 *     parameters:
 *       - name: modo
 *         in: path
 *         description: Modo de sugestão (por exemplo, "trabalho")
 *         required: true
 *         schema:
 *           type: string
 *       - name: estilo
 *         in: path
 *         description: Estilo de sugestão (por exemplo, "nomadedigital")
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 */
router.get('/sugestoes/:modo/:estilo/alimentacao', sugestoesController.alimentacao);
/**
 * @swagger
 * /sugestoes/{modo}/{estilo}/passeios-guiados:
 *   get:
 *     summary: Obter sugestões de passeiosguiados com base no modo e estilo
 *     tags: [Sugestões]
 *     parameters:
 *       - name: modo
 *         in: path
 *         description: Modo de sugestão (por exemplo, "trabalho")
 *         required: true
 *         schema:
 *           type: string
 *       - name: estilo
 *         in: path
 *         description: Estilo de sugestão (por exemplo, "nomadedigital")
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 */
router.get('/sugestoes/:modo/:estilo/passeios-guiados', sugestoesController.passeiosGuiados);

module.exports = router;