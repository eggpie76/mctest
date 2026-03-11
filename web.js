const express = require("express");
const http = require("http");

var text = "express test 01";
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  text += ", ok";
  res.end(JSON.stringify(text));
});

const PORT = process.env.PORT || 8001; // Cafe24에서 제공하는 포트 사용
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


