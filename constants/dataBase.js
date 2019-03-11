const handler = require('../helpers/envErrorHandler');

module.exports = Object.freeze({
    "dbName": process.env.DB_NAME || handler('DataBase Name'),
    "dbPass": process.env.DB_USER || handler('DataBase User'),
    "dbUser": process.env.DB_PASS || handler('DataBase Password'),
});