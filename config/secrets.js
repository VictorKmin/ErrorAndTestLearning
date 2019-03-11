const handler = require('../helpers/envErrorHandler');

module.exports = Object.freeze({
    "secret": process.env.JWT_SECRET || handler('JWT secret'),
    "refreshSecret": "superSecret"
});