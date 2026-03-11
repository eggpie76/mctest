const express = require("express");
const app = express();

// 포트 설정
const PORT = process.env.PORT || 8001;

// GET 요청 처리
app.get("/hello", (req, res) => {
    const name = req.query.name || "Guest"; // 쿼리 스트링에서 이름 가져오기
    const message = `Hello, ${name}!`;
    res.json({ message });
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
