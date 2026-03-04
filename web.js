const http = require("http");

// HTTP 서버 생성
const server = http.createServer((req, res) => {
  // HTTP 응답 설정
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify("abc"));
});

// 서버 실행 (Cafe24에서 제공하는 포트 사용)
const PORT = process.env.PORT || 8001; // Cafe24는 PORT 환경 변수를 통해 포트를 할당합니다.
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
