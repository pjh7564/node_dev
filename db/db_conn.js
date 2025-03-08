var mysql = require('mysql2');
var config = require('./db_info').local;

module.exports = function () {
    return {
        init: function () {
            return mysql.createConnection({
                host: config.host,
                user: config.user,
                password: config.password,
                port: config.port,
                database: config.database,
            })
        }
    }
};