const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');
const options = {
    swaggerDefinition: {
        info: {
            title: 'Hyevlog API',
            version: '1.0.0',
            description: 'Hyevlog API with express',
        },
        host: 'localhost:3000',
        basePath: '/',
        definitions: {
            Work: {
                type: "object",
                properties: {
                    workId: {
                        type: "integer",
                        format: "int64"
                    },
                    workTitle: {
                        type: "string"
                    },
                    workDescription: {
                        type: "string"
                    },
                    workImgPath: {
                        type: "string"
                    }
                }
            },
            LoginUser: {
                type: "object",
                properties: {
                    result: {
                        type: "boolean"
                    },
                    accessToken: {
                        type: "string"
                    },
                    refreshToken: {
                        type: "string"
                    },
                    userInfo: {
                        type: "object",
                        properties: {
                            userName: {
                                type: "string"
                            },
                            userId: {
                                type: "string"
                            }
                        }
                    },
                }
            }
        }
    },
    apis: ['./modules/*.js', './swagger/*']
};
const specs = swaggereJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};
