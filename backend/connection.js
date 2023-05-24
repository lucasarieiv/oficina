const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '192.168.1.101',
    port: '3306',
    user: 'oficina',
    password: 'oficina@123',
    database: 'netflix',
})

module.exports = connection;