// const swaggerJsDoc = require('swagger-jsdoc');

// const options = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//         title: 'Travel Management API',
//         version: '1.0.0',
//         description: 'API for managing users, tours, and bookings in a travel system',
//         },
//     },
//     apis: ['./routes/*.js'],
// };

// const swaggerSpec = swaggerJsDoc(options);

// module.exports = swaggerSpec;


const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Project',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes*.js'],
};

const openapiSpecification = swaggerJsdoc(options);
