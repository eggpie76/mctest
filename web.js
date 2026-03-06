const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify("Hello from Node.js server! jhlee"));
});

const PORT = process.env.PORT || 8001; // Cafe24에서 제공하는 포트 사용
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

