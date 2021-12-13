const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password:  'AA123456',
        database: 'employeeinfo'
    },
);

module.exports = db;