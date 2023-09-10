const swaggerJsdoc = require('swagger-jsdoc');

const options = {
 
  swaggerDefinition: {
    openapi: '3.0.0', 
    info: {
      title: 'shareanalytics',
      version: '1.0.0',
      description: 'Documentation for your API',
    },
  },
 
  apis: ['./sa-server/index.js'], 
};


const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;