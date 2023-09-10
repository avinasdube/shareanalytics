import swaggerJsdoc from 'swagger-jsdoc';
 
const options = {
 
  swaggerDefinition: {
    openapi: '3.0.0',  
    info: {
      title: 'Your API Documentation',  
      version: '1.0.0', 
      description: 'Documentation for your API',
    },
  },
  
  apis: ['./index.js'],  
};
 
const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
