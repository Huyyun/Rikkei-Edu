const mysql = require('mysql2/promise');

let pool = mysql.createPool({
    host: "localhost",
    user: 'root',
    password: '12345678',
    database: 'new_dev_data',
});

module.exports = pool;