const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify("Hello from Node.js server! jhlee"));
});

const PORT = process.env.PORT || 8001; // Cafe24에서 제공하는 포트 사용
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const mysql = require('mysql2');

// 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'your-database-host', // Cafe24에서 제공하는 DB 호스트
  user: 'your-database-username', // DB 사용자 이름
  password: 'your-database-password', // DB 비밀번호
  database: 'your-database-name' // DB 이름
});