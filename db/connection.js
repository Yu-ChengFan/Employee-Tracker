const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password:  'AA123456',
        database: 'employee_tracker'
    },
    console.log('Connection Made.')
);

module.exports = connection;