const mysql = require('mysql2');

// 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: '10.0.0.1', // Cafe24에서 제공하는 DB 호스트
  user: 'martcalctest', // DB 사용자 이름
  password: 'backery34!', // DB 비밀번호
  database: 'martcalctest' // DB 이름
});

// 연결 시도
connection.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

// 연결 종료
connection.end();
//

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify("Hello from Node.js server! noahlee"));
});

const PORT = process.env.PORT || 8001; // Cafe24에서 제공하는 포트 사용
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
