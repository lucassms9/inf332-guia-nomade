const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', // Versão do OpenAPI Specification
    info: {
      title: 'Nome da API',
      version: '1.0.0',
      description: 'Descrição da API',
    },
  },
  // Arquivos que contêm as rotas a serem documentadas
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
