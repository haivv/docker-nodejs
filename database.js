const mysql = require('mysql');

// Thông tin kết nối từ biến môi trường hoặc docker-compose.yml
const host = process.env.MYSQL_HOST || 'mdb';
const port = process.env.MYSQL_PORT || '3306';
const user = process.env.MYSQL_USER || 'root';
const password = process.env.MYSQL_PASSWORD || 'Password123!';
const database = process.env.MYSQL_DB || 'mariadb_is_awesome';

const connection = mysql.createConnection({
  host: host,
  port: port,
  user: user,
  password: password,
  database: database
});

connection.connect(function (error) {
    if (error) {
        console.error('Error connecting to MySQL:', error.message);
        dbConnectionStatus = 'Disconnected';
    } else {
        console.log('Connected to MySQL as id', connection.threadId);
        dbConnectionStatus = 'Connected';
    }
});

module.exports = connection;
