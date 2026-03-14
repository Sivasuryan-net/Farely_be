const swaggerautogen = require('swagger-autogen')();

const doc = {
    info :{
        title: 'Farely API -- Backend',
        description: 'API documentation for Farely backend'
        },
    host: 'localhost:8000',
    schemes: ['http']
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./index.js'];  

swaggerautogen(outputFile, endpointsFiles, doc).then(() => {
    console.log('Swagger documentation generated successfully.');
    }
);