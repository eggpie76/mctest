const express = require("express");

let text = "express test 04: ";
const app = express();

// 바코드로 제품 정보 검색 API
app.get("/good/:barcode", (req, res) => {
    const barcode = req.params.barcode;
    text += barcode;
    res.json({ message: text }); // 클라이언트에 응답 반환
});

const PORT = process.env.PORT || 8001; // Cafe24에서 제공하는 포트 사용
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
