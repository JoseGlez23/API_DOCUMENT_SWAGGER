const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Ventas de Computadoras',
      version: '1.0.0',
      description: 'Documentación de la API para las ventas de computadoras',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./server.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;