const mysql = require('mysql2');

// 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: '10.0.0.1', // Cafe24에서 제공하는 DB 호스트
  user: 'martcalctest', // DB 사용자 이름
  password: 'backery12!', // DB 비밀번호
  database: 'martcalctest' // DB 이름
});

var text = " -- ";

// 연결 시도
connection.connect((err) => {
  if (err) {
    text += "1.err "+err.stack;
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

//03.10
var sqlquery = 'CREATE TABLE goods (barcode TEXT, name TEXT, price TEXT, img TEXT, cdc TEXT, sdcs TEXT, fdcs TEXT, url TEXT, co TEXT, cdcs TEXT)';
connection.query(sqlquery, (err, results) => {
  if (err) {
    console.error('쿼리 실행 실패:', err.message);
    return;
  }
  text += "\n테이블 생성됨"; //+results[0].solution;
  console.log('테이블 생성됨');
  //console.log('쿼리 결과 ', results[0].solution);
});
//

// 쿼리 실행 예제
//connection.query('SELECT 1 + 1 AS solution', (err, results) => {
//  if (err) {
//    console.error('쿼리 실행 실패:', err.message);
//    return;
//  }
//  text += "\n쿼리 결과"+results[0].solution;
//  console.log('쿼리 결과 ', results[0].solution);
//});

// 연결 종료
connection.end();
//

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(text));
});

const PORT = process.env.PORT || 8001; // Cafe24에서 제공하는 포트 사용
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
