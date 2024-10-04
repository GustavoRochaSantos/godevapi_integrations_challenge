const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Listagem das APIS',
    description: 'Esta é a documentação das APIs do projeto',
  },
  host: 'localhost:3000',
  definitions: { 
    Contact: {
      createdAt: "2024-10-03T19:17:59.118Z",
      archived: false,
      id: "64395919479",
      properties: {
        createdate: "2024-10-03T19:17:59.118Z",
        email: "emailmaria@hubspot.com",
        firstname: "Maria",
        hs_object_id: "64395919479",
        lastmodifieddate: "2024-10-03T19:18:07.134Z",
        lastname: "Johnson (Sample Contact)"
      },
      updatedAt: "2024-10-03T19:18:07.134Z"
    },
    Contacts:{
      results: [
        {
          $ref: "#/definitions/Contact"
        }
      ]
    },
    GoogleHubImport:{ 
      qtdContactsImported: 0,
      qtdContactsAlreadyExist: 2,
      qtdContactsExcludedDomain: 0,
      qtdContactsErrorApi: 0
    }
  }
};

const outputFile = './swagger-output.json';
const routes = ['../../routes/index.ts'];

swaggerAutogen(outputFile, routes, doc);