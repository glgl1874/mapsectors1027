const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;

// public 디렉토리에서 정적 파일 서빙
app.use(express.static('public'));

// 섹터 데이터를 제공하는 API 엔드포인트
app.get('/sectors', (req, res) => {
  fs.readFile(path.join(__dirname, 'sectors.json'), 'utf8', (err, data) => {
      if (err) {
          res.status(500).send('섹터 데이터를 읽는 중 오류 발생');
      } else {
          res.sendFile(_dirname + '/public/index.html');
      }
  });
});

// 서버 실행
app.listen(PORT, () => {
    console.log('서버가 http://localhost:${PORT} 에서 실행 중입니다.');
});