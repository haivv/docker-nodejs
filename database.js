const mysql = require('mysql');

// Thông tin kết nối từ biến môi trường hoặc docker-compose.yml
const host = process.env.MYSQL_HOST || '127.0.0.1'; //
const port = process.env.MYSQL_PORT || '3307';
const user = process.env.MYSQL_USER || 'root';
const password = process.env.MYSQL_PASSWORD || 'Password123!'; // Thay đổi thành mật khẩu root của MariaDB
const database = process.env.MYSQL_DB || 'mariadb_is_awesome'; // Thay đổi thành tên cơ sở dữ liệu bạn đã tạo trong docker-compose.yml


const connection = mysql.createConnection({
  host: host,
  port: port,
  user: user,
  password: password,
  database: database
});


connection.connect(function (error) {
    if (error) {
        console.error('Error connecting to MySQL:', error.stack);
        dbConnectionStatus = 'Disconnected';
    }
    else {
        console.log('Connected to MySQL as id', connection.threadId);
        dbConnectionStatus = 'Connected';
    }
});

module.exports = connection;
